import validation from "./validation";

type FieldConfig = {
  value: string;
  type: "text" | "email";
  required: boolean;
};

type FormValues = {
  name: string;
  email: string;
  message: string;
};

type FieldHandlerArgs = {
  value: string;
  type: "text" | "email";
  required: boolean;
  validate: boolean;
  setError: (error: string) => void;
};

const getFormData = (values: FormValues): Record<string, FieldConfig> => ({
  name: { value: values.name, type: "text", required: true },
  email: { value: values.email, type: "email", required: true },
  message: { value: values.message, type: "text", required: true },
});

const createFieldHandler = ({
  value,
  type,
  required,
  validate,
  setError,
}: FieldHandlerArgs): void => {
  if (!validate) return;

  const validationResult = validation.validateFieldValue(value, type, required);
  setError(validationResult.isValid ? "" : validationResult.error);
};

export default {
  getFormData,
  createFieldHandler,
};
