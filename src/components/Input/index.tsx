import "./Input.css";

const Input = ({ label, value, onChange, type = "text" }) => (
  <div className="input-group">
    <label>{label}</label>
    <input type={type} value={value} onChange={onChange} className="input" />
  </div>
);

export default Input;
