// Grid generation

const container = document.querySelector('.gridcontainer');
const submit = document.querySelector('#gridSubmit');

function setupGrid(size) {
  if (size > 60 || typeof size !== 'number') {
    return Error;
  }
  for (let i = 0; i < size ** 2; i++) {
    let gridElement = document.createElement('div');
    gridElement.style.width = `${600 / size}px`;
    gridElement.style.height = `${600 / size}px`;
    gridElement.style.backgroundColor = 'white';
    gridElement.addEventListener('mousedown', draw);
    gridElement.addEventListener('mouseover', draw);
    container.appendChild(gridElement);
  }
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

submit.addEventListener('click', () => {
  const inputValue = parseInt(document.querySelector('#gridInput').value)
  clearGrid();
  setupGrid(inputValue);
})


// Draw functionality

let mouseDown = false;
document.onmousedown = () => (mouseDown = true);
document.onmouseup = () => (mouseDown = false);

function draw(e) {
  if (e.type === 'mouseover' && !mouseDown) {
    return;
  }
  e.target.style.backgroundColor = "black";
}


// Controls

const display = document.querySelector('#gridCaption');
display.textContent = 'Size (up to 60): ';