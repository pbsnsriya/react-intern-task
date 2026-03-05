const MobileContainer = ({ children }) => {
  return (
    <div className="outer-wrapper">
      <div className="mobile-container">
        {children}
      </div>
    </div>
  );
};

export default MobileContainer;