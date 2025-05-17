import "./Textarea.css";

const Textarea = ({
  id,
  label,
  value,
  onChange,
}: {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}) => (
  <div className="textarea-group">
    <label htmlFor={id}>{label}</label>
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      className="textarea"
      rows={5}
    />
  </div>
);

export default Textarea;
