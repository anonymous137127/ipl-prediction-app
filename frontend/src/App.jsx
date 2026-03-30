import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import PaymentPage from "./pages/PaymentPage";
import ResultPage from "./pages/ResultPage";
import Admin from "./pages/Admin";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/result" element={<ResultPage />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}

export default App;