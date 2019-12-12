import React from 'react';
import { createStyles, InputBase, makeStyles, Theme } from '@material-ui/core';

interface InputBoxProps {
  placeholder?: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      color: 'inherit',
    },
    input: {
      padding: theme.spacing(1, 1, 1, 7),
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  })
);

const InputBox: React.FC<InputBoxProps> = props => {
  const { placeholder } = props;
  const styles = useStyles();
  return (
    <InputBase
      placeholder={placeholder}
      classes={{
        root: styles.root,
        input: styles.input,
      }}
    />
  );
};

export default InputBox;
