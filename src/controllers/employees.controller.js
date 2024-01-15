import { pool } from "../db.js";

export const getEmployee = async (req, res) => {
    try {
        const [employee] = await pool.query(
            "SELECT id,name,salary FROM employee WHERE id=?",[req.params.id]
        );

        if (employee.length <= 0) {
            res.status(404).send("Employee not Found (404)");
        } else {
            res.json(employee[0]);
        }
    } catch (error) {
        res.status(500).send("Error in the Server in method get");
    }
};

export const getEmployees = async (req, res) => {
    try {
        const [employees] = await pool.query(
            "SELECT id,name,salary FROM employee"
        );
        res.send(employees);
    } catch (error) {
        res.status(500).send("Error in the Server in method get general");
    }
};

export const createEmployees = async (req, res) => {
    const { name, salary } = req.body;

    try {
        const [logs] = await pool.query(
            "INSERT INTO employee(name,salary) VALUES (?,?)",[name, salary]
        );

        res.send({
            id: logs.insertId,
            name,
            salary,
        });
    } catch (error) {
        res.status(500).send("Error in the Server in method post");
    }
};

export const updateEmployees = async (req, res) => {
    const { id } = req.params;
    const { name, salary } = req.body;

    try {
        const [employeeUpdate] = await pool.query(
            "UPDATE employee SET name= IFNULL(?, name) , salary=IFNULL(?, salary) WHERE id=?",
            [name, salary, id]
        );

        if (employeeUpdate.affectedRows === 0) {
            res.status(404).send("Employee not Found (404)");
        } else {
            const [employeeUpdate] = await pool.query(
                "SELECT id,name,salary FROM employee WHERE id=?",[id]
            );
            res.send(employeeUpdate[0]);
        }
    } catch (error) {
        res.status(500).send("Error in the Server in method patch");
    }
};

export const deleteEmployees = async (req, res) => {
    try {
        const [deletedEmployee] = await pool.query(
            "DELETE FROM employee WHERE id=?",[req.params.id]
        );

        if (deletedEmployee.affectedRows === 1) {
            res.sendStatus(204);
        } else {
            res.status(404).json({
                message: "Impossible delete Employee, Not exist",
            });
        }
    } catch (error) {
        res.status(500).send("Error in the Server in method delete");
    }
};

function A() {
    function B() {
        function C() {
            function D() {
                function E() {
                    function F() {

                    }
                }
            }
        }
    }
}
