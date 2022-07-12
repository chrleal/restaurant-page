function createContact(){
    const mainRight = document.querySelector('.mainRight')
    mainRight.innerHTML = '';

    const contact = [
        {text: 'Monday - Saturday'},
        {text: '12pm - 11pm'},
        {text: 'Havana, Cuba'}
    ];

    const container = document.createElement('div');
    container.classList.add('contactContainer');
    mainRight.appendChild(container);
    const title = document.createElement('h1');
    title.textContent = 'Find us here:'
    container.appendChild(title);
    const containerSub = document.createElement('div');
    containerSub.classList.add('textContainer')
    container.appendChild(containerSub);
    const img = document.createElement('img');
    img.src = "images/star.svg";
    container.appendChild(img);
    // const text1 = document.createElement('p')
    // const text2 = document.createElement('p')
    // const text3 = document.createElement('p')
    // const text4 = document.createElement('p')

    contact.forEach(item => {
        const text = document.createElement('p');
        containerSub.appendChild(text);
        text.textContent = item.text;
    })



}

export {createContact};