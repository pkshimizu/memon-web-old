import React from "react";
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import SiteHeader from "./index";

const components = storiesOf('organisms', module);
components
  .addDecorator(withKnobs)
  .add('SiteHeader', () => (
    <SiteHeader/>
  ));
