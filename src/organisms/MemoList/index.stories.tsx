import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import MemoList from './index';

const components = storiesOf('Organisms', module);
components
  .addDecorator(withKnobs)
  .add('MemoList', () => (
    <MemoList
      folders={[{ name: 'XXXプロジェクト' }, { name: 'YYYプロジェクト' }]}
      memos={[{ title: '12/04 議事録' }, { title: '12/03 議事録' }]}
    />
  ));
