import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Button from './index';
import { action } from '@storybook/addon-actions';

const components = storiesOf('Atoms', module);
components.addDecorator(withKnobs).add('Button', () => (
  <div>
    <Button>Inherit</Button>
    <Button color={'primary'}>Primary</Button>
    <Button color={'secondary'}>Secondary</Button>
    <Button color={'default'}>Default</Button>
    <Button
      color={select('Color', { Default: 'default', Primary: 'primary', Secondary: 'secondary' }, 'default')}
      onClick={action('call onClick')}
    >
      {text('Label', 'Sample')}
    </Button>
  </div>
));
