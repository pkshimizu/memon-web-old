import React from 'react';
import { TextField as MUTextFiled } from '@material-ui/core';
import { TextColor } from '../../defines';

interface TextFieldProps {
  label: string;
  color?: TextColor;
  value: string;
  onChange: (value: string) => void;
}

const TextField: React.FC<TextFieldProps> = props => {
  const { label, color, value, onChange } = props;
  return <MUTextFiled label={label} color={color} value={value} onChange={event => onChange(event.target.value)} />;
};

export default TextField;
