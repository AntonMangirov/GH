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
  const getElements = () => ({
    form: document.getElementById(formId),
    successMessage: document.getElementById(successMessageId),
    backButton: document.getElementById(backButtonId),
  });

  const getErrorElement = (field) => field.nextElementSibling;
  const getFormFields = (form) => form.elements;

  const getFormData = (form) => ({
    name: { value: form.elements.name.value, type: "text", required: true },
    email: { value: form.elements.email.value, type: "email", required: true },
    message: {
      value: form.elements.message.value,
      type: "text",
      required: true,
    },
  });

  const createFieldHandler = (form) => (field) => {
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

  const createSubmitHandler = (elements) => (e) => {
    e.preventDefault();
    const formData = getFormData(elements.form);
    const { isValid, errors } = validateFormData(formData);

    if (!isValid) {
      displayFormErrors(errors, getFormFields(elements.form), getErrorElement);
      return;
    }

    console.log("Форма отправлена:", formData);
    resetFormView(elements.form, getFormFields(elements.form), getErrorElement);
    toggleViews(elements.form, elements.successMessage, false);
  };

  return {
    init: () => {
      const elements = getElements();
      if (!elements.form || !elements.successMessage || !elements.backButton) {
        console.error("Не найдены необходимые элементы");
        return;
      }

      toggleViews(elements.form, elements.successMessage, true);

      const handleFieldInteraction = createFieldHandler(elements.form);
      elements.form.addEventListener("submit", createSubmitHandler(elements));
      elements.backButton.addEventListener("click", () => {
        toggleViews(elements.form, elements.successMessage, true);
      });

      for (const field of Object.values(getFormFields(elements.form))) {
        if (
          field instanceof HTMLInputElement ||
          field instanceof HTMLTextAreaElement
        ) {
          field.addEventListener("input", () => handleFieldInteraction(field));
          field.addEventListener("blur", () => handleFieldInteraction(field));
        }
      }
    },
  };
};
