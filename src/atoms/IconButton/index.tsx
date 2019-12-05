import React, {ReactNode} from 'react'
import MUIconButton from '@material-ui/core/IconButton'

type IconButtonProps = {
  icon: ReactNode,
  color?: 'inherit' | 'primary' | 'secondary' | 'default'
}

const IconButton: React.FC<IconButtonProps> = props => {
  const { icon, color } = props;
  return (
    <MUIconButton color={color}>{icon}</MUIconButton>
  )
};

export default IconButton
