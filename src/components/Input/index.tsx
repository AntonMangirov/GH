import React from "react";
import "./Input.css";

interface Props {
  type: string;
  id: string;
  lable: string;
  valaue: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ label, value, onChange, type = "text", id }: Props) => (
  <div className="input-group">
    <label>{label}</label>
    <input
      type={type}
      id={id}
      value={value}
      onChange={onChange}
      className="input"
    />
  </div>
);

export default Input;
