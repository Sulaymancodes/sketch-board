const mainContainer = document.querySelector('.container');
const resetBtn = document.querySelector('.reset');
const enterBtn = document.querySelector('.grid-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const blackBtn = document.querySelector('.black-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');






//Creating the sketch pad container
function createGrid(){
    //clearing the container to add new grids
    mainContainer.innerHTML = '';

    const gridValue = document.querySelector('#grid-value').value;
    //to avoid putting high grid value which will slow down the browser
    if(gridValue > 1 && gridValue < 100){
        for (let i = 0; i < gridValue; i++) { 
            let divCon = document.createElement('div');
            divCon.classList.add('div-con'); 
        
            for (let j = 0; j < gridValue; j++) { 
                let divs = document.createElement('div');
                divs.classList.add('divs'); 
        
                divCon.appendChild(divs); 
        
                //resetting all the divs color to white
                resetBtn.addEventListener('click', () =>{
                    divs.style.backgroundColor = 'white';
                });
        
                //erasing the divs back to white
                eraserBtn.addEventListener('click', () =>{
                    divs.addEventListener('mouseover', () =>{
                        divs.style.backgroundColor = 'white';
                    })
                })
        
                //setting the divs to black
                blackBtn.addEventListener('click', () =>{
                    divs.addEventListener('mouseover', () =>{
                        divs.style.backgroundColor = 'black';
                    })
                })
        
                //setting divs to rainbow colors
                rainbowBtn.addEventListener('click', () => {
                    divs.removeEventListener('mouseover', () => {
                        divs.style.backgroundColor = 'black';
                    });
                    document.querySelectorAll('.divs').forEach(div => {
                        div.addEventListener('mouseover', changeToRandomColor);
                    });
                });
                
                       
            }
            //setting the height of the skecth pad container 
            //base on the No of Grid
            document.documentElement.style.setProperty('--height-per-grid', `calc(500px / ${gridValue})`);
    
            mainContainer.appendChild(divCon);
        }
    
    }else{
        alert('Try value between 2 to 100')
    }
}


function changeToRandomColor(event) {
    // Generate random RGB values
    const red = Math.floor(Math.random() * 256); // 0 to 255
    const green = Math.floor(Math.random() * 256); // 0 to 255
    const blue = Math.floor(Math.random() * 256); // 0 to 255
    
    // Set the background color of the div
    event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
} 

createGrid();