import React, { ReactElement } from 'react';
import {
  ListItem as MUListItem,
  ListItemText as MUListItemText,
  ListItemIcon as MUListItemIcon,
} from '@material-ui/core';

interface ListItemProps {
  text: string;
  sub: string;
  icon: ReactElement;
  selected?: boolean;
  onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const ListItem: React.FC<ListItemProps> = props => {
  const { text, sub, icon, selected, onClick } = props;
  return (
    <MUListItem button={true} onClick={onClick} selected={selected}>
      <MUListItemIcon>{icon}</MUListItemIcon>
      <MUListItemText primary={text} secondary={sub} />
    </MUListItem>
  );
};

export default ListItem;
