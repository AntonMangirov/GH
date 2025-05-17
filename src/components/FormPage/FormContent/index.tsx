import Form from "../../../components/Form";
import Input from "../../../components/Input";
import Textarea from "../../../components/Textarea";
import Button from "../../../components/Button";

interface FormContentProps {
  onSubmit: () => void;
}

const FormContent = ({ onSubmit }: FormContentProps) => {
  return (
    <Form>
      <Input type="text" id="name" label="Имя" />
      <Input type="email" id="email" label="Email" />
      <Textarea id="message" label="Сообщение" />
      <Button type="submit" onClick={onSubmit}>
        Отправить
      </Button>
    </Form>
  );
};

export default FormContent;
