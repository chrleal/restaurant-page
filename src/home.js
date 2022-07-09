function createHome() {
    const mainContent = document.querySelector('.mainContent');
    const mainLeft = document.createElement('div');
    const mainRight = document.createElement('div');
    mainLeft.classList.add('mainLeft');
    mainRight.classList.add('mainRight');
    mainContent.appendChild(mainLeft);
    mainContent.appendChild(mainRight);

    const title = document.createElement('h1');
    const subtitle = document.createElement('h6');
    const imgRight = document.createElement('img');
    const imgLeft = document.createElement('img');
    imgRight.classList.add('imgRight');
    imgLeft.classList.add('imgLeft');
    title.textContent = 'GUERILLA!';
    subtitle.textContent = 'THE REVOLUTIONARY FOOD'
    imgRight.src = "images/star.svg";
    imgLeft.src = "images/che.svg";
    mainLeft.appendChild(title);
    mainLeft.appendChild(subtitle);
    mainLeft.appendChild(imgLeft);
    mainRight.appendChild(imgRight);
}

export {createHome};