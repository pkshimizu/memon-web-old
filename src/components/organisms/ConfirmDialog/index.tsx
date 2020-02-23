import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core';
import Button, {Color} from '../../atoms/Button';

interface ConfirmDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  message: string;
  submitLabel: string;
  onSubmit: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = props => {
  const { open, onClose, title, message, submitLabel, onSubmit } = props;
  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby={'confirm-dialog-title'}
      aria-describedby={'confirm-dialog-description'}
    >
      <DialogTitle id={'confirm-dialog-title'}>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id={'confirm-dialog-description'}>{message}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onSubmit} color={Color.PRIMARY}>
          {submitLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
