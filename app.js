const btnNew = document.querySelector('.newgrid')

btnNew.textContent = 'Create new grid';
btnNew.addEventListener('click', () => {
  gridSize = prompt('Grid size (up to 100):');
  if (gridSize > 100 || typeof gridSize !== 'number') {
    return Error;
  }
});

const container = document.querySelector('.container');

for (i = 0; i < 16; i++) {
  let newDiv = document.createElement('div');
  newDiv.classList.add('grid');
  container.appendChild(newDiv);
}

const grid = document.querySelectorAll('.grid');

function generateGrid(size) {
  
}