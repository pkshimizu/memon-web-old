import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import MainTemplate from "./index";

const components = storiesOf("Templates", module);
components
  .addDecorator(withKnobs)
  .add("MainTemplate", () => (
    <div>
      <MainTemplate
        header={
          <div style={{backgroundColor: "#FFEA00"}}>Header</div>
        }
        sidebar={
          <div style={{backgroundColor: "#00D95A"}}>Sidebar</div>
        }
        body={
          <div style={{backgroundColor: "#8EE1DE"}}>Body</div>
        }
      />
    </div>
  ));
