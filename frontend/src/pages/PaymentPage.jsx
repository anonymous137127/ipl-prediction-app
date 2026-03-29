import { useState, useEffect } from "react";
import "./Payment.css";

function PaymentPage() {
  const [utr, setUtr] = useState("");
  const [time, setTime] = useState(600); // 10 min
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  const handleSubmit = () => {
    if (!utr) {
      alert("Enter UTR number");
      return;
    }

    setSubmitted(true);
    alert("Waiting for admin approval...");
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
          onChange={(e) => setUtr(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit UTR</button>

        {submitted && <p className="status">⏳ Verifying Payment...</p>}
      </div>
    </div>
  );
}

export default PaymentPage;