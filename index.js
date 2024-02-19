const mainContainer = document.querySelector('.container');

for (let i = 0; i < 100; i++) { 
    let divCon = document.createElement('div');
    divCon.classList.add('div-con'); 

    for (let j = 0; j < 100; j++) { 
        let divs = document.createElement('div');
        divs.classList.add('divs'); 

        divCon.appendChild(divs); 
    }

    mainContainer.appendChild(divCon);
}
