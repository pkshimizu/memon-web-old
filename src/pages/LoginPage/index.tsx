import React from 'react';
import SimpleTemplate from '../../components/templates/SimpleTemplate';
import SiteLogo from '../../components/atoms/SiteLogo';
import LoginForm from '../../components/organisms/LoginForm';
import { Grid } from '@material-ui/core';
import SiteTitle from '../../components/atoms/SiteTitle';

interface LoginPageProps {
  onClickLogin: (email: string, password: string) => void;
}

const LoginPage: React.FC<LoginPageProps> = props => {
  const { onClickLogin } = props;
  return (
    <SimpleTemplate
      header={
        <Grid container={true} direction={'column'} alignItems={'center'}>
          <SiteLogo />
          <SiteTitle />
        </Grid>
      }
      body={<LoginForm onSubmit={onClickLogin} />}
    />
  );
};

export default LoginPage;
