import "./Form.css";

interface Props {
  children: React.ReactNode;
}

const Form = ({ children }: Props) => {
  return <form className="form">{children}</form>;
};

export default Form;
