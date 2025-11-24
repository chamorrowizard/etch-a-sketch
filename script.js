const containerDiv = document.createElement("div");
containerDiv.setAttribute('class', 'container');
containerDiv.style.display = "flex";

document.body.appendChild(containerDiv);
containerDiv.style.border = "2px solid";

const squareBox = document.createElement("div");
squareBox.style.border = "2px solid";
squareBox.style.height = "16px";
squareBox.style.width = "16px";
containerDiv.append(squareBox);