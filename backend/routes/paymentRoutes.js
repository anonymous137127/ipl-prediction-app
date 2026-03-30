import express from "express";
import { submitUTR } from "../controllers/paymentController.js";

const router = express.Router();

router.post("/submit", submitUTR);

export default router;