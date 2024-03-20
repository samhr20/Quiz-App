let questions = [
    {
        question: " What is the correct way to declare a variable in JavaScript?",
        answers: [
            { answer: "var myVar = 10 ;", correct: false },
            { answer: "let myVar = 10 ;", correct: false },
            { answer: "const myVar = 10 ;", correct: false },
            { answer: "All of the above", correct: true }
        ]
    },
    {
        question: "Which of the following is not a valid data type in JavaScript?",
        answers: [
            { answer: "String", correct: false },
            { answer: "Number", correct: false },
            { answer: "Boolean", correct: false },
            { answer: "Character", correct: true }
        ]
    },
    {
        question: "What does the '==='operator do in JavaScript?",
        answers: [
            { answer: "Compares two values for equality, ignoring data types", correct: false },
            { answer: "Compares two values for equality, including data types", correct: true },
            { answer: "Assigns a value to a variable", correct: false },
            { answer: "None of the above", correct: false }
        ]
    },
    {
        question: "Which function is used to print a message to the console in JavaScript?",
        answers: [
            { answer: "console.log()", correct: true },
            { answer: "print()", correct: false },
            { answer: "log()", correct: false },
            { answer: "message()", correct: false }
        ]
    },
    {
        question: "Which method is used to add an element to the end of an array in JavaScript?",
        answers: [
            { answer: "push()", correct: true },
            { answer: "pop()", correct: false },
            { answer: "shift()", correct: false },
            { answer: "unshift()", correct: false }
        ]
    }
]
const ques = document.getElementById("question");
const answerBox = document.querySelector(".answer-box");

let currentQuestionIndex = 0;
let score = 0;

function start() {
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    ques.innerHTML = questionNumber + ". " + currentQuestion.question;

    answerBox.innerHTML = '';

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.answer;
        button.classList.add("btn");
        button.onclick = function () {
            handleAnswer(answer.correct);
        };
        answerBox.appendChild(button);
    });
}

function handleAnswer(iscorrect) {
    if (iscorrect) {
        score++;
    }

    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        showQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    ques.innerHTML = "Your Score: " + score + " out of " + questions.length;
    answerBox.style.display = "none";
}

start();