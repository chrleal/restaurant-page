function createHome() {
    const mainRight = document.querySelector('.mainRight');
    mainRight.innerHTML = '';
    const imgRight = document.createElement('img');
    const quote = document.createElement('div');
    const quote2 = document.createElement('div');
    quote.classList.add('quote');
    quote2.classList.add('name');
    quote.textContent = '"Hasta la victoria siempre"'
    quote2.textContent = "—Ernesto Che Guevara"
    imgRight.classList.add('imgRight');
    imgRight.src = "images/che.svg";
    mainRight.appendChild(imgRight);
    mainRight.appendChild(quote);
    mainRight.appendChild(quote2);
}

export {createHome};