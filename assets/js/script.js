var startQuiz = document.querySelector("showbutton");

const showButton = document.getElementById("showButton");
const hiddenInfo = document.getElementById("hiddenInfo");
const subText = document.getElementById("sub")

showButton.addEventListener("click", function() {
    hiddenInfo.style.display = "block",
    showButton.style.display = "none";
    subText.style.display = "none";
});

const quizData = [
      {
      question: "What is the name of the method that is used to insert a new node as the last child of the parent?",
      options: ["console.log()", ".appendChild", ".setAttribute", ".text"],
      answer: 2
       },
      {
      question: "What do we use to store groups of data in a single variable?",
      options: ["Arrays", "console.log()", "Strings", "NaN"],
      answer: 1
      },
      {
        question: "A pseudo-class is used to define a special state of an element. Choose the correct script:",
        options: ["button:hover", "element.text", "background-color:", "mb-6"],
        answer: 1
      },
      {
        question: "How do you prevent default action of the DOM?",
        options: ["submitEl.addEventListener", "console.log(event)", "Yell at it", "event.preventDefault()"],
        answer: 4
      },
      
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
 
  
  
//This is the function to set the timer
// // Selects element by class
// var timeEl = document.querySelector("time");

// var secondsLeft = 60;
// function setTime() {
//   // Sets interval in variable
//   var timerInterval = setInterval(function() {
//     secondsLeft--;
//     timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

//     if(secondsLeft === 0) {
//       // Stops execution of action at set interval
//       clearInterval(timerInterval);
//       // Calls function to create and append image
//       // sendMessage();
//     }

//   }, 1000);
// }

  // Load initial question
  loadQuestion();
  
  function loadQuestion() {
    const quizQuestion = quizData[currentQuestion];
  
    questionElement.textContent = quizQuestion.question;
    optionsElement.innerHTML = "";
  
    quizQuestion.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.textContent = option;
      button.addEventListener("click", () => {
        checkAnswer(index);
      });
      optionsElement.appendChild(button);
    });
  }
  
  function checkAnswer(selectedOption) {
    const quizQuestion = quizData[currentQuestion];
  
    if (selectedOption === quizQuestion.answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  const scoreContainer = document.getElementById("score-card");
    const scoreElement = document.getElementById("score");
    const nameInput = document.getElementById("name-input");
    const submitButton = document.getElementById("submit-button");

  function showResults() {
    questionContainer.innerHTML = `
      <h2>Quiz completed!</h2>
      <p>
      Your score: ${score} / ${quizData.length}</p>
    `;
  }

  function checkAnswer(selectedOption) {
    const quizQuestion = quizData[currentQuestion];
  
    if (selectedOption === quizQuestion.answer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showScoreForm();
    }
  }
  
  function showScoreForm() {
    questionContainer.style.display = "none";
    scoreContainer.style.display = "block";
    scoreElement.textContent = score;
  }
  
  // Need an object to hold initials and score
  const scoreHolder = {
    name: nameInput,
    score: scoreElement.value,
  }
  var playerName
  var scoreHolderArray =[]
  // You need an array to push objects to
  scoreHolderArray.push(scoreHolder)
  // Then JSON.strigify the array into your local storage

  // A function that would grab data from the local storage // Needs to be parsed
// Retrieve the JSON string from local storage
var storedScoreHolder = localStorage.getItem('scoreHolderArray');
// Convert the JSON string back to an array
var retrievedArray = JSON.parse(storedScoreHolder);

console.log(retrievedArray); 
  submitButton.addEventListener("click", () => {
    playerName = nameInput.value.trim();
  
    if (playerName !== "") {
      saveHighScore("Score", JSON.stringify(scoreHolderArray))
    }
  });
  
  function saveHighScore() {
    localStorage.setItem("scoreHolderArray", JSON.stringify(scoreHolderArray));
  }
  
  
  
  
  