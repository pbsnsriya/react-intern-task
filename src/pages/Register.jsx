import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/layout/MobileContainer";
import Button from "../components/layout/Button";

import Input from "../components/layout/Input";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    agency: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    const { fullName, phone, email, password, agency } = formData;

    if (!fullName || !phone || !email || !password || !agency) {
      setError("Please fill all required fields");
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // Phone validation (10 digits)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      setError("Phone number must be exactly 10 digits");
      return;
    }

    // Password validation (8 characters)
    if (password.length < 8) {
      setError("Password must be at least 8 characters long");
      return;
    }

    // Save data in localStorage
    localStorage.setItem("user", JSON.stringify(formData));

    // Redirect to login page
    navigate("/login");
  };

  return (
    <MobileContainer>
      <div className="page-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: "25px", fontSize: "28px" }}>
          <span>Create your<br />PopX account</span>
        </h1>

        {error && <p style={{ color: "red", fontSize: "14px" }}>{error}</p>}

        <Input
          label="Full Name"
          name="fullName"
          placeholder="Marry Doe"
          value={formData.fullName}
          onChange={handleChange}
          required={true}
        />

        <Input
          label="Phone number"
          name="phone"
          placeholder="Enter phone number"
          value={formData.phone}
          onChange={handleChange}
          required={true}
        />

        <Input
          label="Email address"
          name="email"
          placeholder="Enter email address"
          value={formData.email}
          onChange={handleChange}
          required={true}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required={true}
        />

        <Input
          label="Company name"
          name="company"
          placeholder="Marry Doe"
          value={formData.company}
          onChange={handleChange}
        />

        <div className="radio-group-container">
          <span className="radio-group-title">Are you an Agency?<span style={{ color: 'red' }}>*</span></span>
          <div className="radio-options">
            <label className="radio-label">
              <input
                type="radio"
                name="agency"
                value="Yes"
                checked={formData.agency === "Yes"}
                onChange={handleChange}
              />
              Yes
            </label>

            <label className="radio-label">
              <input
                type="radio"
                name="agency"
                value="No"
                checked={formData.agency === "No"}
                onChange={handleChange}
              />
              No
            </label>
          </div>
        </div>

        <div className="bottom-sticky-button" style={{ marginTop: "auto", paddingTop: "40px" }}>
          <Button text="Create Account" onClick={handleSubmit} />
        </div>
      </div>
    </MobileContainer>
  );
};

export default Register;