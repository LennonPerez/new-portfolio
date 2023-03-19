import { FunctionComponent, HTMLInputTypeAttribute } from "react";
import styled from "styled-components";

const Input: FunctionComponent<InputProps> = (props) => {
  const inputId = (Math.random() * (Math.random() * 1234)).toString();

  return (
    <InputContainer>
      <label htmlFor={inputId}>{props.label}</label>
      {props.linesNum > 1 ? (
        <textarea
          id={inputId}
          placeholder={props.placeholder}
          rows={props.linesNum}
          required={props.isRequired}
        />
      ) : (
        <input
          id={inputId}
          type={props.textType}
          placeholder={props.placeholder}
          required={props.isRequired}
        />
      )}
    </InputContainer>
  );
};

interface InputProps {
  textType: HTMLInputTypeAttribute;
  linesNum: number;
  label: string;
  placeholder: string;
  isRequired: boolean;
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #303036;
  border-radius: 10px;
  margin-bottom: 1rem;

  label {
    border-radius: 10px 10px 0 0;
    padding: 1rem 1rem 0.4rem 1rem;
    color: #dfdfdf;
  }
  input,
  textarea {
    padding: 0.4rem 1rem 1rem 1rem;
    border-radius: 0 0 10px 10px;
    background-color: #303036;
    color: #fff;
    border: none;
    outline: none;
  }

  textarea {
    resize: none;
  }
`;

export default Input;
