import React from 'react';
import { createStyles, Grid, makeStyles, Theme } from '@material-ui/core';
import { fade } from '@material-ui/core/styles';
import { Search } from '@material-ui/icons';
import InputBox from '../../atoms/InputBox';

interface SearchFormProps {}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing(7),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  })
);

const SearchBox: React.FC<SearchFormProps> = props => {
  const styles = useStyles();
  return (
    <Grid container={true} className={styles.root}>
      <Grid item={true} className={styles.searchIcon}>
        <Search />
      </Grid>
      <InputBox placeholder={'Search'} />
    </Grid>
  );
};

export default SearchBox;
