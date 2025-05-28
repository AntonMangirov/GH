import "./index.css";

interface Props {
  label: string;
  onChange: (newValue: string) => void;
}

const Input = ({ label, onChange }: Props) => (
  <label className="input-group">
    {label}
    <input
      type="text"
      onChange={(e) => onChange(e.currentTarget.value)}
      className="input"
    />
  </label>
);

export default Input;
