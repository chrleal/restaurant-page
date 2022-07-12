import { createHeader, createMain} from "./page-load";
import {createHome} from "./home.js";
import {createMenu} from "./menu.js";
import {createContact} from "./contact.js";
createHeader();
createMain();

const homeBtn = document.querySelector('.home');
const menuBtn = document.querySelector('.menu');
const contactBtn = document.querySelector('.contact');

(function updatePage() {
    createHome();
    homeBtn.addEventListener('click', createHome);
    menuBtn.addEventListener('click', createMenu);
    contactBtn.addEventListener('click', createContact);
})();

