function createHome() {
    const mainRight = document.querySelector('.mainRight');

    mainRight.innerHTML = '';

    const imgRight = document.createElement('img');
    imgRight.classList.add('imgRight');
    imgRight.src = "images/che.svg";
    mainRight.appendChild(imgRight);

    const quote = document.createElement('div');
    quote.classList.add('quote');
    quote.textContent = '"Hasta la victoria siempre"';
    mainRight.appendChild(quote);

    const quote2 = document.createElement('div');
    quote2.classList.add('name');
    quote2.textContent = "—Ernesto Che Guevara"
    mainRight.appendChild(quote2);
}

export {createHome};