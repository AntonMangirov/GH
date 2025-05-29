import { useState } from "react";
import FormContent from "./FormContent";
import SuccessMessage from "./SuccessMessage";

const FormPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return isSubmitted ? (
    <SuccessMessage onClick={() => setIsSubmitted(false)} />
  ) : (
    <FormContent onSubmit={() => setIsSubmitted(true)} />
  );
};

export default FormPage;
