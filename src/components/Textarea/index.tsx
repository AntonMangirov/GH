import "./Textarea.css";

interface Props {
  id: string;
  label: string;
}

const Textarea = ({ id, label }: Props) => {
  return (
    <div className="textarea-group">
      <label htmlFor={id}>{label}</label>
      <textarea id={id} className="textarea" rows={5} />
    </div>
  );
};

export default Textarea;
