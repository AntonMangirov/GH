import { validateFormData } from "./validation.js";
import {
  displayFormErrors,
  resetFormView,
  toggleViews,
} from "./dom-helpers.js";

export const createFeedbackForm = ({
  formId,
  successMessageId,
  backButtonId,
}) => {
  const form = document.getElementById(formId);
  const successMessage = document.getElementById(successMessageId);
  const backButton = document.getElementById(backButtonId);

  const getErrorElement = (field) => field.nextElementSibling;

  if (!form || !successMessage || !backButton) {
    console.error("Не найдены необходимые элементы");
    return;
  }

  const getFormFields = () => form.elements;

  const getFormData = () => ({
    name: { value: form.elements.name.value, type: "text", required: true },
    email: { value: form.elements.email.value, type: "email", required: true },
    message: {
      value: form.elements.message.value,
      type: "text",
      required: true,
    },
  });

  const createFieldHandler = (field) => {
    if (!form.classList.contains("validated")) return;

    const errorElement = getErrorElement(field);
    const validation = validateFieldValue(
      field.value,
      field.type,
      field.required
    );

    if (validation.isValid) {
      errorElement.textContent = "";
      field.classList.remove("invalid");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    form.classList.add("validated");

    const formData = getFormData();
    const { isValid, errors } = validateFormData(formData);

    if (!isValid) {
      displayFormErrors(errors, getFormFields(), getErrorElement);
      return;
    }

    console.log("Форма отправлена:", formData);
    resetFormView(form, getFormFields(), getErrorElement);
    toggleViews(form, successMessage, false);
  };

  for (const field of Object.values(getFormFields())) {
    if (
      field instanceof HTMLInputElement ||
      field instanceof HTMLTextAreaElement
    ) {
      field.addEventListener("input", () => createFieldHandler(field));
      field.addEventListener("blur", () => createFieldHandler(field));
    }
  }

  toggleViews(form, successMessage, true);

  form.addEventListener("submit", handleSubmit);
  backButton.addEventListener("click", () => {
    toggleViews(form, successMessage, true);
  });
};
