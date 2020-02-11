import React, { ReactNode } from 'react';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

interface MainTemplateProps {
  header: ReactNode;
  buttons: ReactNode;
  list: ReactNode;
  body: ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    left: {
      minHeight: '100vh',
      maxHeight: '100vh',
      maxWidth: '280px',
      minWidth: '280px',
    },
    list: {
      height: 'calc(100vh - 36px)',
      overflowY: 'scroll',
    },
    right: {
      height: '100vh',
      minWidth: 'calc(100% - 280px)',
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
  const { header, buttons, list, body } = props;
  const styles = useStyles();
  return (
    <div className={styles.root}>
      <Grid container={true} direction={'row'} alignItems={'stretch'}>
        <Grid item={true} className={styles.left}>
          <Grid container={true} direction={'column'} alignItems={'stretch'}>
            {buttons}
            <Grid container={true} direction={'column'} alignItems={'stretch'} className={styles.list}>
              {list}
            </Grid>
          </Grid>
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
