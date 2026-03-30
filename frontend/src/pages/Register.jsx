import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css";
import { registerUser } from "../services/authService"; // ✅ import API

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!email || !password || !confirm) {
      alert("Fill all fields");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match");
      return;
    }

    try {
      const res = await registerUser({ email, password });

      alert("Registered Successfully ✅");
      navigate("/");

    } catch (err) {
      console.log(err);
      alert("Registration Failed ❌");
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h1 className="logo">[ CREATE ACCOUNT ]</h1>
        <p className="subtitle">Secure Registration Portal</p>

        <input
          type="email"
          placeholder="Enter Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type="password"
          placeholder="Confirm Password"
          onChange={(e) => setConfirm(e.target.value)}
        />

        <button onClick={handleRegister}>Register</button>

        <p className="link">
          Already have account?{" "}
          <span onClick={() => navigate("/")}>Login</span>
        </p>
      </div>
    </div>
  );
}

export default Register;