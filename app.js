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
});
