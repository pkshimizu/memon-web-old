import React from "react";
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import SiteTitle from "./index";

const components = storiesOf('Atoms', module);
components
  .addDecorator(withKnobs)
  .add('SiteTitle', () => (
    <div>
      <SiteTitle/>
    </div>
  ));
