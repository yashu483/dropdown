'use strict';

// import modules

const DOMHandler = (function () {
  const createDropDownIcon = function createDropDownIcon(iconURL) {};

  const showIntoDOM = function showIntoDOM(contentContainer) {
    const div = document.createElement('div');
    div.classList.add('dropdown-container');

    contentContainer.getContent().forEach((button) => {
      const buttonDiv = document.createElement('div');
      buttonDiv.classList.add('button-div');

      const icon = document.createElement('img');
      icon.setAttribute('src', button.displayIcon);
      icon.classList.add('icons');
      buttonDiv.append(icon, button.displayName);
      div.append(buttonDiv);
    });

    document.body.innerHTML = '';
    document.body.appendChild(div);
  };

  return {
    showIntoDOM,
  };
})();

export { DOMHandler };
