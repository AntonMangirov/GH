import { Paper, Typography, TextField, Grid } from "@mui/material";
import { useState } from "react";

const Income = () => {
  const [mainIncome, setMainIncome] = useState("");
  const [extraIncome, setExtraIncome] = useState("");

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
            value={mainIncome}
            onChange={(e) => setMainIncome(e.target.value)}
          />
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            label="Дополнительный доход"
            placeholder="Инвестиции, аренда и т.д."
            variant="outlined"
            value={extraIncome}
            onChange={(e) => setExtraIncome(e.target.value)}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Income;
