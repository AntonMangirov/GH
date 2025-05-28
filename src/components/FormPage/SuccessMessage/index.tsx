import Button from "../../Button";
import "./index.css";

interface Props {
  onClick: () => void;
}

const SuccessMessage = (props: Props) => {
  return (
    <div className="success-message">
      <p>Спасибо! Ваше сообщение успешно отправлено.</p>
      <Button onClick={props.onClick}>Вернуться</Button>
    </div>
  );
};

export default SuccessMessage;
