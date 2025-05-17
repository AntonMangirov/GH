import "./Input.css";

interface Props {
  type: "text" | "email";
  id: string;
  label: string;
}
const Input = ({ type, id, label }: Props) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} className="input" />
    </div>
  );
};

export default Input;
