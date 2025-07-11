import {
  Paper,
  Typography,
  TextField,
  Grid,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";

const Income = () => {
  const [mainIncome, setMainIncome] = useState("");
  const [extraIncome, setExtraIncome] = useState("");
  const [mainIncomeError, setMainIncomeError] = useState("");
  const [extraIncomeError, setExtraIncomeError] = useState("");

  const validateMainIncome = (value: string) => {
    if (!value.trim()) {
      setMainIncomeError("Поле обязательно для заполнения");
      return false;
    }
    if (isNaN(Number(value))) {
      setMainIncomeError("Должно быть число");
      return false;
    }
    if (Number(value) < 0) {
      setMainIncomeError("Не может быть отрицательным");
      return false;
    }
    setMainIncomeError("");
    return true;
  };

  const validateExtraIncome = (value: string) => {
    if (isNaN(Number(value))) {
      setExtraIncomeError("Должно быть число");
      return false;
    }
    if (Number(value) < 0) {
      setExtraIncomeError("Не может быть отрицательным");
      return false;
    }
    setExtraIncomeError("");
    return true;
  };

  const handleMainIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMainIncome(value);
    validateMainIncome(value);
  };

  const handleExtraIncomeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setExtraIncome(value);
    validateExtraIncome(value);
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
