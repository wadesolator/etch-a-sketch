console.log('connection = clear');
let gridNumber = 16;

let containerSize = 480;
let etchSize = containerSize / gridNumber;

function defaultState(a) {
  const etchContainer = document.querySelector('.etch-container');
  for (x = 0; x < a; x++) {
    const etchBox = document.createElement('div');
    etchBox.classList.add('etch-container__ver');
    etchContainer.appendChild(etchBox);
  }
  const etchContainerVer = document.querySelectorAll('.etch-container__ver');
  for (x = 0; x < a; x++) {
    for (y = 0; y < a; y++) {
      const etchBox = document.createElement('div');
      etchBox.classList.add('etch');
      //etchBox.textContent = y + 1;
      etchContainerVer[x].appendChild(etchBox);
      etchBox.addEventListener('mouseover', function (e) {
        etchBox.classList.remove('etch');
        etchBox.classList.add('etch--black');
      })
    }
  }
  let etch = document.querySelectorAll('.etch');
  for (x = 0; x < a; x++) {
    for (y = 0; y < a; y++) {
      etch[a * x + y].style.width = `${etchSize}px`;
      etch[a * x + y].style.height = `${etchSize}px`;
    }
  }
}

function resetAll() {
  const etchContainer = document.querySelector('.etch-container');
  const etchContainerVer = document.querySelectorAll('.etch-container > div');
  for (x = 0; x < gridNumber; x++) {
    etchContainer.removeChild(etchContainerVer[x]);
  }
  gridNumber = 16;
}

defaultState(gridNumber);

const changeGrid = document.querySelector('#change-grid');
changeGrid.addEventListener('click', function (e) {
  let newGrid = prompt('Please enter grid size (1-64)', '16');
  newGrid = Number(newGrid);
  if ((Number.isInteger(newGrid) == true) && newGrid <= 64 && newGrid > 0) {
    resetAll();
    gridNumber = newGrid;
    etchSize = containerSize / gridNumber;
    defaultState(gridNumber);
  }
  else {
    alert('Enter the correct number!');
  }
})

const resetGrid = document.querySelector('#reset-grid');
resetGrid.addEventListener('click', function (e) {
  resetAll();
  defaultState(16);
})