document.body.setAttribute('style', `margin: 0; padding: 0;`);
const containerDiv = document.createElement("div");
containerDiv.setAttribute('class', 'container');
containerDiv.setAttribute('style', `height: 100vh; width: 100vw; display: flex; flex-wrap: wrap; ` );
document.body.appendChild(containerDiv);
containerDiv.style.border = "2px solid";


function maxSquare(){
 const screenWidth = window.innerWidth;
 const screenHeight = window.innerHeight;
 const boxSize = 16;
 const columns = Math.floor(screenWidth/boxSize);
 const rows = Math.floor(screenHeight/boxSize);
 const totalSquares = columns * rows;

 for(let i=0; i<totalSquares;i++){
   const newBox = document.createElement("div");
   newBox.setAttribute('style', `border: 1px solid #ccc; height: 16px; width: 16px;`);
   containerDiv.append(newBox);
 }
    
}
maxSquare();