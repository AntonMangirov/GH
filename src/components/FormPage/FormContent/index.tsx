import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isValidated = validate({ name, email, message });
    if (isValidated) onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Имя" onChange={setName} />
      <Input label="Email" onChange={setEmail} />
      <Textarea label="Сообщение" onChange={setMessage} />
      <Button type="submit">Отправить</Button>
    </form>
  );
};

export default FormContent;
