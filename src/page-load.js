function createHeader() {
    const content = document.getElementById('content');
    const header = document.createElement("header");
    const homeBtn = document.createElement('button');
    const menuBtn = document.createElement('button');
    const contactBtn = document.createElement('button');
    homeBtn.textContent = "HOME";
    menuBtn.textContent = "MENU";
    contactBtn.textContent = "CONTACT";
    content.appendChild(header);
    header.appendChild(homeBtn);
    header.appendChild(menuBtn);
    header.appendChild(contactBtn);
}

function createMain() {
    const content = document.getElementById('content');
    const main = document.createElement('main');
    const mainContent = document.createElement('div')
    mainContent.classList.add('mainContent')
    content.appendChild(main)
    main.appendChild(mainContent);
}



export { createHeader, createMain };