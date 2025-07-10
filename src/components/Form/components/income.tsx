import { Container, Typography, TextField } from "@mui/material";

const Income = () => {
  return (
    <Container>
      <Typography variant="h6" color="primary">
        Доходы
      </Typography>

      <TextField
        fullWidth
        label="Основной доход"
        placeholder="Зарплата, пенсия"
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Дополнительный доход"
        placeholder="Инвестиции, аренда и т.д."
        variant="outlined"
      />
    </Container>
  );
};

export default Income;
