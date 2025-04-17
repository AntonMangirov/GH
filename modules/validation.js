export const validateFieldValue = (value, type, isRequired) => {
  if (isRequired && !value.trim()) {
    return { isValid: false, error: "Это поле обязательно для заполнения" };
  }

  if (type === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
    return { isValid: false, error: "Пожалуйста, введите корректный email" };
  }

  return { isValid: true, error: "" };
};

export const validateFormData = (formData) => {
  const errors = {};
  let isValid = true;

  for (const [fieldName, field] of Object.entries(formData)) {
    const validation = validateFieldValue(
      field.value,
      field.type,
      field.required
    );
    if (!validation.isValid) {
      errors[fieldName] = validation.error;
      isValid = false;
    }
  }

  return { isValid, errors };
};
