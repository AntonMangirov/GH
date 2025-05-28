import "./index.css";

interface Props {
  label: string;
  name: string;
  onChange: (value: string) => void;
  error?: string;
}

const Textarea = ({ label, name, error }: Props) => (
  <label className="textarea-group">
    {label}
    <textarea
      name={name}
      onChange={(e) => onChange(e.target.value)}
      className={`textarea ${error ? "invalid" : ""}`}
      rows={5}
    />
    {error && <span className="error-text">{error}</span>}
  </label>
);

export default Textarea;
