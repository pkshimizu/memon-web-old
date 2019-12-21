import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import ActionButtons from './index';

const components = storiesOf('Molecules', module);
components
  .addDecorator(withKnobs)
  .add('ActionButtons', () => <ActionButtons onClickAdd={action('call onClickAddMemo')} />);
