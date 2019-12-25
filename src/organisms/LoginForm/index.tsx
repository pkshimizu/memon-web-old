import React, { useState } from 'react';
import { Grid } from '@material-ui/core';
import TextField from '../../atoms/TextField';
import Button from '../../atoms/Button';
import PasswordField from '../../atoms/PasswordField';

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = props => {
  const [email, updateEmail] = useState('');
  const [password, updatePassword] = useState('');
  const { onSubmit } = props;
  return (
    <Grid container={true} direction={'column'} alignItems={'stretch'} spacing={1}>
      <Grid item={true} container={true} direction={'column'} alignItems={'stretch'}>
        <TextField value={email} onChange={value => updateEmail(value)} label={'Email'} />
      </Grid>
      <Grid item={true} container={true} direction={'column'} alignItems={'stretch'}>
        <PasswordField value={password} onChange={value => updatePassword(value)} label={'Password'} />
      </Grid>
      <Grid item={true} container={true} direction={'column'} alignItems={'stretch'}>
        <Button onClick={() => onSubmit(email, password)}>Login</Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
