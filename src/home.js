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
    const quote = document.createElement('div');
    const quote2 = document.createElement('div');
    quote.classList.add('quote');
    quote2.classList.add('name');
    quote.textContent = '"Hasta la victoria siempre"'
    quote2.textContent = "—Ernesto Che Guevara"
    imgRight.classList.add('imgRight');
    imgLeft.classList.add('imgLeft');
    title.textContent = 'GUERILLA!';
    subtitle.textContent = 'REVOLUTIONARY FOOD'
    imgRight.src = "images/che.svg";
    imgLeft.src = "images/star.svg";
    mainLeft.appendChild(title);
    mainLeft.appendChild(subtitle);
    mainLeft.appendChild(imgLeft);
    mainRight.appendChild(imgRight);
    mainRight.appendChild(quote);
    mainRight.appendChild(quote2);
}

export {createHome};