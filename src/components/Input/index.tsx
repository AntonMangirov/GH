import "./index.css";

interface Props {
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  error?: string;
}

const Input = ({ label, name, value, onChange, error }: Props) => (
  <label className="input-group">
    {label}
    <input
      type="text"
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={`input ${error ? "invalid" : ""}`}
    />
    {error && <span className="error-text">{error}</span>}
  </label>
);

export default Input;
