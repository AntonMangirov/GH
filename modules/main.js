import formFactory from "./form-factory.js";

document.addEventListener("DOMContentLoaded", () => {
  formFactory({
    formId: "feedbackForm",
    successMessageId: "successMessage",
    backButtonId: "backButton",
  });
});
