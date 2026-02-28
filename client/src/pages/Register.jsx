import { useState } from "react";
import API from "../../api";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const handleSubmit = async () => {
    try {
      await API.post("/auth/register", form);
      alert("Registered successfully");
      navigate("/");
    } catch (err) {
      alert("Error");
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Create Account 🚀</h2>

        <input
          placeholder="Enter Name"
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />

        <input
          placeholder="Enter Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Enter Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button onClick={handleSubmit}>Register</button>

        <p className="link">
          Already have an account?{" "}
          <span onClick={() => navigate("/")}><b>Login</b></span>
        </p>
      </div>
    </div>
  );
}

export default Register;