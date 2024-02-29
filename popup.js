
// Start Session button click event handler
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('startSessionButton').addEventListener('click', startSession);
});

// Function to start the session
function startSession() {
  // Start the timer
  startTimer();
  console.log('haha')

  
}

function startTimer() {
  var startTime = Date.now();
  var timerDiv = document.getElementById('timer');

  function updateTimer() {
    var currentTime = Date.now();
    var elapsedTime = currentTime - startTime;
    var seconds = Math.floor(elapsedTime / 1000);
    var minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;

    // Format minutes and seconds
    var formattedTime = pad(minutes) + ":" + pad(seconds);

    // Update timer display
    timerDiv.textContent = formattedTime;
  }

  // Update the timer every second
  var timerInterval = setInterval(updateTimer, 1000);

  // Add leading zero if needed
  function pad(num) {
      return num < 10 ? "0" + num : num;
  }
}

// Function to stop the timer
function stopTimer() {
  // Stop the timer logic here
}

// Function to handle break session
function handleBreakSession() {
  // Logic for break session here
}

// Function to continue learning
function continueLearning() {
  // Logic for continuing learning here
}


