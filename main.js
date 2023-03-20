//select all the squares
const squares = document.querySelectorAll(".square");

const mole = document.querySelector(".mole");

let result = 0;

//grabbing random square for the mole to be in
function randomSquare() {
  //for each square in our grid get the square and remove mole if it's in any of the square
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  //getting a random square and then adding a mole to it
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  randomSquare.classList.add("mole");
}
