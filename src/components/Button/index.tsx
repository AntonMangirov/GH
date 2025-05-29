import "./index.css";

interface Props {
  type?: "button" | "submit";
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ type = "button", onClick, children }: Props) => {
  return (
    <button type={type} onClick={onClick} className="button">
      {children}
    </button>
  );
};

export default Button;
