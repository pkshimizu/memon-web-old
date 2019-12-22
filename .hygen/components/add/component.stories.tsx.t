---
to: src/<%= atomicDirectory %>/<%= componentName %>/index.stories.tsx
---
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

const components = storiesOf('<%= atomicDirectory %>', module);
components.addDecorator(withKnobs).add('<%= componentName %>', () => (
  <div>
  </div>
));
