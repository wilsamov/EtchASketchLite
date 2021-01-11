//global variables
const container = document.getElementById('container');
const button = document.getElementById('clear');
const black = document.getElementById('black');
const white = document.getElementById('white');
let color = 'black';

container.style.cssText = 'display: grid; height: 40vw; width: 40vw; grid-template-rows: repeat(var(--grid-rows), 1fr); grid-template-columns: repeat(var(--grid-cols), 1fr); border: 5px solid; border-radius: 8px;';

function createDivs(amount) {
  container.style.setProperty('--grid-rows', amount);
  container.style.setProperty('--grid-cols', amount);

  for (let i = 0; i < amount * amount; i++) {
    var div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
  } hoverColor();
}

function hoverColor() {
  let items = document.querySelectorAll('.grid-item');
  items.forEach(item => {
    item.style.cssText = 'border: 3px rgba(0, 0, 0, 0.041) solid;';
    item.addEventListener('mouseover', () => {
      item.style.backgroundColor = `${color}`;
    });
  });
};

function clearGrid() {
  container.innerHTML = '';
  createDivs(16);
}

button.onclick = clearGrid;
black.onclick = () => color = 'black';
white.onclick = () => color = 'white';
createDivs(16);