import React from 'react';
import SimpleTemplate from '../../templates/SimpleTemplate';
import SiteLogo from '../../atoms/SiteLogo';
import LoginForm from '../../organisms/LoginForm';
import { Grid } from '@material-ui/core';

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = props => {
  return (
    <SimpleTemplate
      header={
        <Grid container={true} alignItems={'center'}>
          <SiteLogo />
          memon
        </Grid>
      }
      body={<LoginForm />}
    />
  );
};

export default LoginPage;
