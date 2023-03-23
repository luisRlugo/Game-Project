//select all the squares
const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const startButton = document.querySelector("#start-game");
const grid = document.querySelector(".grid");
const timeLeft = document.querySelector("#time-left");

//grabbing random square for the mole to be in
function randomSquare() {
  //for each square in our grid get the square and remove mole if it's in any of the square
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  //getting a random square and then adding a mole to it
  let randomSquare = squares[Math.floor(Math.random() * 9)];
  //adding mole
  randomSquare.classList.add("mole");
}

/*The setInterval() method calls a function at specified intervals (in milliseconds)*/

//to keep track of the score
let result = 0;
//start countdown will be 30secs
let currentTime = 30;

//storing interval ID to move mole randomly and for the countdown Timer
let moveMole;
let countDownTimer;

//start the game and move the mole
function start() {
  //resetting the reuslts to 0 whenever the game starts
  result = 0;

  //resetting the countdown to 60secs
  currentTime = 30;

  //updating the score display to show 0
  document.querySelector("#score").textContent = result;

  //starting timer and showing the display every sec
  countDownTimer = setInterval(countDown, 1000);

  //moving mole random every milliseconds
  moveMole = setInterval(randomSquare, 750);

  // disabling the start button
  startButton.setAttribute("disabled", true);
}
// stop the game
function stop() {
  //stop mole movement and stop countdowon
  clearInterval(moveMole);
  clearInterval(countDownTimer);
}

//update coutdown timer
function countDown() {
  //decremting time by 1 and updating it on score display
  currentTime--;
  timeLeft.textContent = currentTime;
  //if the timer hits 0
  if (currentTime == 0) {
    //this should stop timer and movement when time runs out
    clearInterval(countDownTimer);
    clearInterval(moveMole);
    alert("Times up! Final score is " + result);

    // removing the disabled attribute from the start button
    startButton.removeAttribute("disabled");
  }
}
//start button
startButton.addEventListener("click", start);

//when we click on the mole we have to get a point
grid.addEventListener("click", (e) => {
  //this is if the clicked square contains the mole
  if (e.target.classList.contains("mole")) {
    result++;
    //show updated score on display
    document.querySelector("#score").textContent = result;
  }
});
