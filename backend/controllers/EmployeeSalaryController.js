import EmployeeSalaryModel from "../models/EmployeeSalaryModel.js";
import EmployeeModel from "../models/EmployeeModel.js";
 
//Create a function to create a new employee salary
export async function addEmployeeSalary(req, res) {
    const NIC = req.body.NIC
    const basicSal = req.body.basicSal
    const otHours = req.body.otHours
    const otRate = req.body.otRate
    const otTotal = req.body.otTotal
    const bonus = req.body.bonus
    const totalSal = req.body.totalSal
    const month = req.body.month
 
    console.log(NIC,basicSal, otHours, otRate, otTotal, bonus, month)
 
    const employeeSalary = new EmployeeSalaryModel({
        NIC : NIC,
        basicSal: basicSal,
        otHours: otHours,
        otRate: otRate,
        otTotal: otTotal,
        bonus: bonus,
        totalSal: totalSal,
        month: month
    })
 
    try {
        await employeeSalary.save()
        console.log("successfully data inserted")
 
       
 
        res.status(200).send("Data inserted successfully");
    } catch (err) {
        console.log(err);
        res.status(500).send("Error occurred while inserting data");
    }
}
 
// Create a function to read all employees' salary information
export async function getAllEmployeeSalary(req, res){
 
    const empId = req.params.id
 
    try {
        const employeeSalary = await EmployeeSalaryModel.find({}); //{ empId }
        res.status(200).json(employeeSalary);
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while retrieving data');
    }
}
 
// Create a function to read a single employee salary by id
export async function getEmployeeSalary(req, res) {
    try {
        const employeeSalary = await EmployeeSalaryModel.findById(req.params.id);
        console.log('Employee Salary read successfully for update');
        res.status(200).json(employeeSalary);
    } catch (err) {
        console.error(err);
        res.status(500).send('Error occurred while retrieving data');
    }
}
 
// Create a function to update an employee's salary by id
export async function updateEmployeeSalary(req, res) {
    const objectId = req.params.id;
    const { basicSal,
            otHours,
            otRate,
            otTotal,
            bonus,
            totalSal,
            month
    } = req.body;
 
    try {
        const updatedEmployeeSalary = await EmployeeSalaryModel.findByIdAndUpdate(
            objectId,
            {
                basicSal,
                otHours,
                otRate,
                otTotal,
                bonus,
                totalSal,
                month
            },
            { new: true }
        );
 
        // Check if updatedEmployeeSalary is null
        if (!updatedEmployeeSalary) {
            return res.status(404).send('Employee salary not found');
        }
 
        // If it's not null, send the updated employee salary
        res.status(200).json(updatedEmployeeSalary);
 
        // Update totalSal for the associated employee
        const employee = await EmployeeModel.findById(objectId);
        if (employee) {
            employee.totalSal = totalSal;
            await employee.save();
            console.log('Employee salary details updated successfully');
        } else {
            console.log('Associated employee not found');
        }
 
    } catch (err) {
        console.log(err);
        res.status(500).send('Error occurred while updating data');
    }
}
 
// Export all the controller functions as an object
export default { addEmployeeSalary, getAllEmployeeSalary, getEmployeeSalary, updateEmployeeSalary};