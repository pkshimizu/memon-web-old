import React, { ReactNode } from 'react';
import { Button as MUButton } from '@material-ui/core';
import { Color } from '../../defines';

interface ButtonProps {
  children: ReactNode;
  color?: Color;
  type?: 'reset' | 'button' | 'submit';
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = props => {
  const { children, color, type, onClick } = props;
  return (
    <MUButton color={color} type={type} onClick={onClick}>
      {children}
    </MUButton>
  );
};

export default Button;
