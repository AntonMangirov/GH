import { Container, Typography, TextField } from "@mui/material";

const Form = () => {
  return (
    <Container>
      <Typography variant="h6" color="primary">
        Доходы
      </Typography>

      <TextField
        label="Основной доход"
        placeholder="Зарплата, пенсия"
        variant="outlined"
      />

      <TextField
        label="Дополнительный доход"
        placeholder="Инвестиции, аренда и т.д."
        variant="outlined"
      />
    </Container>
  );
};

export default Form;
