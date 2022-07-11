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
    homeBtn.textContent = "HOME";
    menuBtn.textContent = "MENU";
    contactBtn.textContent = "CONTACT";
    homeBtn.setAttribute('class', 'home');
    menuBtn.setAttribute('class', 'menu');
    contactBtn.setAttribute('class', 'contact');
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
    const mainLeft = document.createElement('div');
    const mainRight = document.createElement('div');
    mainLeft.classList.add('mainLeft');
    mainRight.classList.add('mainRight');
    mainContent.appendChild(mainLeft);
    mainContent.appendChild(mainRight);
    const title = document.createElement('h1');
    const subtitle = document.createElement('h6');
    const imgLeft = document.createElement('img');
    imgLeft.classList.add('imgLeft');
    imgLeft.src = "images/star.svg";
    title.textContent = 'GUERRILLA!';
    subtitle.textContent = 'COCINA CUBANA';
    mainLeft.appendChild(title);
    mainLeft.appendChild(subtitle);
    mainLeft.appendChild(imgLeft);
}


export { createHeader, createMain};