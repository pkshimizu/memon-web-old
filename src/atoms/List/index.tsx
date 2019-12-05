import React, {ReactNodeArray} from 'react'
import MUList from '@material-ui/core/List'
import MUListSubheader from '@material-ui/core/ListSubheader'

type ListProps = {
  children: Element[] | ReactNodeArray,
  header?: string
}

const List: React.FC<ListProps> = props => {
  const {children, header} = props;
  return (
    <MUList
      subheader = {
        <MUListSubheader>{header}</MUListSubheader>
      }
    >
      {children}
    </MUList>
  )
};

export default List
