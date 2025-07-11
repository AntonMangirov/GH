import {
  Paper,
  Typography,
  TextField,
  Grid,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";
import validate from "../../../Utils/validation";

const Income = () => {
  const [mainIncome, setMainIncome] = useState("");
  const [extraIncome, setExtraIncome] = useState("");
  const [mainIncomeError, setMainIncomeError] = useState("");
  const [extraIncomeError, setExtraIncomeError] = useState("");

  const handleMainIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMainIncome(value);
    validate(value, setMainIncomeError, true);
  };

  const handleExtraIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setExtraIncome(value);
    validate(value, setExtraIncomeError);
  };

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
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{"\u20BD"}</InputAdornment>
              ),
            }}
            value={mainIncome}
            onChange={handleMainIncomeChange}
            error={!!mainIncomeError}
            helperText={mainIncomeError}
            required
          />
        </Grid>
        <Grid size={6}>
          <TextField
            fullWidth
            label="Дополнительный доход"
            placeholder="Инвестиции, аренда и т.д."
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{"\u20BD"}</InputAdornment>
              ),
            }}
            value={extraIncome}
            onChange={handleExtraIncomeChange}
            error={!!extraIncomeError}
            helperText={extraIncomeError}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Income;
