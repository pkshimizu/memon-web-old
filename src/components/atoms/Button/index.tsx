import React from 'react';
import { Button as MUButton } from '@material-ui/core';

export enum Color {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export enum Type {
  BUTTON = 'button',
  RESET = 'reset',
  SUBMIT = 'submit',
}

interface ButtonProps {
  color?: Color;
  type?: Type;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = props => {
  const { children, color = Color.DEFAULT, type = Type.BUTTON, onClick } = props;
  return (
    <MUButton color={color} type={type} onClick={onClick}>
      {children}
    </MUButton>
  );
};

export default Button;
