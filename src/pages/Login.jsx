import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/layout/MobileContainer";
import Button from "../components/layout/Button";

import Input from "../components/layout/Input";

const Login = () => {
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = () => {
    const { email, password } = loginData;

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Password validation (8 characters)
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (!storedUser) {
      setError("No user found. Please register first.");
      return;
    }

    if (
      email === storedUser.email &&
      password === storedUser.password
    ) {
      navigate("/account");
    } else {
      setError("Invalid credentials");
    }
  };

  // Button disabled state can be checked if inputs are empty
  const isFormEmpty = !loginData.email || !loginData.password;

  return (
    <MobileContainer>
      <div className="page-content">
        <h1>Signin to your<br />PopX account</h1>
        <p className="subtext">
          Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit,
        </p>

        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

        <Input
          label="Email Address"
          name="email"
          placeholder="Enter email address"
          value={loginData.email}
          onChange={handleChange}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={loginData.password}
          onChange={handleChange}
        />

        <div style={{ marginTop: "20px" }}>
          <Button
            text="Login"
            onClick={handleLogin}
            disabled={isFormEmpty}
          />
        </div>
      </div>
    </MobileContainer>
  );
};

export default Login;