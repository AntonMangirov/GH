import validation from "./validation.js";

const getFormData = (formElements) => ({
  name: { value: formElements.name.value, type: "text", required: true },
  email: { value: formElements.email.value, type: "email", required: true },
  message: { value: formElements.message.value, type: "text", required: true },
});

const createFieldHandler = (field, getErrorElement, formValidated) => {
  if (!formValidated) return;

  const errorElement = getErrorElement(field);
  const validationResult = validation.validateFieldValue(
    field.value,
    field.type,
    field.required
  );

  if (validationResult.isValid) {
    errorElement.textContent = "";
    field.classList.remove("invalid");
  }
};

export default {
  getFormData,
  createFieldHandler,
};
