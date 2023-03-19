import { ButtonHTMLAttributes, FunctionComponent } from "react";
import styled from "styled-components";

const Button: FunctionComponent<ButtonProps> = (props) => {
  return <ButtonContainer type="submit">Submit</ButtonContainer>;
};

interface ButtonProps {
  // buttonType: ButtonHTMLAttributes<string>;
  // text: string;
}

const ButtonContainer = styled.button`
  border: 1px solid #7856ff;
  background-color: #7856ff;
  color: #fff;
  border-radius: 10px;
  padding: 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;

  &:hover {
    background-color: #5931f5;
  }
`;

export default Button;
