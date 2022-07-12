function createHeader() {
    const content = document.getElementById('content');

    const header = document.createElement("header");
    content.appendChild(header);

    const headerLeft = document.createElement('div');
    headerLeft.classList.add('headerLeft');
    header.appendChild(headerLeft);

    const headerRight = document.createElement('div');
    headerRight.classList.add('headerRight');
    header.appendChild(headerRight);

    const homeBtn = document.createElement('button');
    homeBtn.textContent = "Home";
    homeBtn.setAttribute('class', 'home');
    headerRight.appendChild(homeBtn);

    const menuBtn = document.createElement('button');
    menuBtn.textContent = "Menu";
    menuBtn.setAttribute('class', 'menu');
    headerRight.appendChild(menuBtn);

    const contactBtn = document.createElement('button');
    contactBtn.textContent = "Contact";
    contactBtn.setAttribute('class', 'contact');
    headerRight.appendChild(contactBtn);
}

function createMain() {
    const content = document.getElementById('content');

    const main = document.createElement('main');
    content.appendChild(main);

    const mainContent = document.createElement('div')
    mainContent.classList.add('mainContent');
    main.appendChild(mainContent);

    const mainLeft = document.createElement('div');
    mainLeft.classList.add('mainLeft');
    mainContent.appendChild(mainLeft);

    const mainRight = document.createElement('div');
    mainRight.classList.add('mainRight');
    mainContent.appendChild(mainRight);

    const title = document.createElement('h1');
    title.textContent = 'GUERRILLA!';
    mainLeft.appendChild(title);

    const subtitle = document.createElement('h6');
    subtitle.textContent = 'COCINA CUBANA';
    mainLeft.appendChild(subtitle);

    const imgLeft = document.createElement('img');
    imgLeft.classList.add('imgLeft');
    imgLeft.src = "images/star.svg";
    mainLeft.appendChild(imgLeft);
}

export { createHeader, createMain};