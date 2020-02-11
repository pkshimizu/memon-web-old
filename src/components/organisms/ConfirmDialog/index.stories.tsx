import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import ConfirmDialog from './index';
import { action } from '@storybook/addon-actions';

const components = storiesOf('organisms', module);
components.addDecorator(withKnobs).add('ConfirmDialog', () => (
  <div>
    <ConfirmDialog
      open={true}
      onClose={action('call onClose')}
      title={'Confirm Dialog Title'}
      message={'Confirm Dialog Messages'}
      submitLabel={'submit'}
      onSubmit={action('call onSubmit')}
    />
  </div>
));
