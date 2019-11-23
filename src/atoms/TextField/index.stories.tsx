import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import TextField from "./index";

const components = storiesOf("Atoms", module);
components
  .addDecorator(withKnobs)
  .add("TextField", () => (
    <div>
      <TextField label="Sample"/>
    </div>
  ));
