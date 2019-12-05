import React from 'react';
import TextField from '../../atoms/TextField';
import { Grid } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import IconButton from '../../atoms/IconButton';

interface SearchFormProps {}

const SearchForm: React.FC<SearchFormProps> = props => {
  return (
    <Grid container={true} direction={'row'} justify={'flex-start'} alignItems={'center'}>
      <Grid item={true}>
        <TextField label={'Search...'} />
      </Grid>
      <Grid item={true}>
        <IconButton icon={<Search />} />
      </Grid>
    </Grid>
  );
};

export default SearchForm;
