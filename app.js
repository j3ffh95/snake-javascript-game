document.addEventListener("DOMContentLoaded", () => {
  const squares = document.querySelectorAll(".grid div"),
    scoreDisplay = document.querySelector(".span"),
    startBtn = document.querySelector(".start");

  const width = 10;
  let currentIndex = 0; // so first div in our grid
  let appleIndex = 0; // so first div in our grid
  let currentSnake = [2, 1, 0]; // so the div in our grid being 2 (or the HEAD), and 0 being the end (TAIL, with all 1's being the body from now on)
  let direction = 1;
  let score = 0;
  let speed = 0.9;
  let intervalTime = 0;
  let interval = 0;

  // To start, and restart the game
  function startGame() {
    currentSnake.forEach((index) => squares[index].classList.remove("snake"));
    squares[appleIndex].classList.remove("apple");
    clearInterval(interval);
    score = 0;
    // randomApple()
    direction = 1;
    scoreDisplay.innerText = score;
    intervalTime = 1000;
    currentSnake = [2, 1, 0];
    currentIndex = 0;
    currentSnake.forEach((index) => squares[index].classList.add("snake"));
    interval = setInterval(moveOutcomes, intervalTime);
  }

  // Assign functions to keywords
  function control(e) {
    // We are removing the class of snake from ALL the squares
    squares[currentIndex].classList.remove("snake");

    // If we press the right arrow on our keyboard, the snake will go right one
    if (e.keycode === 39) {
      direction = 1;
    } else if (e.keycode === 38) {
      // If we press the up arrow, the snake will go back ten divs, appearing to go up
      direction = -width;
    } else if (e.keycode === 37) {
      // If we press left, the snake will go left one div
      direction = -1;
    } else if (e.keycode === 40) {
      // If we press down, the snake head will instantly appear in the div ten divs from where you are now
      direction = +width;
    }
  }

  document.addEventListener("keyup", control);
});
