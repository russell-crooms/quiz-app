const questions =  [
    {
        question: "Which animal is the largest in the world?", 
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue Whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    }, 
    {
        question: "Which is the smallest country in the world?", 
        answers: [
            { text: "Vatican City", correct: true },
            { text: "Bhutan", correct: false },
            { text: "Nepal", correct: false },
            { text: "Sri Lanka", correct: false },
        ]
    },
    {
        question: "Which is the largest desert in the world?", 
        answers: [
            { text: "Kalahari", correct: false },
            { text: "Gobi", correct: true },
            { text: "Sahara", correct: false },
            { text: "Antartica", correct: true },
        ]
    },
    {
        question: "Which is the smallest continent in the world?", 
        answers: [
            { text: "Asia", correct: false },
            { text: "Australia", correct: true },
            { text: "North America", correct: false },
            { text: "Africa", correct: false },
        ]
    },

];

const questionElement = document.getElementById("question"); 
const answerButton = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0; 

function startQuiz() {
    currentQuestionIndex = 0; 
    score = 0; 
    nextButton.innerHTML = "NEXT"; 
    showQuestion(); 
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex]; 
    let questionNo = currentQuestionIndex + 1; 
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
}