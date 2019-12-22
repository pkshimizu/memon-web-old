import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import PageLoading from './index';

const components = storiesOf('molecules', module);
components.addDecorator(withKnobs).add('PageLoading', () => (
  <div>
    <PageLoading />
  </div>
));
