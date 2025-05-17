import { useState } from "react";

export const FormData = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const nameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, name: e.target.value });
  };

  const emailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, email: e.target.value });
  };

  const messageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValues({ ...values, message: e.target.value });
  };

  return { values, nameChange, emailChange, messageChange };
};
