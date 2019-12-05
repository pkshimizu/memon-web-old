import React from 'react'
import TextField from "../../atoms/TextField";
import {Grid} from "@material-ui/core";
import {Search} from "@material-ui/icons";
import IconButton from "../../atoms/IconButton";

type SearchFormProps = {
}

const SearchForm: React.FC<SearchFormProps> = props => {
  return (
    <Grid container direction="row" justify="flex-start" alignItems="center">
      <Grid item>
        <TextField label="Input search keyword"/>
      </Grid>
      <Grid item>
        <IconButton icon={<Search/>}/>
      </Grid>
    </Grid>
  )
};

export default SearchForm;
