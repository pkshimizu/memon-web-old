import React from 'react';
import { List as MUList, ListSubheader as MUListSubheader } from '@material-ui/core';

interface ListProps {
  header?: string;
}

const List: React.FC<ListProps> = props => {
  const { children, header } = props;
  return <MUList subheader={<MUListSubheader>{header}</MUListSubheader>}>{children}</MUList>;
};

export default List;
