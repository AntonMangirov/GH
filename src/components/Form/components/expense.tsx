import { Paper, Typography, TextField, Grid } from "@mui/material";

const Expense = () => {
  return (
    <Paper elevation={5} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" color="primary">
        Ежемесячные расходы
      </Typography>
      <Grid container spacing={1}>
        <Grid size={6}>
          <TextField
            fullWidth
            label="Жилье"
            placeholder="Аренда, ипотека, коммунальные"
            variant="outlined"
          />
        </Grid>

        <Grid size={6}>
          <TextField
            fullWidth
            label="Питание"
            placeholder="Продукты, рестораны"
            variant="outlined"
          />
        </Grid>

        <Grid size={6}>
          <TextField
            fullWidth
            label="Транспорт"
            placeholder="Бензин, общественный транспорт"
            variant="outlined"
          />
        </Grid>

        <Grid size={6}>
          <TextField
            fullWidth
            label="Здоровье"
            placeholder="Медицина, фитнес, аптека"
            variant="outlined"
          />
        </Grid>

        <Grid size={6}>
          <TextField
            fullWidth
            label="Развлечения"
            placeholder="Кино, хобби, подписки"
            variant="outlined"
          />
        </Grid>

        <Grid size={6}>
          <TextField
            fullWidth
            label="Другие расходы"
            placeholder="Одежда, подарки, прочее"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Expense;
