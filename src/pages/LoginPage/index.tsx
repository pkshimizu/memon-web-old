import React from 'react';
import SimpleTemplate from '../../templates/SimpleTemplate';
import SiteLogo from '../../atoms/SiteLogo';
import LoginForm from '../../organisms/LoginForm';
import { Grid } from '@material-ui/core';
import SiteTitle from "../../atoms/SiteTitle";

interface LoginPageProps {}

const LoginPage: React.FC<LoginPageProps> = props => {
  return (
    <SimpleTemplate
      header={
        <Grid container={true} direction={'column'} alignItems={'center'}>
          <SiteLogo />
          <SiteTitle />
        </Grid>
      }
      body={<LoginForm />}
    />
  );
};

export default LoginPage;
