import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

function Login() {

  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {

    try {

      const res = await API.post("/auth/login",{
        email,
        password
      });

      localStorage.setItem("token",res.data.token);

      navigate("/dashboard");

    } catch {
      alert("Login failed");
    }

  };

  return (

    <div className="container">

      <div className="card">

        <h2>Login</h2>

        <div className="form-group">
          <input
            placeholder="Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
        </div>

        <button onClick={handleLogin}>
          Login
        </button>

        <p style={{marginTop:"10px"}}>
          Don't have an account? <a href="/register">Register</a>
        </p>

      </div>

    </div>
  );

}

export default Login;