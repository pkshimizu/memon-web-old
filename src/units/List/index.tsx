import React from 'react'
import MUList from '@material-ui/core/List'
import MUListSubheader from '@material-ui/core/ListSubheader'

type ListProps = {
  children: object,
  header?: string
}

const List: React.FC<ListProps> = props => {
  return (
    <MUList
      subheader = {
        <MUListSubheader>{props.header}</MUListSubheader>
      }
    >
      {props.children}
    </MUList>
  )
};

export default List
