type ValidationResult = {
  isValid: boolean;
  error: string;
};

type FieldConfig = {
  value: string;
  type: "text" | "email";
  required: boolean;
};
type FormData = Record<string, FieldConfig>;

const validateFieldValue = (
  value: string,
  type: "text" | "email",
  isRequired: boolean
): ValidationResult => {
  if (isRequired && !value.trim()) {
    return { isValid: false, error: "Это поле обязательно для заполнения" };
  }

  if (type === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
    return { isValid: false, error: "Пожалуйста, введите корректный email" };
  }

  return { isValid: true, error: "" };
};

const validateForm = (formData: FormData) => {
  const errors: Record<string, string> = {};
  let isValid = true;

  for (const [fieldName, field] of Object.entries(formData)) {
    const validationResult = validateFieldValue(
      field.value,
      field.type,
      field.required
    );
    if (!validationResult.isValid) {
      errors[fieldName] = validationResult.error;
      isValid = false;
    }
  }

  return { isValid, errors };
};

export default {
  validateFieldValue,
  validateForm,
};
