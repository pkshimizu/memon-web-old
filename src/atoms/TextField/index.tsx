import React from 'react'
import MUTextFiled from '@material-ui/core/TextField'

type TextFieldProps = {
  label: string
}

const TextField: React.FC<TextFieldProps> = props => {
  const {label} = props;
  return (
    <MUTextFiled label={label} />
  )
};

export default TextField
