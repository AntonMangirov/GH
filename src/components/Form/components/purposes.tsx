import {
  Paper,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@mui/material";
import React, { useState } from "react";
import CurrencyInput from "../../Common/CurrencyInput";
import validate from "../../../Utils/validation";

const Purposes = () => {
  const [purpose, setPurpose] = useState("");
  const [purposeError, setPurposeError] = useState("");

  const handlePurposeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPurpose(value);
    validate(value, setPurposeError, true);
  };

  return (
    <Paper elevation={5} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" color="primary">
        Цель накоплений
      </Typography>
      <Grid container spacing={1}>
        <CurrencyInput
          label="Сумма для накопления"
          placeholder="Сколько хотите накопить"
          value={purpose}
          onChange={handlePurposeChange}
          error={purposeError}
          required
        />
        <Grid size={6}>
          <FormControl fullWidth>
            <InputLabel>Срок накопления</InputLabel>
            <Select label="Срок накопления" defaultValue="12">
              <MenuItem value={3}>3 месяца</MenuItem>
              <MenuItem value={6}>6 месяцев</MenuItem>
              <MenuItem value={12}>1 год</MenuItem>
              <MenuItem value={18}>1.5 года</MenuItem>
              <MenuItem value={24}>2 года</MenuItem>
              <MenuItem value={36}>3 года</MenuItem>
              <MenuItem value={60}>5 лет</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Purposes;
