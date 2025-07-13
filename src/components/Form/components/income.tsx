import { Paper, Typography, Grid } from "@mui/material";
import { useState } from "react";
import CurrencyInput from "../../Common/CurrencyInput";
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
        <CurrencyInput
          label="Основной доход"
          placeholder="Зарплата, пенсия"
          value={mainIncome}
          onChange={handleMainIncomeChange}
          error={mainIncomeError}
          required
        />
        <CurrencyInput
          label="Дополнительный доход"
          placeholder="Инвестиции, аренда и т.д."
          value={extraIncome}
          onChange={handleExtraIncomeChange}
          error={extraIncomeError}
        />
      </Grid>
    </Paper>
  );
};

export default Income;
