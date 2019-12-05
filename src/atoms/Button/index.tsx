import React, {ReactNode} from 'react'
import MUButton from '@material-ui/core/Button'

type ButtonProps = {
  children: ReactNode;
  color?: 'inherit' | 'primary' | 'secondary' | 'default';
}

const Button: React.FC<ButtonProps> = props => {
  const { children, color } = props;
  return (
    <MUButton color={color}>{children}</MUButton>
  )
};

export default Button
