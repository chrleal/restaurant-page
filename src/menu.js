function createMenu(){
    const mainRight = document.querySelector('.mainRight')
    mainRight.innerHTML = '';

    // container
    const containerMenu= document.createElement('div')
    containerMenu.classList.add('containerMenu')
    mainRight.appendChild(containerMenu);

    //menu
    const menu = [
        {img: 'images/lechonasado.jpg',
        name: 'Lechon Asado'},
        {img: 'images/chiviricos.jpg',
        name: 'Chiviricos'},
        {img: 'images/ropavieja.jpg',
        name: 'Ropa Vieja'},
        {img: 'images/tostones.jpg',
        name: 'Tostones'},
        {img: 'images/yucaconmojo.jpg',
        name: 'Yuca con Mojo'},
        {img: 'images/chicharrones.jpg',
        name: 'Chicharrones'}
    ];

    menu.forEach (option => displayMenu(option));

    function displayMenu(option) {
        const cell = document.createElement('div');
        cell.setAttribute('class', 'cell');
        const img = document.createElement('img');
        const name = document.createElement('h3');

        img.src = option.img;
        name.textContent = option.name;

        containerMenu.appendChild(cell)
        cell.appendChild(img);
        cell.appendChild(name);
    }
}

export {createMenu};