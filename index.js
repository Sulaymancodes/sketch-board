const mainContainer = document.querySelector('.container');
const resetBtn = document.querySelector('.reset');
const gridValue = document.querySelector('#grid-value').value;
const eraserBtn = document.querySelector('.eraser-btn');
const blackBtn = document.querySelector('.black-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');


//Creating the sketch pad container
for (let i = 0; i < gridValue; i++) { 
    let divCon = document.createElement('div');
    divCon.classList.add('div-con'); 

    for (let j = 0; j < gridValue; j++) { 
        let divs = document.createElement('div');
        divs.classList.add('divs'); 

        divCon.appendChild(divs); 
        
        //setting the grids to black
        divs.addEventListener('mouseover', () => {
            divs.style.backgroundColor = 'black';
        });
    }

    mainContainer.appendChild(divCon);
}

//setting the height of the skecth pad container 
//base on the No of Grid
document.documentElement.style.setProperty('--height-per-grid', `calc(500px / ${gridValue})`);

