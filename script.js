const gridSlider = document.getElementById('numRows');
let gridSize = document.getElementById('numRows').value;
const gridText = document.getElementById('slideText');
const gameboard = document.getElementById('gameboard');
const clear = document.getElementById('clear');

gridText.textContent = `${gridSize} x ${gridSize}`;
createGrid(gridSize);

gridSlider.addEventListener('change', () => {
    gridSize = document.getElementById('numRows').value;
    gridText.textContent = `${gridSize} x ${gridSize}`;
    createGrid(gridSize);
});

function createGrid(x) {
    resetGrid();
    let width = 100 / x;
    
    for(let i = 1 ; i <= x ; i++) {      
        const column = document.createElement('column');
        column.classList.add('column');
        column.style.width = `${width}%`;
        gameboard.appendChild(column);
        for(let n = 1 ; n <= x ; n++) {
            const square = document.createElement('div');
            square.classList.add('square');
            column.appendChild(square);
            square.addEventListener('mouseenter', () => {
                colorSquare(square);
            });
            clear.addEventListener('click', () => {
                clearAll(square);
            });
        }
    }
}

function resetGrid() {
    while (gameboard.firstChild) {
        gameboard.removeChild(gameboard.firstChild);
    }
}

function colorSquare(x) {
    x.classList.add('colored');
}

function clearAll(x) {
    x.classList.remove('colored');
}