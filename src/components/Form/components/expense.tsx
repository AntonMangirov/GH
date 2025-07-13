import { Paper, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import CurrencyInput from "../../Common/CurrencyInput";
import validate from "../../../Utils/validation";

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

  const handleChange =
    (
      setter: React.Dispatch<React.SetStateAction<string>>,
      errorSetter: React.Dispatch<React.SetStateAction<string>>
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setter(value);
      validate(value, errorSetter);
    };

  return (
    <Paper elevation={5} sx={{ p: 3, mb: 3 }}>
      <Typography variant="h6" color="primary">
        Ежемесячные расходы
      </Typography>
      <Grid container spacing={1}>
        <CurrencyInput
          label="Жилье"
          placeholder="Аренда, ипотека, коммунальные"
          value={housing}
          onChange={handleChange(setHousing, setHousingError)}
          error={housingError}
        />

        <CurrencyInput
          label="Питание"
          placeholder="Продукты, рестораны"
          value={food}
          onChange={handleChange(setFood, setFoodError)}
          error={foodError}
        />
        <CurrencyInput
          label="Транспорт"
          placeholder="Бензин, общественный транспорт"
          value={transport}
          onChange={handleChange(setTransport, setTransportError)}
          error={transportError}
        />
        <CurrencyInput
          label="Здоровье"
          placeholder="Медицина, фитнес, аптека"
          value={health}
          onChange={handleChange(setHealth, setHealthError)}
          error={healthError}
        />
        <CurrencyInput
          label="Развлечения"
          placeholder="Кино, хобби, подписки"
          value={entertainment}
          onChange={handleChange(setEntertainment, setEntertainmentError)}
          error={entertainmentError}
        />
        <CurrencyInput
          label="Другие расходы"
          placeholder="Одежда, подарки, прочее"
          value={other}
          onChange={handleChange(setOther, setOtherError)}
          error={otherError}
        />
      </Grid>
    </Paper>
  );
};

export default Expense;
