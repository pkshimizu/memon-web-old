import React from 'react';
import { TextField as MUTextFiled } from '@material-ui/core';
import { TextColor } from '../../defines';

interface TextFieldProps {
  label: string;
  color?: TextColor;
}

const TextField: React.FC<TextFieldProps> = props => {
  const { label, color } = props;
  return <MUTextFiled label={label} color={color} />;
};

export default TextField;
