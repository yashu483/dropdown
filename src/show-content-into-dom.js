'use strict';

// import modules

const DOMHandler = (function () {
  const appendToDom = function appendToDom(contentContainer) {
    const div = document.createElement('div');
    div.classList.add('dropdown-container');

    for (let button in contentContainer) {
      const buttonDiv = document.createElement('div');
      buttonDiv.classList.add('button-div');
      button.displayIcon.classList.add('icons');
      buttonDiv.append(button.displayName, button.displayIcon);
      div.append(buttonDiv);
    }
    document.body.innerHTML = '';
    document.body.appendChild(div);
  };

  return {
    appendToDom,
  };
})();

export { DOMHandler };
