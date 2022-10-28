// Grid generation

const container = document.querySelector('.gridcontainer');
const submit = document.querySelector('#gridSubmit');
const gridInput = document.querySelector('#gridInput');

function initialGrid() {
  clearGrid();
  setupGrid(16);
  gridInput.value = 16;
}

function setupGrid(size) {
  if (size > 60 || typeof size !== 'number') {
    return Error;
  }
  for (let i = 0; i < size ** 2; i++) {
    let gridElement = document.createElement('div');
    gridElement.style.width = `${600 / size}px`;
    gridElement.style.height = `${600 / size}px`;
    gridElement.style.backgroundColor = 'white';
    gridElement.classList.add('gridElement');
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
  const inputValue = parseInt(gridInput.value)
  clearGrid();
  setupGrid(inputValue);
})

initialGrid();

// Draw functionality
let mouseDown = false;
document.onmousedown = () => (mouseDown = true);
document.onmouseup = () => (mouseDown = false);

function draw(e) {
  if (e.type === 'mouseover' && !mouseDown) {
    return;
  } else if (mode === 'erase') {
    e.target.style.backgroundColor = 'white';
  } else if (mode === 'default')
  e.target.style.backgroundColor = currentColor;
}

// Colors
const colorInput = document.querySelector('#color-select');
let currentColor = colorInput.value;

colorInput.addEventListener('input', () => {
  currentColor = colorInput.value;
});

// ---CONTROLS---

const display = document.querySelector('#gridCaption');
const toggles = document.querySelectorAll('.toggle');
const eraser = document.querySelector('#erase');
const gridLines = document.querySelector('#gridLines');
const clear = document.querySelector('#clear');
const allGrid = document.querySelectorAll('.gridElement');
let active = false;
let mode = 'default';
let displayLines = false;

display.textContent = 'Size (up to 60): ';

// Toggle button styles
toggles.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (active === false) {
      btn.classList.add('btnActive');
      active = true;
      return;
    } else if (active === true) {
      btn.classList.remove('btnActive');
      active = false;
      return;
    }
  });
});

// Eraser
eraser.addEventListener('click', () => {
  if (mode === 'erase') {
    mode = 'default';
  } else {
    mode = 'erase';
  }
})

// Gridlines
gridLines.addEventListener('click', () => {
  if (displayLines === false) {
    allGrid.forEach((div) => {
      div.classList.add('gridLines');
    })
    displayLines = true;
  } else if (displayLines === true) {
    allGrid.forEach((div) => {
      div.classList.remove('gridLines');
    })
    displayLines = false;
  }
})

// Clear
clear.addEventListener('click', () => {
  allGrid.forEach((div) => {
    div.style.backgroundColor = 'white';
  });
});