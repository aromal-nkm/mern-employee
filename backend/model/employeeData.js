const mongoose =require('mongoose')
const employeeSchema = mongoose.Schema({
    employeeID : String,
    employeeName : String,
    employeeDesignation : String,
    employeeSalary : Number,
    employeeDepartment : String,
    employeeLocation : String
      
})
 
const employeeData = mongoose.model('mern',employeeSchema)
module.exports = employeeData;