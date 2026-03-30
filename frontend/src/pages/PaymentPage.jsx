import { useState, useEffect } from "react";
import axios from "axios";
import "./Payment.css";
import { useNavigate } from "react-router-dom";

function PaymentPage() {
  const [utr, setUtr] = useState("");
  const [time, setTime] = useState(600);
  const [submitted, setSubmitted] = useState(false);

  const navigate = useNavigate();

  // timer
  useEffect(() => {
    if (time > 0) {
      const timer = setTimeout(() => setTime(time - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [time]);

  // submit
  const handleSubmit = async () => {
    if (!utr) {
      alert("Enter UTR number");
      return;
    }

    try {
      await axios.post(
        "https://ipl-backend-0emd.onrender.com/api/payment/submit",
        { utr }
      );

      setSubmitted(true);
      alert("Payment submitted ✅");
    } catch (err) {
      alert("Error submitting payment ❌");
    }
  };

  // 🔥 CHECK STATUS EVERY 1 SECOND
  useEffect(() => {
    let interval;

    if (submitted) {
      interval = setInterval(async () => {
        try {
          const res = await axios.get(
            `https://ipl-backend-0emd.onrender.com/api/payment/status/${utr}`
          );

          console.log("Status:", res.data.status);

          if (res.data.status === "approved") {
            clearInterval(interval);
            alert("Payment Approved 🎉");
            navigate("/result"); // 🔥 redirect
          }
        } catch (err) {
          console.log(err);
        }
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [submitted, utr]);

  return (
    <div className="pay-container">
      <div className="pay-box">
        <h2>[ PAYMENT GATEWAY ]</h2>

        <img src="https://via.placeholder.com/200" alt="QR" />

        <p>Scan & Pay</p>

        <h3>
          Time Left: {Math.floor(time / 60)}:
          {time % 60 < 10 ? "0" : ""}
          {time % 60}
        </h3>

        <input
          placeholder="Enter UTR"
          value={utr}
          onChange={(e) => setUtr(e.target.value)}
        />

        <button onClick={handleSubmit}>Submit UTR</button>

        {submitted && <p>⏳ Waiting for approval...</p>}
      </div>
    </div>
  );
}

export default PaymentPage;