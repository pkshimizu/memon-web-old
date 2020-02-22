import React, { useState } from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import TextField from './index';

const components = storiesOf('Atoms', module);
components.addDecorator(withKnobs).add('TextField', () => {
  const [value, updateValue] = useState('');
  return (
    <>
      <TextField label={'Sample'} value={value} onChange={val => updateValue(val)} />
    </>
  );
});
