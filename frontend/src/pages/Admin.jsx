import { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
  const [payments, setPayments] = useState([]);

  // fetch payments
  const fetchPayments = async () => {
    try {
      const res = await axios.get(
        "https://ipl-backend-0emd.onrender.com/api/payment/all"
      );
      setPayments(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchPayments();
  }, []);

  // approve/reject
  const updateStatus = async (id, status) => {
    try {
      await axios.post(
        "https://ipl-backend-0emd.onrender.com/api/payment/update",
        { id, status }
      );

      fetchPayments(); // refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h2>Admin Panel - Payments</h2>

      {payments.map((p) => (
        <div
          key={p._id}
          style={{
            border: "1px solid #0ff",
            margin: "10px",
            padding: "10px"
          }}
        >
          <p><b>UTR:</b> {p.utr}</p>
          <p><b>Status:</b> {p.status}</p>

          <button onClick={() => updateStatus(p._id, "approved")}>
            Approve ✅
          </button>

          <button
            onClick={() => updateStatus(p._id, "rejected")}
            style={{ marginLeft: "10px" }}
          >
            Reject ❌
          </button>
        </div>
      ))}
    </div>
  );
}

export default Admin;