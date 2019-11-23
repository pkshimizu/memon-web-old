import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import SearchForm from "./index";

const components = storiesOf("Molecules", module);
components
  .addDecorator(withKnobs)
  .add("SearchForm", () => (
    <div>
      <SearchForm/>
    </div>
  ));
