import React, { FC } from "react";
import "./Input.css";

interface InputProps {
  name: string;
  type: string;
  onChange(): void;
  placeholder?: string;
  value?: string;
}

export const Input: FC<InputProps> = ({
  name,
  type,
  onChange,
  placeholder,
  value,
}) => {
  return (
    <div className="control-group">
      <input
        id={name}
        name={name}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        value={value}
        data-testid="input"
      />
    </div>
  );
};
