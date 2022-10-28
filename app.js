// Grid generation

const container = document.querySelector('.gridcontainer');

function setupGrid(size) {
  if (size > 60 || typeof size !== 'number') {
    return Error;
  }
  for (let i = 0; i < size ** 2; i++) {
    let newDiv = document.createElement('div');
    newDiv.style.width = `${600 / size}px`;
    newDiv.style.height = `${600 / size}px`;
    container.appendChild(newDiv);
  }
}

function clearGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

const submit = document.querySelector('#gridSubmit');

submit.addEventListener('click', () => {
  const inputValue = parseInt(document.querySelector('#gridInput').value)
  clearGrid();
  setupGrid(inputValue);
})







const display = document.querySelector('#gridCaption');
display.textContent = 'Size (up to 60): ';