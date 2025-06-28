'use strict';

// import modules

import { DropdownContainer, Button } from './content-constructors';

// import icons

import copyIcon from './resources/icons/copy.png';
import editIcon from './resources/icons/edit.png';
import deleteIcon from './resources/icons/bin.png';
import newDocumentIcon from './resources/icons/new-document.png';
import newFolderIcon from './resources/icons/new-folder.png';
import copilotIcon from './resources/icons/artificial-intelligence.png';
import cutIcon from './resources/icons/scissors.png';
import findIcons from './resources/icons/search.png';

const vsCodeDemo = new DropdownContainer();

// create dropdown buttons
const copy = new Button('Copy', copyIcon);
const rename = new Button('Edit', editIcon);
const deleteButton = new Button('Delete', deleteIcon);
const newDocument = new Button('New File', newDocumentIcon);
const newFolder = new Button('New Folder', newFolderIcon);
const copilot = new Button('Copilot', copilotIcon);
const cut = new Button('Cut', cutIcon);
const find = new Button('Find', findIcons);

// add buttons to vsCodeDemo container

vsCodeDemo.addContent(
  newDocument,
  newFolder,
  find,
  copilot,
  cut,
  copy,
  rename,
  deleteButton,
);

export { vsCodeDemo };
