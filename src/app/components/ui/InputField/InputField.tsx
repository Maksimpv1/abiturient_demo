"use client";

import { FC, useState } from "react";
import * as SC from "./InputField.style";

interface IInputField {
  label?: string;
  type: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
  errors?: string | undefined;
}

const InputField: FC<IInputField> = (props) => {
  const [value, setValue] = useState<string>(props.value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    if (props.onChange) props.onChange(event);
  };

  return (
    <SC.Container>
      <SC.TextContainer>
        <label>{props.label}</label>
        <p>{props.errors}</p>
      </SC.TextContainer>
      <SC.TextField
        type={props.type}
        value={value}
        onChange={handleChange}
        onBlur={props.onBlur}
        name={props.name}
      />
    </SC.Container>
  );
};
export default InputField;
