import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import SimpleTemplate from './index';

const components = storiesOf('templates', module);
components.addDecorator(withKnobs).add('SimpleTemplate', () => (
  <>
    <SimpleTemplate
      header={<div style={{ backgroundColor: '#FFEA00', width: '360px', height: '36px' }}>Header</div>}
      body={<div style={{ backgroundColor: '#8EE1DE', width: '360px', height: '280px' }}>Body</div>}
    />
  </>
));
