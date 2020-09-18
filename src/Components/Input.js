import React from "react";
import { FormGroup, Label, Input } from "reactstrap";

const InputField = (props) => {
  return (
    <FormGroup>
      <Label for="firstName">{props.label}</Label>
      <Input
        type="text"
        name={props.name}
        id={props.name}
        placeholder={props.label}
      />
    </FormGroup>
  );
};

export default InputField;
