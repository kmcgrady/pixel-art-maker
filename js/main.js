// Declare a empty scring variable for currentColor to be used in function
var currentColor = "";

// Hook the grid container so that we can inject the grid cells into it with a loop
var grid = document.getElementsByClassName("grid-container")[0];
// For loop to inject all the grid cells into the grid container
for (let i = 0; i < 1500; i++) {
  // Create an element and save it into a variable called div
  let div = document.createElement("div");
  // Asign the classname of grid-cell to the new div
  div.className = "grid-cell";
  // Add an event listener (onClick) to the div that changes the background color
  div.addEventListener("click", function () {
    this.style.backgroundColor = "var(" + currentColor + ")";
  });
  // Replace the div with the new div (and current color)
  grid.appendChild(div);
}
// Function to change current color to color the user clicks on
// Takes in a param of color
function changeCurrentColor(color) {
  currentColor = "--" + color;
  document.getElementById("currentColor").style.backgroundColor =
    "var(" + currentColor + ")";
}

// Function to reload page and clear grid
function clearGrid() {
  confirm("This can not be undone.\nAre you sure you would like to clear this canvas?");
  window.location.reload();
}

function generatePDF() {
  // Choose the element that our PDF rendered in.
  const element = document.getElementById("grid-canvas");
  // Choose the element and save the PDF for our user.
  html2pdf()
    .from(element)
    .save();
}