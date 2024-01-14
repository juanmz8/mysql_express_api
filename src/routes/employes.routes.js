import { Router } from "express";

import { getEmployees } from "../controllers/employees.controller.js";
import { getEmployee } from "../controllers/employees.controller.js";
import { createEmployees } from "../controllers/employees.controller.js";
import { updateEmployees } from "../controllers/employees.controller.js";
import { deleteEmployees } from "../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employee/:id", getEmployee);

router.post("/employees", createEmployees);

router.patch("/employees/:id", updateEmployees);

router.delete("/employees/:id", deleteEmployees);

export default router;