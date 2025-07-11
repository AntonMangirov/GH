import {
  Paper,
  Typography,
  TextField,
  Grid,
  InputAdornment,
} from "@mui/material";
import React, { useState } from "react";

const Expense = () => {
  const [housing, setHousing] = useState("");
  const [food, setFood] = useState("");
  const [transport, setTransport] = useState("");
  const [health, setHealth] = useState("");
  const [entertainment, setEntertainment] = useState("");
  const [other, setOther] = useState("");

  const [housingError, setHousingError] = useState("");
  const [foodError, setFoodError] = useState("");
  const [transportError, setTransportError] = useState("");
  const [healthError, setHealthError] = useState("");
  const [entertainmentError, setEntertainmentError] = useState("");
  const [otherError, setOtherError] = useState("");

  const validate = (value: string, setError: (error: string) => void) => {
    if (isNaN(Number(value))) {
      setError("Должно быть числом");
      return false;
    }
    if (Number(value) < 0) {
      setError("Не может быть отрицательным");
      return false;
    }
    setError("");
    return true;
  };

  const handleHousingChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHousing(value);
    validate(value, setHousingError);
  };

  const handleFoodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFood(value);
    validate(value, setFoodError);
  };

  const handleTransportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTransport(value);
    validate(value, setTransportError);
  };

  const handleHealthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setHealth(value);
    validate(value, setHealthError);
  };

  const handleEntertainmentChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    setEntertainment(value);
    validate(value, setEntertainmentError);
  };

  const handleOtherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setOther(value);
    validate(value, setOtherError);
  };

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
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{"\u20BD"}</InputAdornment>
              ),
            }}
            value={housing}
            onChange={handleHousingChange}
            error={!!housingError}
            helperText={housingError}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            fullWidth
            label="Питание"
            placeholder="Продукты, рестораны"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{"\u20BD"}</InputAdornment>
              ),
            }}
            value={food}
            onChange={handleFoodChange}
            error={!!foodError}
            helperText={foodError}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            fullWidth
            label="Транспорт"
            placeholder="Бензин, общественный транспорт"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{"\u20BD"}</InputAdornment>
              ),
            }}
            value={transport}
            onChange={handleTransportChange}
            error={!!transportError}
            helperText={transportError}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            fullWidth
            label="Здоровье"
            placeholder="Медицина, фитнес, аптека"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{"\u20BD"}</InputAdornment>
              ),
            }}
            value={health}
            onChange={handleHealthChange}
            error={!!healthError}
            helperText={healthError}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            fullWidth
            label="Развлечения"
            placeholder="Кино, хобби, подписки"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{"\u20BD"}</InputAdornment>
              ),
            }}
            value={entertainment}
            onChange={handleEntertainmentChange}
            error={!!entertainmentError}
            helperText={entertainmentError}
          />
        </Grid>

        <Grid size={6}>
          <TextField
            fullWidth
            label="Другие расходы"
            placeholder="Одежда, подарки, прочее"
            variant="outlined"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">{"\u20BD"}</InputAdornment>
              ),
            }}
            value={other}
            onChange={handleOtherChange}
            error={!!otherError}
            helperText={otherError}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Expense;
