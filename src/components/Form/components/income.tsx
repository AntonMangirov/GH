import { Paper, Typography, TextField, Grid } from "@mui/material";

const Income = () => {
  return (
    <Paper elevation={5} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" color="primary">
        Доходы
      </Typography>

      <Grid container spacing={1}>
        <Grid size={6}>
          <TextField
            fullWidth
            label="Основной доход"
            placeholder="Зарплата, пенсия"
            variant="outlined"
          />
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            label="Дополнительный доход"
            placeholder="Инвестиции, аренда и т.д."
            variant="outlined"
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Income;
