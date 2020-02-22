import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, text, withKnobs } from '@storybook/addon-knobs';
import Button, { Color } from './index';
import { action } from '@storybook/addon-actions';

const components = storiesOf('Atoms', module);
components.addDecorator(withKnobs).add('Button', () => (
  <>
    <Button>Inherit</Button>
    <Button color={Color.PRIMARY}>Primary</Button>
    <Button color={Color.SECONDARY}>Secondary</Button>
    <Button color={Color.DEFAULT}>Default</Button>
    <Button
      color={select(
        'Color',
        { Default: Color.DEFAULT, Primary: Color.PRIMARY, Secondary: Color.SECONDARY },
        Color.DEFAULT
      )}
      onClick={action('call onClick')}
    >
      {text('Label', 'Sample')}
    </Button>
  </>
));
