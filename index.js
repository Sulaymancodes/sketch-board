const mainContainer = document.querySelector('.container');
const resetBtn = document.querySelector('.reset');
const enterBtn = document.querySelector('.grid-btn');
const eraserBtn = document.querySelector('.eraser-btn');
const blackBtn = document.querySelector('.black-btn');
const rainbowBtn = document.querySelector('.rainbow-btn');


const returnGridValue = (function() {
    return document.querySelector('#grid-value').value;
})();



//Creating the sketch pad container
for (let i = 0; i < returnGridValue; i++) { 
    let divCon = document.createElement('div');
    divCon.classList.add('div-con'); 

    for (let j = 0; j < returnGridValue; j++) { 
        let divs = document.createElement('div');
        divs.classList.add('divs'); 

        divCon.appendChild(divs); 
        
        //setting the divs to black
        divs.addEventListener('mouseover', () => {
            divs.style.backgroundColor = 'black';
        });

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
            document.querySelectorAll('.divs').forEach(div => {
                div.addEventListener('mouseover', changeToRandomColor);
            });
        });
        
        function changeToRandomColor(event) {
            // Generate random RGB values
            const red = Math.floor(Math.random() * 256); // 0 to 255
            const green = Math.floor(Math.random() * 256); // 0 to 255
            const blue = Math.floor(Math.random() * 256); // 0 to 255
            
            // Set the background color of the div
            event.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }        
    }

    mainContainer.appendChild(divCon);
}

//setting the height of the skecth pad container 
//base on the No of Grid
document.documentElement.style.setProperty('--height-per-grid', `calc(500px / ${returnGridValue})`);

