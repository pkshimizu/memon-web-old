import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import SiteHeader from './index';
import { action } from '@storybook/addon-actions';

const components = storiesOf('organisms', module);
components.addDecorator(withKnobs).add('SiteHeader', () => <SiteHeader onClickLogout={action('Click Logout')} />);
