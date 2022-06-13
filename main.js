const buttonOpen = document.getElementById('open');
const buttonClose = document.getElementById('close');
const containerMenu = document.getElementById('container-a-responsive');

function open() {
    containerMenu.style.display = 'flex';
    buttonOpen.style.display = 'none'
    buttonClose.style.display = 'block'
}


function close() {
    containerMenu.style.display = 'none';
    buttonClose.style.display = 'none'
    buttonOpen.style.display = 'block'
}

buttonOpen.addEventListener('click', open);
buttonClose.addEventListener('click', close)