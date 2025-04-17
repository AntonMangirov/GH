import { createFeedbackForm } from "./form-factory.js";

document.addEventListener("DOMContentLoaded", () => {
  const feedbackForm = createFeedbackForm({
    formId: "feedbackForm",
    successMessageId: "successMessage",
    backButtonId: "backButton",
  });

  feedbackForm.init();
});
