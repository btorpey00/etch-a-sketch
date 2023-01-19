const gridSlider = document.getElementById('numRows');
let gridSize = document.getElementById('numRows').value;
const gridText = document.getElementById('slideText');
const gameboard = document.getElementById('gameboard');
const clear = document.getElementById('clear');
const black = document.getElementById('black');
const rainbow = document.getElementById('rainbow');
const shade = document.getElementById('shade');
const erase = document.getElementById('erase');
let custColor = document.getElementById('color');

black.checked = true;

rainbow.addEventListener('change', () => {
    if (rainbow.checked) {
        black.checked = false;
        erase.checked = false;
        custColor.value = '#000000';
    }
});

black.addEventListener('change', () => {
    if (black.checked) {
        rainbow.checked = false;
        erase.checked = false;
        custColor.value = '#000000';
    }
});

erase.addEventListener('change', () => {
    if (rainbow.checked) {
        black.checked = false;
        rainbow.checked = false;
        custColor.value = '#000000';
    }
});

custColor.addEventListener('change', () => {
    black.checked = false;
    rainbow.checked = false;
    erase.checked = false;  
});

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
    if (custColor.value != '#000000') {
        x.style.backgroundColor = `${custColor.value}`;
    }
    else if (rainbow.checked) {
        let randomNum = Math.floor(Math.random() * 6);
        if (randomNum == 0) {
            x.style.backgroundColor = 'red';
        }
        else if (randomNum == 1) {
            x.style.backgroundColor = 'orange';
        }
        else if (randomNum == 2) {
            x.style.backgroundColor = 'yellow';
        }
        else if (randomNum == 3) {
            x.style.backgroundColor = 'green';
        }
        else if (randomNum == 4) {
            x.style.backgroundColor = 'blue';
        }
        else if (randomNum == 5) {
            x.style.backgroundColor = 'purple';
        }
    }
    else if (erase.checked) {
        x.style.backgroundColor = 'white';
    }
    else if (black.checked) {
        x.style.backgroundColor = 'black';
}

}

function clearAll(x) {
    x.style.backgroundColor = 'white';
}