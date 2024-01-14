import { Router } from "express";

import { getEmployees } from "../controllers/employees.controller.js";
import { getEmployee } from "../controllers/employees.controller.js";
import { createEmployees } from "../controllers/employees.controller.js";
import { updateEmployees } from "../controllers/employees.controller.js";
import { deleteEmployees } from "../controllers/employees.controller.js";

const router = Router();

router.get("https://mysqlexpressapi-production.up.railway.app/api//employees", getEmployees);
router.get("https://mysqlexpressapi-production.up.railway.app/api/employee/:id", getEmployee);

router.post("/https://mysqlexpressapi-production.up.railway.app/api/employees", createEmployees);

router.patch("https://mysqlexpressapi-production.up.railway.app/api//employees/:id", updateEmployees);

router.delete("https://mysqlexpressapi-production.up.railway.app/api//employees/:id", deleteEmployees);

export default router;