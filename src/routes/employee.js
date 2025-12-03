import express from "express";
import { assignCardToEmployee } from "../controllers/employeeController.js";

const router = express.Router();

router.post("/assign-card", assignCardToEmployee);

export default router;
