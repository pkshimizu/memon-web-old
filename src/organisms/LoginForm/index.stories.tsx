import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import LoginForm from './index';
import { action } from '@storybook/addon-actions';

const components = storiesOf('organisms', module);
components.addDecorator(withKnobs).add('LoginForm', () => (
  <div>
    <LoginForm onSubmit={action(`onSubmit`)} />
  </div>
));
