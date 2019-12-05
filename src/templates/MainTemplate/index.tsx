import React, { ReactNode } from 'react';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

interface MainTemplateProps {
  header: ReactNode;
  sidebar: ReactNode;
  body: ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    left: {
      padding: '8px 16px',
      minHeight: '100vh',
      maxWidth: '256px',
    },
    right: {
      height: '100vh',
      minWidth: 'calc(100% - 256px)',
    },
    rightItems: {
      height: '100%',
    },
    main: {
      minHeight: 'calc(100% - 64px)',
    },
  })
);

const MainTemplate: React.FC<MainTemplateProps> = props => {
  const { header, sidebar, body } = props;
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Grid container={true} direction={'row'} alignItems={'stretch'}>
        <Grid item={true} className={styles.left}>
          {sidebar}
        </Grid>
        <Grid item={true} className={styles.right}>
          <Grid container={true} direction={'column'} alignItems={'stretch'} className={styles.rightItems}>
            {header}
            <div className={styles.main}>{body}</div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default MainTemplate;
