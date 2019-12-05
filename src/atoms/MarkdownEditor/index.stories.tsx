import React from 'react';

import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import MarkdownEditor from './index';

const components = storiesOf('Atoms', module);
components.addDecorator(withKnobs).add('MarkdownEditor', () => (
  <div>
    Keybinding=default
    <MarkdownEditor />
    Keybinding=vim
    <MarkdownEditor keyBinding={'vim'} />
    Keybinding=emacs
    <MarkdownEditor keyBinding={'emacs'} />
  </div>
));
