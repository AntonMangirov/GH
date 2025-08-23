import { useState } from "react";
import CurrencyInput from "../../Common/CurrencyInput";
import FormSection from "../../Common/FormSection";
import validate from "../../../Utils/validation";
import { useFormContext } from "../FormContext";

const Income = () => {
  const { formData, setFormData } = useFormContext();
  const [mainIncomeError, setMainIncomeError] = useState("");
  const [extraIncomeError, setExtraIncomeError] = useState("");

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
    <FormSection title="Доходы">
      <CurrencyInput
        label="Основной доход"
        placeholder="Зарплата, пенсия"
        value={formData.mainIncome}
        onChange={handleChange('mainIncome', setMainIncomeError)}
        error={mainIncomeError}
        required
      />
      <CurrencyInput
        label="Дополнительный доход"
        placeholder="Инвестиции, аренда и т.д."
        value={formData.extraIncome}
        onChange={handleChange('extraIncome', setExtraIncomeError)}
        error={extraIncomeError}
      />
    </FormSection>
  );
};

export default Income;
