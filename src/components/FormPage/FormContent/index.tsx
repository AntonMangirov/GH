import { useState } from "react";
import validation from "../../../utils/formValidator";
import Input from "../../Input";
import Textarea from "../../Textarea";
import Button from "../../Button";
import "./index.css";

interface Props {
  onSubmit: () => void;
}

const FormContent = ({ onSubmit }: Props) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formData = {
      name: { value: name, type: "text", required: true },
      email: { value: email, type: "email", required: true },
      message: { value: message, type: "text", required: true },
    };

    console.log("Form data:", { name, email, message });

    const result = validation.validateForm(formData);

    if (!result.isValid) {
      setErrors(result.errors);
      return;
    }

    setErrors({});
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <Input
        label="Имя"
        name="name"
        value={name}
        onChange={setName}
        error={errors.name}
      />
      <Input
        label="Email"
        name="email"
        value={email}
        onChange={setEmail}
        error={errors.email}
      />
      <Textarea
        label="Сообщение"
        name="message"
        value={message}
        onChange={setMessage}
        error={errors.message}
      />
      <Button type="submit">Отправить</Button>
    </form>
  );
};

export default FormContent;
