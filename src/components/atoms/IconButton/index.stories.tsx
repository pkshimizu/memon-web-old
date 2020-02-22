import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import IconButton, { Color } from './index';
import { Face } from '@material-ui/icons';

const components = storiesOf('Atoms', module);
components.addDecorator(withKnobs).add('IconButton', () => (
  <>
    <IconButton icon={<Face />}>Inherit</IconButton>
    <IconButton color={Color.PRIMARY} icon={<Face />}>
      Primary
    </IconButton>
    <IconButton color={Color.SECONDARY} icon={<Face />}>
      Secondary
    </IconButton>
    <IconButton color={Color.DEFAULT} icon={<Face />}>
      Default
    </IconButton>
  </>
));
