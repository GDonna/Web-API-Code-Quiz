var startQuiz = document.querySelector("showbutton");


const showButton = document.getElementById("showButton");
const hiddenInfo = document.getElementById("hiddenInfo");
const subText = document.getElementById("sub")

var timeEl = document.querySelector(".time");

var secondsLeft = 60;
var timerInterval;
function setTime(){
  secondsLeft --
  timeEl.textContent=secondsLeft
}

showButton.addEventListener("click", function() {
  hiddenInfo.style.display = "block",
  showButton.style.display = "none";
  subText.style.display = "none";
  timerInterval=setInterval(setTime, 1000)
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
        answer: 3
      },
      
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionContainer = document.getElementById("question-container");
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
 

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
    } else {
      secondsLeft -= 10;
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
    clearInterval(timerInterval)
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
    nameInput.textContent = "";
  }
  
  var scoreHolderArray = JSON.parse(localStorage.getItem("Score"))||[]
  console.log('scoreHolderArray', scoreHolderArray)

  var storedScoreHolder = localStorage.getItem('scoreHolderArray');
  
  var retrievedArray = JSON.parse(storedScoreHolder);
  
  console.log(retrievedArray); 

  function saveData() {
    console.log('scoreHolderArray', scoreHolderArray)

    playerName = nameInput.value.trim();
    
        var scoreHolder = {
          name: playerName,
          score: scoreElement.textContent,
        }
    
      scoreHolderArray.push(scoreHolder);

      localStorage.setItem("Score", JSON.stringify(scoreHolderArray))

      for (const obj of scoreHolderArray){
        if (obj.name!==playerName){
            const li=document.createElement("li")
            li.textContent=obj.name + ": " +obj.score;
            displayHighScore.append(li)
            }
      }

      var newPlayer = scoreHolderArray.find(function(obj){
        return obj.name===playerName
      })
      
      const li=document.createElement("li")
      li.textContent=newPlayer.name + ": " +newPlayer.score;
      displayHighScore.prepend(li);
  }

  var displayHighScore = document.getElementById("displayScore")

  submitButton.onclick = saveData;
