import express from "express";
import cors from "cors";
import { sequelize } from "../db/connection";
import clientRoutes from "../../infrastructure/http/routes/clientRoutes";


const app = express();

// Middleware globaux
app.use(cors());
app.use(express.json());

//Routes
app.use("/api/clients", clientRoutes);


sequelize.sync().then(() => {
  console.log("Database synchronized");
});

export default app;
