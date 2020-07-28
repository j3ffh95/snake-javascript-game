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
});
