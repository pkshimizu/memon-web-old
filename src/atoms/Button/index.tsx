import React, { ReactNode } from 'react';
import { Button as MUButton } from '@material-ui/core';
import { Color } from '../../defines';

interface ButtonProps {
  children: ReactNode;
  color?: Color;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = props => {
  const { children, color, onClick } = props;
  return (
    <MUButton color={color} onClick={onClick}>
      {children}
    </MUButton>
  );
};

export default Button;
