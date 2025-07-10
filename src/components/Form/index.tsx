import { Container } from "@mui/material";
import Income from "./components/income";
import Expense from "./components/expense";

const Form = () => {
  return (
    <Container>
      <Income />
      <Expense />
    </Container>
  );
};

export default Form;
