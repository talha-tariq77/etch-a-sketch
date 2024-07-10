let gridWidth = 960;
let gridHeight = 500;

let defaultColor = 'white';

let random = true;
let defaultHighlightColor = 'black';

let gridContainer = document.querySelector('#grid');

gridContainer.setAttribute('style', `width: ${gridWidth}px; height: ${gridHeight}px`)

let generateGridButton = document.querySelector('#generateButton');

let resetButton = document.querySelector('#resetButton');

let randomButton = document.querySelector('#randomButton');

randomButton.addEventListener('click', () => {
    random = random? false: true;
})

resetButton.addEventListener('click', resetGrid);

generateGridButton.addEventListener('click', getGridSize);

function getGridSize() {
    size = Number(prompt("What size grid would you like?"));
    console.log(typeof size);
    while (isNaN(size) || size > 100) {
        size = Number(prompt("What size grid would you like?"));
    }

    generateGrid(size);
}


function resetGrid() {
    gridContainer.childNodes.forEach((elem) => {
        elem.style.backgroundColor = defaultColor;
    })
}

function generateGrid(gridSize) {
    gridContainer.replaceChildren();
    for (let i=0; i < gridSize * gridSize; i++) {
        newDiv = document.createElement('div');
        newDiv.setAttribute('style', `width: ${gridWidth / gridSize}px; height: ${gridHeight/gridSize}px; 
            background-color: ${defaultColor}; opacity: 0;`)
        newDiv.addEventListener('mouseover', highlightDiv);
        gridContainer.appendChild(newDiv);
    }
}

function highlightDiv(e) {
    let highlightColor = random ? `#${Math.floor((Math.random() * 16777216)).toString(16)}`: defaultHighlightColor;
    console.log(highlightColor);
    e.target.style.backgroundColor = highlightColor;
    e.target.style.opacity = Math.min(Number(e.target.style.opacity) + 0.1, 1);
}