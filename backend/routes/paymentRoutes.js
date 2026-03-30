import express from "express";
import {
  submitPayment,
  getAllPayments,
  updatePaymentStatus,
  checkPaymentStatus
} from "../controllers/paymentController.js";

const router = express.Router();

router.post("/submit", submitPayment);
router.get("/all", getAllPayments);
router.post("/update", updatePaymentStatus);

// 🔥 NEW ROUTE
router.get("/status/:utr", checkPaymentStatus);

export default router;