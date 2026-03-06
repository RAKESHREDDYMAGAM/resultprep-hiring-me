import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {

    if (!email || !password) {
      alert("Email and password required");
      return;
    }

    try {

      await API.post("/auth/register", {
        email,
        password
      });

      alert("User registered successfully");

      navigate("/");

    } catch (err) {

      alert(err.response?.data?.error || "Registration failed");

    }

  };

  return (

    <div className="auth-container">

      <div className="card">

        <h2 style={{ textAlign: "center" }}>Create Account</h2>

        <div className="form-group">
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleRegister}>
          Register
        </button>

        <p style={{ marginTop: "20px", textAlign: "center" }}>
          Already have an account? <a href="/">Login</a>
        </p>

      </div>

    </div>

  );

}

export default Register;