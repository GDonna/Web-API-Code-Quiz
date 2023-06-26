var startQuiz = document.querySelector("showbutton");

const showButton = document.getElementById("showButton");
const hiddenInfo = document.getElementById("hiddenInfo");

showButton.addEventListener("click", function() {
    hiddenInfo.style.display = "block",
    showButton.style.display = "none";
});

const quizData = [
    {
      question: "Question 1",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: 2
    },
    {
      question: "Question 2",
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      answer: 1
    },
    {
        question: "Question 2",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: 1
      },
    
      {
        question: "Question 2",
        options: ["Option 1", "Option 2", "Option 3", "Option 4"],
        answer: 1
      },
      
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  
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
    const nameInput = document.getElementById("name");
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
  

//   submitButton.addEventListener("click", () => {
//     playerName = nameInput.value.trim();
  
//     if (playerName !== "") {
//       saveHighScore(playerName, score);
//       // Redirect to high score page or perform other actions
//     }
//   });
  
  function saveHighScore(name, score) {
   console.log (nameInput, scoreElement);
  }
  
  
  
  
  