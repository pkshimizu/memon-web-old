import React from 'react';
import { Add, Delete, FileCopy } from '@material-ui/icons';
import { Grid } from '@material-ui/core';
import Button from '../../atoms/Button';

interface ActionButtonsProps {
  onClickAdd: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = props => {
  const { onClickAdd } = props;
  return (
    <Grid container={true} direction={'row'}>
      <Button onClick={onClickAdd}>
        <Add />
      </Button>
      <Button onClick={onClickAdd}>
        <FileCopy />
      </Button>
      <Button onClick={onClickAdd}>
        <Delete />
      </Button>
    </Grid>
  );
};

export default ActionButtons;
