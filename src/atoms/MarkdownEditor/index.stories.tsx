import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import MarkdownEditor from './index';
import { action } from '@storybook/addon-actions';

const components = storiesOf('Atoms', module);
components.addDecorator(withKnobs).add('MarkdownEditor', () => (
  <div>
    <div style={{ height: '96px', marginBottom: '32px' }}>
      Keybinding=default
      <MarkdownEditor content={'title'} onChangeContent={action('call onChangeContent')} />
    </div>
    <div style={{ height: '96px', marginBottom: '32px' }}>
      Keybinding=vim
      <MarkdownEditor content={'title'} keyBinding={'vim'} onChangeContent={action('call onChangeContent')} />
    </div>
    <div style={{ height: '96px', marginBottom: '32px' }}>
      Keybinding=emacs
      <MarkdownEditor content={'title'} keyBinding={'emacs'} onChangeContent={action('call onChangeContent')} />
    </div>
  </div>
));
