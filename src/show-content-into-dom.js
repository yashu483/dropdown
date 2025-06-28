'use strict';
import menuIcon from './resources/icons/menu-bar.png';
// import modules

const DOMHandler = (function () {
  const createDropDownIcon = function createDropDownIcon() {
    const mainContainer = document.createElement('div');
    mainContainer.classList.add('main-container');

    const menuBarContainer = document.createElement('div');
    menuBarContainer.classList.add('menu-container');

    const menuImg = document.createElement('img');
    menuImg.setAttribute('src', menuIcon);
    menuImg.classList.add('menu-icon');

    menuBarContainer.appendChild(menuImg);
    mainContainer.append(menuBarContainer);
    document.body.append(mainContainer);
  };

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

    const menuBarContainer = document.querySelector('.menu-container');
    menuBarContainer.appendChild(div);
  };

  const showOnHoverOnly = function showOnHoverOnly() {
    const menuBarContainer = document.querySelector('.menu-container');
    const dropdownContainer = document.querySelector('.dropdown-container');
    const mainContainer = document.querySelector('.main-container');

    dropdownContainer.style.display = 'none';
    menuBarContainer.addEventListener('mouseover', () => {
      dropdownContainer.style.display = 'grid';
      mainContainer.style.backgroundColor = 'white';
    });
    menuBarContainer.addEventListener('mouseout', () => {
      dropdownContainer.style.display = 'none';
      mainContainer.style.backgroundColor = 'rgb(0, 255, 255)';
    });
  };

  const execute = function execute(contentContainer) {
    createDropDownIcon();
    showIntoDOM(contentContainer);
    showOnHoverOnly();
  };

  return {
    createDropDownIcon,
    showIntoDOM,
    execute,
  };
})();

export { DOMHandler };
