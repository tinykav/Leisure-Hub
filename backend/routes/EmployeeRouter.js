import express from 'express';
import { addEmployee , getAllEmployee, getEmployee, updateEmployee, deleteEmployee} from '../controllers/EmployeeController.js';


//router object
const router = express.Router();

console.log('IN employeeRouter');

//create an employee
router.post('/addEmployee', addEmployee);

// get all employees
//router.get('/getEmployee', getAllEmployee);
router.get('/getAllEmployee', getAllEmployee);


// get one employee by id
router.get('/getEmployee/:id', getEmployee);

// update an employee by id
router.put('/updateEmployee/:id', updateEmployee);

// delete an employee by id
router.delete('/deleteEmployee/:id', deleteEmployee);

export default router;