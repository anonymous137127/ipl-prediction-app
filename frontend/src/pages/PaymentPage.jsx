import { useState, useEffect } from "react";
import "./Payment.css";
import axios from "axios";

function PaymentPage() {
  const [utr, setUtr] = useState("");
  const [time, setTime] = useState(600); // 10 min
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // timer
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  // submit UTR to backend
  const handleSubmit = async () => {
    if (!utr) {
      alert("Enter UTR number");
      return;
    }

    try {
      setLoading(true);

      const res = await axios.post(
        "https://ipl-backend-0emd.onrender.com/api/payment/submit",
        {
          utr: utr
        }
      );

      console.log("Response:", res.data);

      setSubmitted(true);
      alert("Payment submitted successfully ✅");
    } catch (err) {
      console.error("Error:", err);
      alert("Payment failed ❌");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pay-container">
      <div className="pay-box">
        <h2>[ PAYMENT GATEWAY ]</h2>

        {/* QR */}
        <img
          src="https://via.placeholder.com/200"
          alt="QR"
        />

        <p>Scan & Pay</p>

        {/* Timer */}
        <h3 className="timer">
          Time Left: {Math.floor(time / 60)}:
          {time % 60 < 10 ? "0" : ""}
          {time % 60}
        </h3>

        {/* UTR input */}
        <input
          placeholder="Enter UTR Number"
          value={utr}
          onChange={(e) => setUtr(e.target.value)}
        />

        {/* Button */}
        <button onClick={handleSubmit} disabled={loading}>
          {loading ? "Submitting..." : "Submit UTR"}
        </button>

        {/* Status */}
        {submitted && (
          <p className="status">⏳ Verifying Payment...</p>
        )}
      </div>
    </div>
  );
}

export default PaymentPage;