document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("feedbackForm");
  const successMessage = document.getElementById("successMessage");
  const backButton = document.getElementById("backButton");
  let isFirstSubmitAttempt = true;

  form.addEventListener("submit", handleSubmit);
  backButton.addEventListener("click", handleBackButton);

  function handleSubmit(e) {
    e.preventDefault();

    if (isFirstSubmitAttempt) {
      isFirstSubmitAttempt = false;
      form.classList.add("validated");
    }

    if (!form.checkValidity()) {
      showValidationErrors();
      return;
    }

    const formData = getFormData();
    console.log("Форма отправлена:", formData);

    resetForm();
    showSuccessMessage();
  }

  function handleBackButton() {
    successMessage.setAttribute("hidden", "true");
    form.removeAttribute("hidden");
  }

  function getFormData() {
    return {
      name: form.elements.name.value,
      email: form.elements.email.value,
      message: form.elements.message.value,
    };
  }

  function resetForm() {
    form.reset();
    form.classList.remove("validated");
    isFirstSubmitAttempt = true;
  }

  function showSuccessMessage() {
    form.setAttribute("hidden", "true");
    successMessage.removeAttribute("hidden");
  }

  function showValidationErrors() {
    form.querySelectorAll("input, textarea").forEach(validateField);
    focusFirstInvalidField();
  }

  function validateField(field) {
    const errorElement = field.nextElementSibling;

    if (field.validity.valid) {
      errorElement.textContent = "";
      field.classList.remove("invalid");
    } else {
      showError(field, errorElement);
    }
  }

  function showError(field, errorElement) {
    field.classList.add("invalid");

    if (field.validity.valueMissing) {
      errorElement.textContent = "Это поле обязательно для заполнения";
    } else if (field.type === "email" && field.validity.typeMismatch) {
      errorElement.textContent = "Пожалуйста, введите корректный email";
    }
  }

  function focusFirstInvalidField() {
    const firstInvalidField = form.querySelector(
      "input:invalid, textarea:invalid"
    );
    if (firstInvalidField) {
      firstInvalidField.focus();
    }
  }

  form.querySelectorAll("input, textarea").forEach((field) => {
    field.addEventListener("input", () => {
      if (form.classList.contains("validated")) {
        validateField(field);
      }
    });

    field.addEventListener("blur", () => {
      if (form.classList.contains("validated")) {
        validateField(field);
      }
    });
  });
});
