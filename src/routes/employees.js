import { Router } from "express";

import {
    getEmployee,
    getEmployees,
    createEmployees,
    updateEmployees,
    deleteEmployees
} from "../controllers/employees.js";

const router = Router();

router.get("/employee/:id", getEmployee);
router.get("/employees", getEmployees);
router.post("/employees", createEmployees);
router.patch("/employees/:id", updateEmployees);
router.delete("/employees/:id", deleteEmployees);

export default router;