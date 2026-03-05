import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileContainer from "../components/layout/MobileContainer";
import Button from "../components/layout/Button";

const Account = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "Marry Doe",
    email: "Marry@Gmail.Com",
    profileImage: null
  });

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      // no user available, send back to home/login
      navigate("/");
    }
  }, [navigate]);

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <MobileContainer>
      <div className="header-bar">
        <h2>Account Settings</h2>
      </div>

      <div className="profile-section">
        <div className="avatar-wrapper" onClick={() => document.getElementById('upload-input').click()}>
          {user.profileImage ? (
            <img src={user.profileImage} alt="profile" />
          ) : (
            <div className="placeholder">
              <span>Upload Image</span>
            </div>
          )}
          <input
            id="upload-input"
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  const updated = { ...user, profileImage: reader.result };
                  setUser(updated);
                  localStorage.setItem('user', JSON.stringify(updated));
                };
                reader.readAsDataURL(file);
              }
            }}
          />
          <div className="camera-icon">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 19C23 19.5304 22.7893 20.0391 22.4142 20.4142C22.0391 20.7893 21.5304 21 21 21H3C2.46957 21 1.96086 20.7893 1.58579 20.4142C1.21071 20.0391 1 19.5304 1 19V8C1 7.46957 1.21071 6.96086 1.58579 6.58579C1.96086 6.21071 2.46957 6 3 6H7L9 3H15L17 6H21C21.5304 6 22.0391 6.21071 22.4142 6.58579C22.7893 6.96086 23 7.46957 23 8V19Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="12" cy="13" r="4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div className="profile-info">
          <p className="profile-name">{user.fullName}</p>
          <p className="profile-email">{user.email}</p>
        </div>
      </div>

      <p className="profile-desc">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
      </p>

      <div className="bottom-sticky-button" style={{ margin: "auto 20px 20px 20px", display: "flex", alignItems: "flex-end" }}>
        <Button text="Logout" variant="secondary" onClick={handleLogout} />
      </div>
    </MobileContainer>
  );
};

export default Account;