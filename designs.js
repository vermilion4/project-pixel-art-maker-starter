// get the form from HTML by id and assign to form variable
let form = document.getElementById("sizePicker");

// makegrid function
function makeGrid() {
  // put the user inputted width into the columns variable
  let columns = document.getElementById("inputWidth").value;
  // put the user inputted heiight into the rows variable
  let rows = document.getElementById("inputHeight").value;
  // get the table/grid space by id and assign to grid variable
  let grid = document.getElementById("pixelCanvas");

  //   clear table if already existing
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }

  //   create rows and columns
  //   create rows and append to grid
  for (let i = 0; i < rows; i++) {
    let x = grid.insertRow(i);

    // create cells and append to rows(makes for columns)
    for (let j = 0; j < columns; j++) {
      let gridSquare = x.insertCell(j);

      //   fill in the color for each cell clicked, based on user's color pick
      gridSquare.addEventListener("mousedown", () => {
        let color = document.getElementById("colorPicker").value;
        gridSquare.style.backgroundColor = color;
      });
    }
  }
}

// prevent form's default resubmitting and page refresh, then calls makeGrid function
form.addEventListener("submit", (e) => {
  e.preventDefault();
  makeGrid();
});
