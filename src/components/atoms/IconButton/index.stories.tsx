import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import IconButton from './index';
import { Face } from '@material-ui/icons';

const components = storiesOf('Atoms', module);
components.addDecorator(withKnobs).add('IconButton', () => (
  <div>
    <IconButton icon={<Face />}>Inherit</IconButton>
    <IconButton color={'primary'} icon={<Face />}>
      Primary
    </IconButton>
    <IconButton color={'secondary'} icon={<Face />}>
      Secondary
    </IconButton>
    <IconButton color={'default'} icon={<Face />}>
      Default
    </IconButton>
  </div>
));
