'use strict';

/* creates a new content container so we can
 create dropdown from different container 
 containing different data */

class DropdownContainer {
  constructor() {
    this.content = [];
  }
  getContent() {
    return this.content;
  }

  addContent(...items) {
    this.content.push(...items);
  }
  deleteItem(itemValue) {
    this.content.forEach((item, index) => {
      if (item.value === itemValue) {
        this.content.splice(index, 1);
      }
    });
  }
}

class Button {
  constructor(displayName, displayIcon) {
    this.displayName = displayName;
    this.displayImage = displayIcon;
    this.value = this.displayName;
  }
}

export { DropdownContainer, Button };
