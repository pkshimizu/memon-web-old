import React from 'react'
import TextField from "../../atoms/TextField";
import Button from "../../atoms/Button";
import {Grid} from "@material-ui/core";

type SearchFormProps = {
}

const SearchForm: React.FC<SearchFormProps> = props => {
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <Grid item>
        <TextField label="Input search keyword"/>
      </Grid>
      <Grid item>
        <Button>Search</Button>
      </Grid>
    </Grid>
  )
};

export default SearchForm;
