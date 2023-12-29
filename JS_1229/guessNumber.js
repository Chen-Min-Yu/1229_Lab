// Global variable to store the secret number
let secretNumber = generateRandomNumber();

// Function to generate a random number between 1 and 10
function generateRandomNumber() {
  return Math.floor(Math.random() * 10) + 1; // Generates a random number between 1 and 10
}

// Function to check the user's guess
function checkGuess() {
  // Local variables
  let userGuess = parseInt(document.getElementById("userGuess").value);
  let resultElement = document.getElementById("result");

  if (userGuess === secretNumber) {
    resultElement.textContent = "Congratulations! You guessed the correct number!";
    showImageAndPlaySound("picture2.jpeg", "music2.mp3");
    secretNumber = generateRandomNumber(); // Generate a new random number for the next round
  } else {
    resultElement.textContent = "Sorry, try again!";
    showImageAndPlaySound("picture1.jpeg", "music1.mp3");
  }

  // Clear the input field for the next guess
  document.getElementById("userGuess").value = "";
}

// Function to show image and play sound
function showImageAndPlaySound(imageSource, soundSource) {
  let imageElement = document.createElement("img");
  imageElement.src = imageSource;

  let soundElement = document.createElement("audio");
  soundElement.src = soundSource;
  soundElement.autoplay = true;

  let resultContainer = document.getElementById("result");
  resultContainer.innerHTML = "";
  resultContainer.appendChild(imageElement);
  resultContainer.appendChild(soundElement);
}
