import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import List from './index';
import ListItem from '../ListItem';
import { Folder, Mail, Note } from '@material-ui/icons';

const components = storiesOf('Atoms', module);
components.addDecorator(withKnobs).add('List', () => (
  <>
    <List header={'ヘッダータイトル'}>
      <ListItem icon={<Mail />} text={'メール'} sub={'2019-12-23 12:34:56'} selected={true} />
      <ListItem icon={<Folder />} text={'フォルダー'} sub={'2019-12-23 12:34:56'} selected={false} />
      <ListItem icon={<Note />} text={'メモ'} sub={'2019-12-23 12:34:56'} selected={false} />
    </List>
  </>
));
