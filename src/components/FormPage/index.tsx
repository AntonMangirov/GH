import Form from "../Form/Form";
import Input from "../Input/Input";
import Textarea from "../Textarea/Textarea";
import Button from "../Button/Button";
import SuccessMessage from "../SuccessMessage/SuccessMessage";

export default function FormPage() {
  return (
    <>
      <Form>
        <Input type="text" id="name" label="Имя" />
        <Input type="email" id="email" label="Email" />
        <Textarea id="message" label="Сообщение" />
        <Button type="submit">Отправить</Button>
      </Form>
      <SuccessMessage />
    </>
  );
}
