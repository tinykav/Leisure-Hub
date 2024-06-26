import express from 'express';
import { addEmployeeSalary, getAllEmployeeSalary, getEmployeeSalary, updateEmployeeSalary} from '../controllers/EmployeeSalaryController.js';

const router = express.Router();

console.log('IN employeeSalaryRouter');

// create an employee salary
router.post('/addEmployeeSalary', addEmployeeSalary);

// get all employees' salaries
router.get('/getAllEmployeeSalary', getAllEmployeeSalary);

// get one employee salary by id
router.get('/getEmployeeSalary/:id', getEmployeeSalary);

// update an employee salary by id
router.put('/updateEmployeeSalary/:id', updateEmployeeSalary);

export default router;