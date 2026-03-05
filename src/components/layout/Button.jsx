const Button = ({ text, variant = "primary", onClick, disabled }) => {
  const className = disabled ? "disabled-look" : variant;
  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;