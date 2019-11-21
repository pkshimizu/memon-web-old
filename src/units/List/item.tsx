import React, {ReactElement} from 'react'
import MUListItem from '@material-ui/core/ListItem'
import MUListItemText from '@material-ui/core/ListItemText'
import MUListItemIcon from '@material-ui/core/ListItemIcon'

type ListItemProps = {
  text: string,
  icon: ReactElement
}

const ListItem: React.FC<ListItemProps> = props => {

  return (
    <MUListItem button>
      <MUListItemIcon>{props.icon}</MUListItemIcon>
      <MUListItemText primary={props.text}/>
    </MUListItem>
  )
};

export default ListItem


