type ValidationResult = {
  isValid: boolean;
  error: string;
};

const validateFieldValue = (
  value: string,
  type: "text" | "email",
  isRequired: boolean
): ValidationResult => {
  if (isRequired && (!value || value.trim() === "")) {
    return { isValid: false, error: "Это поле обязательно для заполнения" };
  }

  if (type === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
    return { isValid: false, error: "Пожалуйста, введите корректный email" };
  }

  return { isValid: true, error: "" };
};

export default {
  validateFieldValue,
};
