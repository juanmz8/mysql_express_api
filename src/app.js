import express from "express";
import employeesRoutes from "./routes/employes.routes.js";

const app = express();

app.use(express.json())
app.use("https://mysqlexpressapi-production.up.railway.app/api",employeesRoutes);

app.use((req, res,next) => {
   res.status(404).json({
      message:"url not Found"
   })
})

export default app;