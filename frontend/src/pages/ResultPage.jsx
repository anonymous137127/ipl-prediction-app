import { useState } from "react";
import "./Result.css";

function ResultPage() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="result-container">
      <div className="result-box">
        <h2>[ SECURE RESULT PANEL ]</h2>

        {!unlocked ? (
          <>
            <p className="locked">🔒 Result Locked</p>
            <button onClick={() => setUnlocked(true)}>
              Verify Access
            </button>
          </>
        ) : (
          <div className="result-show">
            <h1>🔥 RCB WILL WIN 🔥</h1>
            <p>Confidence: 92%</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ResultPage;