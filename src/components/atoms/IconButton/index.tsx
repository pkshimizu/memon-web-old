import React, { ReactNode } from 'react';
import { IconButton as MUIconButton } from '@material-ui/core';
import { Color } from '../../../defines';

interface IconButtonProps {
  icon: ReactNode;
  color?: Color;
}

const IconButton: React.FC<IconButtonProps> = props => {
  const { icon, color } = props;
  return <MUIconButton color={color}>{icon}</MUIconButton>;
};

export default IconButton;
