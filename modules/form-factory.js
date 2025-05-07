import validation from "./validation.js";
import formUtils from "./form-utils.js";
import domHelpers from "./dom-helpers.js";

export default function formFactory(ids) {
  const form = document.getElementById(ids.formId);
  const successMessage = document.getElementById(ids.successMessageId);
  const backButton = document.getElementById(ids.backButtonId);

  const getErrorElement = (field) => field.nextElementSibling;

  if (!form || !successMessage || !backButton) {
    console.error("Не найдены необходимые элементы");
    return;
  }

  const getFormFields = () => form.elements;

  const handleSubmit = (e) => {
    e.preventDefault();
    form.classList.add("validated");

    const formData = formUtils.getFormData(getFormFields());
    const validationResult = validation.validateForm(formData);

    if (!validationResult.isValid) {
      domHelpers.displayFormErrors(
        validationResult.errors,
        getFormFields(),
        getErrorElement
      );
      return;
    }

    console.log("Форма отправлена:", formData);
    domHelpers.resetFormView(form, getFormFields(), getErrorElement);
    domHelpers.toggleViews(form, successMessage, false);
  };

  for (const field of Object.values(getFormFields())) {
    if (
      field instanceof HTMLInputElement ||
      field instanceof HTMLTextAreaElement
    ) {
      field.addEventListener("input", () =>
        formUtils.createFieldHandler(
          field,
          getErrorElement,
          form.classList.contains("validated")
        )
      );
      field.addEventListener("blur", () =>
        formUtils.createFieldHandler(
          field,
          getErrorElement,
          form.classList.contains("validated")
        )
      );
    }
  }

  domHelpers.toggleViews(form, successMessage, true);

  form.addEventListener("submit", handleSubmit);
  backButton.addEventListener("click", () => {
    domHelpers.toggleViews(form, successMessage, true);
  });
}
