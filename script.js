const container = document.getElementsByClassName('container')[0];
const cells = document.getElementsByClassName('cell');
const clear = document.getElementById('newCanvas');
let gridSize = 16;



drawCanvas();

//connecting button to clear/redraw functionality
clear.addEventListener("click", newCanvas);

//create canvas
function drawCanvas() {
for (let i = 0; i < gridSize*gridSize; i++) {
    let size = 600/gridSize;
    let cell = document.createElement('div');
    //create and draw grid
    cell.classList.add("cell");
    cell.setAttribute('id', `cell${i+1}`);
    container.style.gridTemplateColumns=`repeat(${gridSize}, 1fr)`;
    cell.style.width=`${size}px`;
    cell.style.height=`${size}px`;
    container.appendChild(cell);
}
//add hover listener to cell class
for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('mouseover', function () {
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        cells[i].style.backgroundColor=randomColor;
    });
}
}

//erase canvas
function newCanvas() {
    while (container.firstChild) {
        let aCell = container.firstChild;
        container.removeChild(aCell);
    }

    reDraw();
}

function reDraw() {
    let newSize = prompt("What size would you like the canvas to be?");
    //validate response to be an integer between 4 and 100
    while (isNaN(newSize) || newSize < 4 || newSize > 100) {
        newSize = prompt("Must be a number between 4 and 100.");
    } 
    gridSize = newSize;
    drawCanvas();
}












