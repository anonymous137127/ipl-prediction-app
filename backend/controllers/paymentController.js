import Payment from "../models/Payment.js";

// ✅ SUBMIT PAYMENT
export const submitPayment = async (req, res) => {
  try {
    const { utr } = req.body;

    if (!utr) {
      return res.status(400).json({ message: "UTR required" });
    }

    const payment = await Payment.create({
      utr,
      status: "pending"
    });

    res.json({ message: "Payment stored", payment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ GET ALL PAYMENTS (ADMIN)
export const getAllPayments = async (req, res) => {
  try {
    const payments = await Payment.find().sort({ createdAt: -1 });
    res.json(payments);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ✅ UPDATE STATUS
export const updatePaymentStatus = async (req, res) => {
  try {
    const { id, status } = req.body;

    if (!id || !status) {
      return res.status(400).json({ message: "ID & status required" });
    }

    const payment = await Payment.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.json({ message: "Status updated", payment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// 🔥 NEW: CHECK PAYMENT STATUS BY UTR
export const checkPaymentStatus = async (req, res) => {
  try {
    const { utr } = req.params;

    const payment = await Payment.findOne({ utr });

    if (!payment) {
      return res.status(404).json({ message: "Payment not found" });
    }

    res.json({ status: payment.status });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};