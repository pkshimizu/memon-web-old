import React from 'react'
import MUButton from '@material-ui/core/Button'

export interface ButtonProps {
  children: string;
  color?: 'inherit' | 'primary' | 'secondary' | 'default';
}

const Button = (props: ButtonProps) => {
  const { children, color } = props;

  return (
    <MUButton color={color}>{children}</MUButton>
  )
};

export default Button
