import React from 'react'
import {AppBar, createStyles, makeStyles, Theme, Toolbar} from "@material-ui/core";
import Button from "../../atoms/Button";
import SiteLogo from "../../atoms/SiteLogo";
import SiteTitle from "../../atoms/SiteTitle";

type SiteHeaderProps = {
}

const useStyles = makeStyles( (theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    logo: {
      marginRight: "8px"
    },
    title: {
      flexGrow: 1
    }
  })
);

const SiteHeader: React.FC<SiteHeaderProps> = props => {
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar>
          <div className={styles.logo}>
            <SiteLogo/>
          </div>
          <div className={styles.title}>
            <SiteTitle/>
          </div>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
};

export default SiteHeader;
