import { useState } from "react";
import CurrencyInput from "../../Common/CurrencyInput";
import FormSection from "../../Common/FormSection";
import validate from "../../../Utils/validation";

const Income = () => {
  const [mainIncome, setMainIncome] = useState("");
  const [extraIncome, setExtraIncome] = useState("");
  const [mainIncomeError, setMainIncomeError] = useState("");
  const [extraIncomeError, setExtraIncomeError] = useState("");

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
    <FormSection title="Доходы">
      <CurrencyInput
        label="Основной доход"
        placeholder="Зарплата, пенсия"
        value={mainIncome}
        onChange={handleChange(setMainIncome, setMainIncomeError)}
        error={mainIncomeError}
        required
      />
      <CurrencyInput
        label="Дополнительный доход"
        placeholder="Инвестиции, аренда и т.д."
        value={extraIncome}
        onChange={handleChange(setExtraIncome, setExtraIncomeError)}
        error={extraIncomeError}
      />
    </FormSection>
  );
};

export default Income;
