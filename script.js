// script.js
const questions = [
    {
        question: "What comes next in the sequence: 2, 4, 8, 16?",
        options: ["24", "32", "22", "18"],
        answer: 1
    },
    {
        question: "What is 9 + 10?",
        options: ["19", "20", "21", "22"],
        answer: 0
    },
    {
        question: "Which shape has three sides?",
        options: ["Square", "Triangle", "Circle", "Rectangle"],
        answer: 1
    },
    {
        question: "Which of these is a prime number?",
        options: ["4", "6", "8", "11"],
        answer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;
let selectedAnswer = null;

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    document.getElementById("question").innerText = currentQuestion.question;
    document.getElementById("option0").innerText = currentQuestion.options[0];
    document.getElementById("option1").innerText = currentQuestion.options[1];
    document.getElementById("option2").innerText = currentQuestion.options[2];
    document.getElementById("option3").innerText = currentQuestion.options[3];
    document.getElementById("next-btn").style.display = "none";  // Hide the next button until an option is selected
    selectedAnswer = null;  // Reset selected answer for each new question
}

function selectOption(index) {
    selectedAnswer = index;  // Store the selected answer
    document.getElementById("next-btn").style.display = "block";  // Show the next button once an option is selected
}

function nextQuestion() {
    const correctAnswer = questions[currentQuestionIndex].answer;
    
    // Check if the selected answer is correct and update the score before moving to the next question
    if (selectedAnswer === correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        loadQuestion();  // Load the next question if available
    } else {
        showResult();  // If no more questions, show the result
    }
}

function showResult() {
    document.getElementById("quiz-content").style.display = "none";  // Hide the quiz content
    document.getElementById("result-container").style.display = "block";  // Show the result container
    document.getElementById("score-display").innerText = "Your score is: " + score + " out of " + questions.length;
}

function restartQuiz() {
    currentQuestionIndex = 0;  // Reset the question index
    score = 0;  // Reset the score
    document.getElementById("quiz-content").style.display = "block";  // Show the quiz content
    document.getElementById("result-container").style.display = "none";  // Hide the result container
    loadQuestion();  // Load the first question
}

window.onload = loadQuestion;
