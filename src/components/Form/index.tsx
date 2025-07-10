import { Container, Button } from "@mui/material";
import Income from "./components/income";
import Expense from "./components/expense";
import Purposes from "./components/purposes";

const Form = () => {
  return (
    <Container>
      <Income />
      <Expense />
      <Purposes />
      <Button variant="contained">Рассчитать план накоплений</Button>
    </Container>
  );
};

export default Form;
