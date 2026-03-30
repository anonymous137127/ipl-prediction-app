import express from "express";
import {
  submitPayment,
  getAllPayments,
  updatePaymentStatus
} from "../controllers/paymentController.js";

const router = express.Router();

// ✅ submit UTR
router.post("/submit", submitPayment);

// ✅ get all payments (admin)
router.get("/all", getAllPayments);

// ✅ update status (approve/reject)
router.post("/update", updatePaymentStatus);

export default router;