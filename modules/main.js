import { createFeedbackForm } from "./form-factory.js";

document.addEventListener("DOMContentLoaded", () => {
  createFeedbackForm({
    formId: "feedbackForm",
    successMessageId: "successMessage",
    backButtonId: "backButton",
  });
});
