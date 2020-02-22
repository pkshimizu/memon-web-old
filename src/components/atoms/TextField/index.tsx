import React from 'react';
import { TextField as MUTextFiled } from '@material-ui/core';

export enum Color {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface TextFieldProps {
  label: string;
  color?: Color;
  value: string;
  onChange: (value: string) => void;
}

const TextField: React.FC<TextFieldProps> = props => {
  const { label, color = Color.PRIMARY, value, onChange } = props;
  return <MUTextFiled label={label} color={color} value={value} onChange={event => onChange(event.target.value)} />;
};

export default TextField;
