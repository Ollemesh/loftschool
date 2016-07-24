let block = document.createElement('div');
block.style.position = 'relative';

let body = document.querySelector('body');
let container = document.createElement('div');
container.style.width = '500px';
container.style.height = '500px';
container.style.border = '1px solid red';
container.classList.add('container');
body.appendChild(container);

let button = document.createElement('button');
button.style.zIndex = '1';
button.innerHTML = 'Add block';
body.appendChild(button);

body.addEventListener('click', pushBlock);

function pushBlock() {
  block.style.width= '30px';
  block.style.height = '30px';
  block.style.top = getRandomTop()+'px';
  block.style.left = getRandomLeft()+'px';
  block.style.backgroundColor = getRandomColor();
  container.appendChild(block);
};

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

function getRandomTop() {
  return container.getBoundingClientRect().top + Math.floor((Math.random()* (container.clientHeight - block.clientHeight))+1);
};

function getRandomLeft() {
  return container.getBoundingClientRect().left + Math.floor((Math.random()* (container.clientWidth - block.clientWidth))+1);
};
