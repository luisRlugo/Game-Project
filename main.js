const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
// const startButton = document.querySelector("#start-game");
const grid = document.querySelector(".grid");
const timeLeft = document.querySelector("#time-left");
const nonMole = document.querySelector(".nonMole");
const easyButton = document.querySelector("#easy");
const mediumButton = document.querySelector("#medium");
const hardButton = document.querySelector("#hard");

//to keep track of the score
let result = 0;
//start countdown will be 30secs
let currentTime = 30;
//storing interval ID to move mole randomly and for the countdown Timer
let moveMole;
let countDownTimer;

//grabbing random square for the mole to be in
function randomSquare() {
  //for each square in our grid get the square and remove mole if it's in any of the square
  squares.forEach((square) => {
    square.classList.remove("mole", "nonMole");
  });

  //getting a random square and then adding a mole to it
  let randomSquare1 = squares[Math.floor(Math.random() * 12)];
  let randomSquare2 = squares[Math.floor(Math.random() * 12)];

  //adding mole and nonMole to two squares
  randomSquare1.classList.add("mole");
  randomSquare2.classList.add("nonMole");
}

/*The setInterval() method calls a function at specified intervals (in milliseconds)*/

//start the game and move the mole
function start(speed) {
  //resetting the reuslts to 0 whenever the game starts
  result = 0;

  //resetting the countdown to 60secs
  currentTime = 30;

  //updating the score display to show 0
  document.querySelector("#score").textContent = result;

  //starting timer and showing the display every sec
  countDownTimer = setInterval(countDown, 1000);

  //moving mole random every milliseconds
  moveMole = setInterval(randomSquare, speed);

  // disabling the start button
  //   startButton.setAttribute("disabled", true);
}
// stop the game
function stop() {
  //reset mole movement and stop countdowon
  clearInterval(moveMole);
  clearInterval(countDownTimer);
}

//adding difficulty buttons
easyButton.addEventListener("click", () => {
  start(1000);
  easyButton.setAttribute("disabled", true);
  mediumButton.setAttribute("disabled", true);
  hardButton.setAttribute("disabled", true);
});
mediumButton.addEventListener("click", () => {
  start(600);
  easyButton.setAttribute("disabled", true);
  mediumButton.setAttribute("disabled", true);
  hardButton.setAttribute("disabled", true);
});
hardButton.addEventListener("click", () => {
  start(400);
  easyButton.setAttribute("disabled", true);
  mediumButton.setAttribute("disabled", true);
  hardButton.setAttribute("disabled", true);
});

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
    // startButton.removeAttribute("disabled");

    //re-enable the level buttons
    easyButton.removeAttribute("disabled");
    mediumButton.removeAttribute("disabled");
    hardButton.removeAttribute("disabled");
  }
}

//start button
// startButton.addEventListener("click", start);

//when we click on the mole we have to get a point
grid.addEventListener("click", (e) => {
  //this is if the clicked square contains the mole
  if (e.target.classList.contains("mole")) {
    result++;
    //show updated score on display
    document.querySelector("#score").textContent = result;

    //if it contians nonMole lose a point
  } else if (e.target.classList.contains("nonMole")) {
    result--;

    //so the score wont go below 0
    if (result < 0) {
      result = 0;
    }
    document.querySelector("#score").textContent = result;
  }
});
