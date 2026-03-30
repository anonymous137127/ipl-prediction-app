import Payment from "../models/Payment.js";

export const submitUTR = async (req, res) => {
  try {
    const { utr } = req.body;

    const payment = await Payment.create({
      utr,
      status: "pending"
    });

    res.json({ message: "UTR submitted", payment });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};