import React, { ReactNode } from 'react';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';

interface SimpleTemplateProps {
  header: ReactNode;
  body: ReactNode;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: theme.spacing(4),
    },
  })
)

const SimpleTemplate: React.FC<SimpleTemplateProps> = props => {
  const { header, body } = props;
  const styles = useStyles();
  return (
    <Grid
      container={true}
      direction={'column'}
      alignItems={'center'}
      justify={'center'}
      spacing={2}
      className={styles.root}
    >
      <Grid item={true} xs={6}>
        {header}
      </Grid>
      <Grid item={true} xs={6}>
        {body}
      </Grid>
    </Grid>
  );
};

export default SimpleTemplate;
