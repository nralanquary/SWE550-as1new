const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    // _id
    "EmployeeID": Number,
    "Firstname": String,
    "Lastname": String,
    "Age": Number,
    "Gender": String
});

module.exports = mongoose.model('Employee', employeeSchema)