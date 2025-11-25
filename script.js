document.body.setAttribute('style', `margin: 0; padding: 0;`);
const btn = document.createElement('button');
btn.textContent = "PUSH FOR CUSTOM"
document.body.append(btn);
const containerDiv = document.createElement("div");
containerDiv.setAttribute('class', 'container');
containerDiv.setAttribute('style', `height: 256PX; width: 256PX; display: flex; flex-wrap: wrap; ` );
document.body.appendChild(containerDiv);

containerDiv.style.border = "2px solid";


function maxSquare(){
//  const screenWidth = window.innerWidth;
//  const screenHeight = window.innerHeight;
//  const boxSize = 16;
//  const columns = Math.floor(screenWidth/boxSize);
//  const rows = Math.floor(screenHeight/boxSize);
//  const totalSquares = columns * rows;

 for(let i=0; i<256;i++){
   const newBox = document.createElement("div");
   newBox.setAttribute('class','squares');
   newBox.setAttribute('style', ` height: 16px; width: 16px;`);
   containerDiv.append(newBox);
 }
    
}

function addHover(){
    const allSquares = document.querySelectorAll('.squares');
    allSquares.forEach(square => {
      square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'aqua';
      })
    });
}
maxSquare();
addHover();
// clickBtn function deletes previous flexbox grid and takes user input for next flexbox grid
const clickBtn = document.querySelector('button');
clickBtn.addEventListener('click', () => {
    const buttonElement = event.currentTarget;
    containerDiv.remove();
    const containerDiv2 = document.createElement("div2");
    containerDiv2.setAttribute('class', 'container');
    containerDiv2.setAttribute('style', `height: 256PX; width: 256PX; display: flex; flex-wrap: wrap; ` );
    document.body.appendChild(containerDiv2);
    
    let userInput = prompt("Pick a number between 1 and 100");
    if (userInput === null || userInput.trim() === "") {
      alert("Input cancelled or empty. Please enter a number.")
    } else {
        userNumber = Number(userInput);
    }
    if (isNaN(userNumber)) {
        alert("please pick a number");
    } else if(userNumber > 100 || userNumber < 1){
        alert("Pick a number between 1 and 100");
    } else{
      let userSquare = userNumber * userNumber;
        for(let i=0; i<userSquare; i++){
          const containerDiv21 = document.createElement("div");
          containerDiv21.setAttribute('class', 'container2');
          containerDiv21.setAttribute('style', `border: 2px solid; height: 16PX; width: 16PX; display: flex; flex-wrap: wrap; ` );
          containerDiv2.append(containerDiv21);
        }
        const boxes2 = document.querySelectorAll('.container2');
        boxes2.forEach(box2 => box2.addEventListener('mouseover', () => {
        box2.style.backgroundColor = "aqua";
        }));
    }
});

//create boxes, append into body, calc user input