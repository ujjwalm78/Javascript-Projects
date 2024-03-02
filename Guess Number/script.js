let randomNum = parseInt(Math.random() * 100 + 1);
// console.log(randomNum);
let guessField = document.querySelector("#guessField");
let prevGuesses = document.querySelector(".guesses");
let remainingGuesses = document.querySelector(".lastResult");
let lowOrHigh = document.querySelector(".lowOrHi");
let p = document.createElement("p");
let startOver = document.querySelector(".resultParas");

let submit = document.querySelector("#subt");

let playGame = true;
let numGuesses = 1;

if (playGame) {
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    let guess = guessField.value;
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage("Please Enter a valid number");
  } else if (guess < 1) {
    displayMessage("Please Enter a number greater than 0");
  } else if (guess > 100) {
    displayMessage("Please Enter a number less than 101");
  } else if (numGuesses > 10) {
    displayMessage(`Game over , The random number was ${randomNum}`);
    endGame();
  } else {
    displayGuess(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess) {
  if (guess < randomNum) {
    displayMessage("Guessed Number is too low");
  } else if (guess > randomNum) {
    displayMessage("Guessed Number is too high");
  } else if (guess == randomNum) {
    displayMessage("Congrats , you guessed right number");

    endGame();
  }
}

function displayGuess(guess) {
  guessField.value = "";
  prevGuesses.innerHTML += `${guess},`;
  numGuesses++;
  remainingGuesses.innerHTML = `${11 - numGuesses}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  guessField.value = "";
  guessField.setAttribute("disabled", "");
  p.classList.add("button");
  p.innerHTML = `<h2 id="newGame">Start new game</h2>`;
  startOver.appendChild(p);

  playGame = false;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector("#newGame");

  newGameButton.addEventListener("click", (e) => {
    numGuesses = 1;
    prevGuesses.innerHTML = "";
    remainingGuesses.innerHTML = `${11 - numGuesses}`;
    guessField.removeAttribute("disabled");
    randomNum = parseInt(Math.random() * 100 + 1);
    startOver.removeChild(p);
    lowOrHigh.innerHTML = "";
    playGame = true;
  });
}
