import React from 'react';
import { Grid } from '@material-ui/core';
import TextField from '../../atoms/TextField';
import Button from '../../atoms/Button';
import PasswordField from '../../atoms/PasswordField';

interface LoginFormProps {}

const LoginForm: React.FC<LoginFormProps> = props => {
  return (
    <Grid container={true} direction={'column'} alignItems={'stretch'} spacing={1}>
      <Grid item={true} container={true} direction={'column'} alignItems={'stretch'}>
        <TextField label={'ID'} />
      </Grid>
      <Grid item={true} container={true} direction={'column'} alignItems={'stretch'}>
        <PasswordField label={'Password'} />
      </Grid>
      <Grid item={true} container={true} direction={'column'} alignItems={'stretch'}>
        <Button>Login</Button>
      </Grid>
    </Grid>
  );
};

export default LoginForm;
