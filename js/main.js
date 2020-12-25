// Declare a empty scring variable for currentColor to be used in function
var currentColor = "";

//
var grid = document.getElementsByClassName("grid-container")[0];
for (let i = 0; i < 1500; i++) {
  let div = document.createElement("div");
  div.className = "grid-cell";
  div.addEventListener("click", function () {
    this.style.backgroundColor = "var(" + currentColor + ")";
  });
  grid.appendChild(div);
}

function changeCurrentColor(color) {
  currentColor = "--" + color;
  document.getElementById("currentColor").style.backgroundColor =
    "var(" + currentColor + ")";
}
