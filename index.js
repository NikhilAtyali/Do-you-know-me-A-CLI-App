var readLineSync = require("readline-sync")

var score = 0;

var highestScores = [
  {
    name: "Kiran",
    score: 5
  }
]
var questions = [
  {
    question: "Where do I live? ",
    answer: "Ichalkaranji"
  },
  {
    question: "What is my birth date? ",
    answer: "25th october"
  },
  {
    question: "What is my hobby? ",
    answer: "Reading"
  },
  {
    question: "What do I like more, sea or mountains? ",
    answer: "Mountains"
  },
  {
    question: "Who is my role modal? ",
    answer: "Netaji Bose"
  }

]

function welcome() {
  var userName = readLineSync.question("What is your name? ");
  console.log("Welcome " + userName + " Let's play a game - Do you know me?");
  console.log("______________");
}

function play(question, answer) {
  var userAnswer = readLineSync.question(question);
  if (userAnswer.toUpperCase() == answer.toUpperCase()) {
    console.log("You are right! ");
    score = score + 1;
  } else {
    console.log("You are wrong!")
  }
  console.log(score)
  console.log("______________");
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);
  }
}

function userScore() {
  console.log("Your score is: " + score);
  console.log("__________");
  console.log("Checkout high scores: ");
  highestScores.map(score => {
    console.log("High score is " + score.name + ": " + score.score);
  })
}
function highScore() {

}


welcome();
game()
userScore()