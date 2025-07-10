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
      <Typography variant="h6" gutterBottom color="primary">
        Ежемесячные расходы
      </Typography>

      <TextField
        fullWidth
        label="Жилье"
        placeholder="Аренда, ипотека, коммунальные"
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Питание"
        placeholder="Продукты, рестораны"
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Транспорт"
        placeholder="Бензин, общественный транспорт"
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Здоровье"
        placeholder="Медицина, фитнес, аптека"
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Развлечения"
        placeholder="Кино, хобби, подписки"
        variant="outlined"
      />

      <TextField
        fullWidth
        label="Другие расходы"
        placeholder="Одежда, подарки, прочее"
        variant="outlined"
      />
    </Container>
  );
};

export default Form;
