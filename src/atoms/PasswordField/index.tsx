import React from 'react';
import { TextField as MUTextField } from '@material-ui/core'

interface PasswordFieldProps {
  label: string;
}

const PasswordField: React.FC<PasswordFieldProps> = props => {
  const { label } = props;
  return <MUTextField type={'password'} label={label} />;
};

export default PasswordField;
