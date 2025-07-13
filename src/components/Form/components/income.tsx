import { useState } from "react";
import CurrencyInput from "../../Common/CurrencyInput";
import FormSection from "../../Common/FormSection";
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
    <FormSection title="Доходы">
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
    </FormSection>
  );
};

export default Income;
