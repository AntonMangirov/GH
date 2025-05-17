import "./Button.css";

interface Props {
  type?: "button" | "submit";
  children: React.ReactNode;
}

const Button = ({ type = "button", children }: Props) => {
  return (
    <button type={type} className="button">
      {children}
    </button>
  );
};

export default Button;
