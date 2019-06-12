
// Select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timeGauge");
const progress= document.getElementById("progress");
const scoreDiv= document.getElementById("score");

//Create questions
let questions = [
  {
    question : "When was the first \"Yo mama\" joke?",
    // IMAGE
    choiceA : "2012",
    choiceB : "1500",
    choiceC : "3500 B.C.E.",
    choiceD : "300"
  },{
    question : "What year did the internet come out?",
    //IMAGE
    choiceA : "1983",
    choiceB : "1990",
    choiceC : "2000",
    choiceD : "1974"
  },{
    question : "How long can snails sleep?",
    //IMAGE
    choiceA : "6 months",
    choiceB : "4 days",
    choiceC : "3 years",
    choiceD : "2 hours"
  },{
    question : "What is 5+3*9?",
    //IMAGE
    choiceA : "43",
    choiceB : "32",
    choiceC : "39",
    choiceD : "27"
  }
]
