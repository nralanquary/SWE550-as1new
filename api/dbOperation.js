const mongoose = require('mongoose');
const config    = require('./dbConfig'); 
const Employee = require('./models/Employee')
const connect = () => mongoose.connect(config.dbConnectionString).then(() => console.log('db is connected'));

const getEmployees = async(count) => {
    console.log({
        count
    })
    const employees = await Employee.find({}).limit(count);
    return employees;
} 

const createEmployees = async(employee) => {
   const newEmployee = await Employee.create(employee);
   return newEmployee;
} 
module.exports = {
    connect,
    createEmployees,
    getEmployees 
}