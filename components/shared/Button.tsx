import { ButtonHTMLAttributes, FunctionComponent } from "react";
import styled from "styled-components";

const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonContainer {...props} type={props.buttonType} onClick={props.onClick}>
      {props.text}
    </ButtonContainer>
  );
};

interface ButtonProps {
  text: string;
  buttonType?: "submit" | "button" | undefined;
  isLoading?: boolean;
  onClick?: () => void;
}

const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  border: 1px solid #7856ff;
  background-color: #7856ff;
  color: #fff;
  border-radius: 10px;
  padding: 1rem;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.isLoading ? "0.5" : "1")};

  &:hover {
    background-color: ${(props) => (props.isLoading ? "#7856ff" : "#8f78ec")};
  }
`;

export default Button;
