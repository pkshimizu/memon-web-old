import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import PasswordField from './index';

const components = storiesOf('atoms', module);
components.addDecorator(withKnobs).add('PasswordField', () => {
  const [value, updateValue] = useState('');
  return (
    <>
      <PasswordField label={'Password'} value={value} onChange={val => updateValue(val)} />
    </>
  );
});
