// "use strict";

// const formState = {
//   isFirstSubmitAttempt: true,
// };

// const elements = {
//   form: null,
//   successMessage: null,
//   backButton: null,
// };

// const validateField = (field) => {
//   const errorElement = field.nextElementSibling;

//   if (field.validity.valid) {
//     errorElement.textContent = "";
//     field.classList.remove("invalid");
//   } else {
//     showError(field, errorElement);
//   }
// };

// const showError = (field, errorElement) => {
//   field.classList.add("invalid");

//   if (field.validity.valueMissing) {
//     errorElement.textContent = "Это поле обязательно для заполнения";
//   } else if (field.type === "email" && field.validity.typeMismatch) {
//     errorElement.textContent = "Пожалуйста, введите корректный email";
//   }
// };

// const focusFirstInvalidField = () => {
//   const firstInvalidField = elements.form.querySelector(
//     "input:invalid, textarea:invalid"
//   );
//   if (firstInvalidField) {
//     firstInvalidField.focus();
//   }
// };

// const showValidationErrors = () => {
//   elements.form.querySelectorAll("input, textarea").forEach(validateField);
//   focusFirstInvalidField();
// };

// const getFormData = () => {
//   return {
//     name: elements.form.elements.name.value,
//     email: elements.form.elements.email.value,
//     message: elements.form.elements.message.value,
//   };
// };

// const resetForm = () => {
//   elements.form.reset();
//   elements.form.classList.remove("validated");
//   formState.isFirstSubmitAttempt = true;
// };

// const showSuccessMessage = () => {
//   elements.form.style.display = "none";
//   elements.successMessage.style.display = "flex";
// };

// const hideSuccessMessage = () => {
//   elements.successMessage.style.display = "none";
//   elements.form.style.display = "flex";
// };

// const handleSubmit = (e) => {
//   e.preventDefault();

//   if (formState.isFirstSubmitAttempt) {
//     formState.isFirstSubmitAttempt = false;
//     elements.form.classList.add("validated");
//   }

//   if (!elements.form.checkValidity()) {
//     showValidationErrors();
//     return;
//   }

//   const formData = getFormData();
//   console.log("Форма отправлена:", formData);

//   resetForm();
//   showSuccessMessage();
// };

// const handleBackButton = () => {
//   hideSuccessMessage();
// };

// const setupFieldListeners = () => {
//   elements.form.querySelectorAll("input, textarea").forEach((field) => {
//     field.addEventListener("input", () => {
//       if (elements.form.classList.contains("validated")) {
//         validateField(field);
//       }
//     });

//     field.addEventListener("blur", () => {
//       if (elements.form.classList.contains("validated")) {
//         validateField(field);
//       }
//     });
//   });
// };

// const init = () => {
//   elements.form = document.getElementById("feedbackForm");
//   elements.successMessage = document.getElementById("successMessage");
//   elements.backButton = document.getElementById("backButton");

//   elements.form.style.display = "flex";
//   elements.successMessage.style.display = "none";

//   elements.form.addEventListener("submit", handleSubmit);
//   elements.backButton.addEventListener("click", handleBackButton);
//   setupFieldListeners();
// };

// document.addEventListener("DOMContentLoaded", init);
