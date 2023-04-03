import {
  ChangeEvent,
  FunctionComponent,
  HTMLInputTypeAttribute,
  useState,
  useEffect,
} from "react";
import styled from "styled-components";

const Input: FunctionComponent<InputProps> = (props) => {
  const [isFocused, setFocus] = useState<boolean>(false);
  let inputId: string = "";

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    inputId = crypto.randomUUID();
  }, []);

  return (
    <InputContainer isFocused={isFocused} props={props}>
      <label htmlFor={inputId}>{props.label}</label>
      {props.linesNum && props.linesNum > 1 ? (
        <textarea
          id={inputId}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          rows={props.linesNum}
          required={props.isRequired}
          disabled={props.isDisabled}
          onFocus={() => setFocus(!props.isDisabled)}
          onBlur={() => setFocus(false)}
          onChange={(e) => props.onChange(e)}
        />
      ) : (
        <input
          id={inputId}
          type={props.textType}
          value={props.value}
          name={props.name}
          placeholder={props.placeholder}
          required={props.isRequired}
          disabled={props.isDisabled}
          onFocus={() => setFocus(!props.isDisabled)}
          onBlur={() => setFocus(false)}
          onChange={(e) => props.onChange(e)}
        />
      )}
    </InputContainer>
  );
};

interface InputProps {
  textType?: HTMLInputTypeAttribute;
  value: string;
  name: string;
  label: string;
  placeholder?: string;
  linesNum?: number;
  isRequired?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  onChange: (e: InputEvent) => void;
}

export type InputEvent =
  | ChangeEvent<HTMLInputElement>
  | ChangeEvent<HTMLTextAreaElement>;

const InputContainer = styled.div<{ isFocused: boolean; props: InputProps }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.secondaryBgColor};
  border-radius: 10px;
  margin-bottom: 1rem;
  transition: border 0.2s ease-in-out;
  border: 1px solid
    ${({ isFocused }) => (isFocused ? "#8a8a8a" : "transparent")};

  label {
    cursor: ${({ props }) => (props.isDisabled ? "not-allowed" : "text")};
    border-radius: 10px 10px 0 0;
    padding: 1rem 1rem 0.4rem 1rem;
    color: #dfdfdf;
  }
  input,
  textarea {
    font-family: ApercuPro, sans-serif;
    cursor: ${({ props }) => (props.isDisabled ? "not-allowed" : "text")};
    padding: 0.4rem 1rem 1rem 1rem;
    border-radius: 0 0 10px 10px;
    background-color: ${(props) => props.theme.colors.secondaryBgColor};
    color: ${(props) => props.theme.colors.textPrimaryColor};
    border: none;
    outline: none;

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-text-fill-color: ${(props) =>
        props.theme.colors.textPrimaryColor} !important;
      box-shadow: 0 0 0 30px #303036 inset !important;
      -webkit-box-shadow: 0 0 0 30px #303036 inset !important;
    }
  }

  textarea {
    resize: none;
  }
`;

export default Input;
