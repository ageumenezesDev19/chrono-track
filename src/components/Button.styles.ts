import styled from "styled-components";

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
  variant?: ButtonVariant;
}

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  color: ${props => props.theme.white};
  background-color: ${props => props.theme["green-500"]}
  /* background-color: ${({ variant = 'primary' }) => buttonVariants[variant]}; */
`;
