import React from 'react';
import { TextField as MUTextField } from '@material-ui/core';

interface PasswordFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const PasswordField: React.FC<PasswordFieldProps> = props => {
  const { label, value, onChange } = props;
  return <MUTextField type={'password'} label={label} value={value} onChange={event => onChange(event.target.value)} />;
};

export default PasswordField;
