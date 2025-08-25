import { FormControl, InputLabel, Select, MenuItem, Grid } from "@mui/material";
import React, { useState } from "react";
import CurrencyInput from "../../Common/CurrencyInput";
import FormSection from "../../Common/FormSection";
import validate from "../../../Utils/validation";
import { useFormContext } from "../FormContext";

const Purposes = () => {
  const { formData, setFormData } = useFormContext();
  const [purposeError, setPurposeError] = useState("");

  const handlePurposeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, purpose: value }));
    validate(value, setPurposeError, true);
  };

  const handleTimeframeChange = (e: any) => {
    setFormData((prev) => ({ ...prev, timeframe: e.target.value }));
  };

  return (
    <FormSection title="Цель накоплений">
      <CurrencyInput
        label="Сумма для накопления"
        placeholder="Сколько хотите накопить"
        value={formData.purpose}
        onChange={handlePurposeChange}
        error={purposeError}
        required
      />
      <Grid size={6}>
        <FormControl fullWidth>
          <InputLabel>Срок накопления</InputLabel>
          <Select
            label="Срок накопления"
            value={formData.timeframe}
            onChange={handleTimeframeChange}
          >
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
    </FormSection>
  );
};

export default Purposes;
