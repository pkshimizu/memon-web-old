import React, { ReactNode } from 'react';
import { IconButton as MUIconButton } from '@material-ui/core';

export enum Color {
  DEFAULT = 'default',
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface IconButtonProps {
  icon: ReactNode;
  color?: Color;
}

const IconButton: React.FC<IconButtonProps> = props => {
  const { icon, color = Color.DEFAULT } = props;
  return <MUIconButton color={color}>{icon}</MUIconButton>;
};

export default IconButton;
