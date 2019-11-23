import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";

import List from './index'
import ListItem from "./item";
import {Folder, Mail, Note} from "@material-ui/icons";


const components = storiesOf("Atoms", module);
components
  .addDecorator(withKnobs)
  .add("List", () => (
    <div>
      <List header="ヘッダータイトル">
        <ListItem icon={<Mail />} text="メール"/>
        <ListItem icon={<Folder />} text="フォルダー"/>
        <ListItem icon={<Note />} text="メモ"/>
      </List>
    </div>
  ));