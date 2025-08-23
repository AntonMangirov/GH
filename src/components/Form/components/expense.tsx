import React, { useState } from "react";
import CurrencyInput from "../../Common/CurrencyInput";
import FormSection from "../../Common/FormSection";
import validate from "../../../Utils/validation";
import { useFormContext } from "../FormContext";

const Expense = () => {
  const { formData, setFormData } = useFormContext();
  const [housingError, setHousingError] = useState("");
  const [foodError, setFoodError] = useState("");
  const [transportError, setTransportError] = useState("");
  const [healthError, setHealthError] = useState("");
  const [entertainmentError, setEntertainmentError] = useState("");
  const [otherError, setOtherError] = useState("");

  const handleChange =
    (
      field: keyof typeof formData,
      errorSetter: React.Dispatch<React.SetStateAction<string>>
    ) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setFormData(prev => ({ ...prev, [field]: value }));
      validate(value, errorSetter);
    };

  return (
    <FormSection title="Ежемесячные расходы">
      <CurrencyInput
        label="Жилье"
        placeholder="Аренда, ипотека, коммунальные"
        value={formData.housing}
        onChange={handleChange('housing', setHousingError)}
        error={housingError}
      />

      <CurrencyInput
        label="Питание"
        placeholder="Продукты, рестораны"
        value={formData.food}
        onChange={handleChange('food', setFoodError)}
        error={foodError}
      />
      <CurrencyInput
        label="Транспорт"
        placeholder="Бензин, общественный транспорт"
        value={formData.transport}
        onChange={handleChange('transport', setTransportError)}
        error={transportError}
      />
      <CurrencyInput
        label="Здоровье"
        placeholder="Медицина, фитнес, аптека"
        value={formData.health}
        onChange={handleChange('health', setHealthError)}
        error={healthError}
      />
      <CurrencyInput
        label="Развлечения"
        placeholder="Кино, хобби, подписки"
        value={formData.entertainment}
        onChange={handleChange('entertainment', setEntertainmentError)}
        error={entertainmentError}
      />
      <CurrencyInput
        label="Другие расходы"
        placeholder="Одежда, подарки, прочее"
        value={formData.other}
        onChange={handleChange('other', setOtherError)}
        error={otherError}
      />
    </FormSection>
  );
};

export default Expense;
