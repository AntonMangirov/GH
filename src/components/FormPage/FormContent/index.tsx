import Input from "../../Input";
import Textarea from "../../Textarea";
import Button from "../../Button";
import { FormData } from "../../Form/FormData";

interface Props {
  onSubmit: () => void;
}

const FormContent = ({ onSubmit }: Props) => {
  const { values, nameChange, emailChange, messageChange } = FormData();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit();
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        id="name"
        label="Имя"
        value={values.name}
        onChange={nameChange}
      />
      <Input
        type="email"
        id="email"
        label="Email"
        value={values.email}
        onChange={emailChange}
      />
      <Textarea
        id="message"
        label="Сообщение"
        value={values.message}
        onChange={messageChange}
      />
      <Button type="submit">Отправить</Button>
    </form>
  );
};

export default FormContent;
