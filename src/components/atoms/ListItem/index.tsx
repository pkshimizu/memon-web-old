import React, { ReactElement } from 'react';
import {
  ListItem as MUListItem,
  ListItemText as MUListItemText,
  ListItemIcon as MUListItemIcon,
} from '@material-ui/core';

interface ListItemProps {
  text: string;
  sub?: string;
  icon: ReactElement;
  selected?: boolean;
  onClick?: () => void;
}

const ListItem: React.FC<ListItemProps> = props => {
  const { text, sub, icon, selected = false, onClick } = props;
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  return (
    <MUListItem button={true} onClick={handleClick} selected={selected}>
      <MUListItemIcon>{icon}</MUListItemIcon>
      <MUListItemText primary={text} secondary={sub} />
    </MUListItem>
  );
};

export default ListItem;
