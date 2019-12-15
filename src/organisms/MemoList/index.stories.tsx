import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import MemoList from './index';
import { action } from '@storybook/addon-actions';
import { uuid } from 'uuidv4';

const components = storiesOf('Organisms', module);
components.addDecorator(withKnobs).add('MemoList', () => (
  <MemoList
    memos={[
      {
        uuid: uuid(),
        title: '12/04 議事録',
        content: '',
        createdAt: '2019-12-09T12:34:56',
        updatedAt: '2019-12-09T12:34:56',
      },
      {
        uuid: uuid(),
        title: '12/03 議事録',
        content: '',
        createdAt: '2019-12-09T12:34:56',
        updatedAt: '2019-12-09T12:34:56',
      },
    ]}
    onClickAddMemo={action('call onClickAddMemo')}
    onSelectMemo={action('call onSelectMemo')}
  />
));
