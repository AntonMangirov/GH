export const displayFormErrors = (errors, fields, getErrorElement) => {
  for (const [fieldName, error] of Object.entries(errors)) {
    const field = fields[fieldName];
    const errorElement = getErrorElement(field);
    if (errorElement) {
      errorElement.textContent = error;
      field.classList.add("invalid");
    }
  }
};

export const resetFormView = (form, fields, getErrorElement) => {
  form.reset();
  form.classList.remove("validated");

  for (const field of Object.values(fields)) {
    field.classList.remove("invalid");
    const errorElement = getErrorElement(field);
    if (errorElement) errorElement.textContent = "";
  }
};

export const toggleViews = (form, successMessage, showForm) => {
  form.style.display = showForm ? "flex" : "none";
  successMessage.style.display = showForm ? "none" : "flex";
};
