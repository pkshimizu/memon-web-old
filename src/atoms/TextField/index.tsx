import React from 'react';
import { TextField as MUTextFiled } from '@material-ui/core';

interface TextFieldProps {
  label: string;
}

const TextField: React.FC<TextFieldProps> = props => {
  const { label } = props;
  return <MUTextFiled label={label} />;
};

export default TextField;
