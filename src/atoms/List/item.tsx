import React, { ReactElement } from 'react';
import {
  ListItem as MUListItem,
  ListItemText as MUListItemText,
  ListItemIcon as MUListItemIcon,
} from '@material-ui/core';

interface ListItemProps {
  text: string;
  icon: ReactElement;
}

const ListItem: React.FC<ListItemProps> = props => {
  const { text, icon } = props;
  return (
    <MUListItem button={true}>
      <MUListItemIcon>{icon}</MUListItemIcon>
      <MUListItemText primary={text} />
    </MUListItem>
  );
};

export default ListItem;
