import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import InputBox from './index';

const components = storiesOf('Atoms', module);
components.addDecorator(withKnobs).add('InputBox', () => (
  <div>
    <InputBox placeholder={'Sample'} />
  </div>
));
