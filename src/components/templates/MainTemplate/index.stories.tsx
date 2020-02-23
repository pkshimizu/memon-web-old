import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import MainTemplate from './index';

const components = storiesOf('Templates', module);
components.addDecorator(withKnobs).add('MainTemplate', () => (
  <>
    <MainTemplate
      header={<div style={{ backgroundColor: '#FFEA00' }}>Header</div>}
      buttons={<div style={{ backgroundColor: '#00D95A' }}>button</div>}
      list={<div style={{ backgroundColor: '#F2A541' }}>list</div>}
      body={<div style={{ backgroundColor: '#8EE1DE' }}>Body</div>}
    />
  </>
));
