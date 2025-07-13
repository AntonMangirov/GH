const validate = (
  value: string,
  setError: (error: string) => void,
  isRequired = false
) => {
  if (isRequired && !value.trim()) {
    setError("Поле обязательно для заполнения");
    return false;
  }

  if (isNaN(Number(value))) {
    setError("Должно быть числом");
    return false;
  }

  if (!/^\d*([.,]\d{0,2})?$/.test(value)) {
    setError("макс. 2 знака после запятой");
    return false;
  }

  if (Number(value) < 0) {
    setError("Не может быть отрицательным");
    return false;
  }

  setError("");
  return true;
};

export default validate;
