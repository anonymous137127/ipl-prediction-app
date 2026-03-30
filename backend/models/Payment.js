import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
  utr: String,
  status: {
    type: String,
    default: "pending"
  }
}, { timestamps: true });

export default mongoose.model("Payment", paymentSchema);