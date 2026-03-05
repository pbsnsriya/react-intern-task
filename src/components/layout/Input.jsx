const Input = ({ label, name, type = "text", placeholder, value, onChange, required = false }) => {
    return (
        <div className="input-fieldset">
            <div className="input-legend">{label}{required && <span style={{ color: 'red' }}>*</span>}</div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                required={required}
            />
        </div>
    );
};

export default Input;
