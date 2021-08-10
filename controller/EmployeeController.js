const Employee = require('../models/Employee')
const { response } = require('express')

const index = (req, res, next ) =>{
    Employee.find()
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
            message: 'An error Occured'
        })
    })
    
}
const show = (req, res, next) => {
    let employeeID = req.body.employeeID
    Employee.findById(employeeID)
    .then(response =>{
        res.json({
            response
        })
    })
    .catch(error =>{
        res.json({
        message:"An error Occured..!"
        })
    })
}
const store = (req, res, next) => {
    let employee = new Employee({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        city: req.body.city
    })
    /* if (req.file){
        employee.avatar = req.file.path
    } */
    employee.save()
    .then(response =>{
        res.json({
            message:"Employee Added Successfully"
        })
    })
    .catch(error =>{
        res.json({
            message:"An erro Occured"
        })
    })

}

const update = (req, res, next) =>{
    let employeeID = req.body.employeeID

    let updatedData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
        city: req.body.city
    }
    Employee.findByIdAndUpdate(employeeID , {$set: updatedData})
    .then(() => {
        res.json({
            message: 'Employee updated successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}

const destroy = (req, res, next) =>{
    let employeeID = req.body.employeeID

    Employee.findByIdAndRemove(employeeID)
    .then(() => {
        res.json({
            message: 'Employee deleted successfully'
        })
    })
    .catch(error => {
        res.json({
            message: 'An error Occured'
        })
    })
}

module.exports = {
    index, show, store, update, destroy
}