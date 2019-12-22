import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import PasswordField from './index';

const components = storiesOf('atoms', module);
components.addDecorator(withKnobs).add('PasswordField', () => (
  <div>
    <PasswordField label={'Password'} />
  </div>
));
