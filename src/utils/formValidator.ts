import fieldValidators from "./fieldValidator";

type FieldConfig = {
  value: string;
  type: "text" | "email";
  required: boolean;
};

type FormData = Record<string, FieldConfig>;

const validateForm = (formData: FormData) => {
  const errors: Record<string, string> = {};
  let isValid = true;

  for (const [fieldName, field] of Object.entries(formData)) {
    const validationResult = fieldValidators.validateFieldValue(
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
  validateForm,
};
