import {createHome} from "./home.js";

function createHeader() {
    const content = document.getElementById('content');
    const header = document.createElement("header");
    const headerLeft = document.createElement('div');
    const headerRight = document.createElement('div');
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    headerLeft.classList.add('headerLeft');
    headerRight.classList.add('headerRight');
    homeBtn.textContent = "Home";
    menuBtn.textContent = "Menu";
    contactBtn.textContent = "Contact";
    content.appendChild(header);
    header.appendChild(headerLeft);
    header.appendChild(headerRight);
    headerRight.appendChild(homeBtn);
    headerRight.appendChild(menuBtn);
    headerRight.appendChild(contactBtn);
}

function createMain() {
    const content = document.getElementById('content');
    const main = document.createElement('main');
    const mainContent = document.createElement('div')
    mainContent.classList.add('mainContent')
    content.appendChild(main)
    main.appendChild(mainContent);
    createHome();
}



export { createHeader, createMain };