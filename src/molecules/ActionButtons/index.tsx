import React from 'react';
import { Add, Delete } from '@material-ui/icons';
import { Grid } from '@material-ui/core';
import Button from '../../atoms/Button';

interface ActionButtonsProps {
  onClickAdd: () => void;
  onClickRemove: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = props => {
  const { onClickAdd, onClickRemove } = props;
  return (
    <Grid container={true} direction={'row'}>
      <Button onClick={onClickAdd}>
        <Add />
      </Button>
      <Button onClick={onClickRemove}>
        <Delete />
      </Button>
    </Grid>
  );
};

export default ActionButtons;
