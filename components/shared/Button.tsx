import { FunctionComponent } from "react";
import styled from "styled-components";

const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
    <ButtonContainer
      {...props}
      type={props.buttonType}
      onClick={props.isDisabled ? () => {} : props.onClick}
    >
      {props.children}
    </ButtonContainer>
  );
};

interface ButtonProps {
  children: any;
  buttonType?: "submit" | "button" | undefined;
  isDisabled?: boolean;
  onClick?: () => void;
}

const ButtonContainer = styled.button<ButtonProps>`
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.tertiaryBgColor};
  background-color: ${(props) => props.theme.colors.tertiaryBgColor};
  color: ${(props) => props.theme.colors.textPrimaryColor};
  border-radius: 10px;
  padding: 0.75rem 1rem;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;
  cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.isDisabled ? "0.5" : "1")};

  &:hover {
    background-color: ${(props) =>
      props.isDisabled ? props.theme.colors.tertiaryBgColor : "#8f78ec"};
  }
`;

export default Button;
