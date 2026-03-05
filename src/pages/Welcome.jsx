import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/layout/MobileContainer";
import Button from "../components/layout/Button";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <MobileContainer>
      <div className="page-content" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ marginTop: "auto" }}>
          <h1>Welcome to PopX</h1>
          <p className="subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <Button
            text="Create Account"
            onClick={() => navigate("/register")}
          />

          <div style={{ marginTop: "10px", marginBottom: "20px" }}>
            <Button
              text="Already Registered? Login"
              variant="secondary"
              onClick={() => navigate("/login")}
            />
          </div>
        </div>
      </div>
    </MobileContainer>
  );
};

export default Welcome;