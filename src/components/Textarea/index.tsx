import "./index.css";

const Textarea = ({
  label,
  onChange,
}: {
  label: string;
  onChange: (newValue: string) => void;
}) => (
  <label className="textarea-group">
    {label}
    <textarea
      onChange={(e) => onChange(e.currentTarget.value)}
      className="textarea"
      rows={5}
    />
  </label>
);

export default Textarea;
