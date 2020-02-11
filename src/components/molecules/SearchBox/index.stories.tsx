import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import SearchBox from './index';

const components = storiesOf('Molecules', module);
components.addDecorator(withKnobs).add('SearchBox', () => (
  <div>
    <SearchBox />
  </div>
));
