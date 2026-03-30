import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dash-container">
      <div className="dash-box">
        <h2 className="title">[ MATCH ACCESS PANEL ]</h2>

        <div className="match-card">
          <img
            src="https://via.placeholder.com/300x150"
            alt="match"
          />

          <h3>CSK vs RR</h3>
          <p>Today IPL Match</p>
        </div>

        <button onClick={() => navigate("/payment")}>
          🔒 Unlock Prediction
        </button>
      </div>
    </div>
  );
}

export default Dashboard;