const validateFieldValue = (value, type, isRequired) => {
  if (isRequired && !value.trim()) {
    return { isValid: false, error: "Это поле обязательно для заполнения" };
  }

  if (type === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
    return { isValid: false, error: "Пожалуйста, введите корректный email" };
  }

  return { isValid: true, error: "" };
};

const validateForm = (formData) => {
  const errors = {};
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
