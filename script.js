document.addEventListener('DOMContentLoaded', function() {
const quizData = [
    {
        question: "What is the largest ocean on earth?",
        a: "Indian",
        b: "Pacific",
        c: "Atlantic",
        d: "Arctic",
        correct: "b",
    },
    {
    
    question: "At what temperature Fahrenheit does water boil?",
        a: "32",
        b: "149",
        c: "220",
        d: "212",
        correct: "d",
    },
    {

    question: "The Great Lakes lie along the Canada/US border. How many are they?",
        a: "5", 
        b: "4", 
        c: "7",
        d: "3",
        correct: "a",
    },
    {
        question: "What were the last two states to join the United States?",
        a: "Hawaii and the Philippines",
        b: "Puerto Rico and Alaska",
        c: "Alaska and Hawaii",
        d: "Hawaii and New Mexico",
        correct: "c",
    },
    {
        question: "What year was javascript launched in?",
        a: "1996",
        b:"1995",
        c:"1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "Who is most often credited with the discovery that lightning was a form of electricity, using a key?",
        a: "Benjamin Franklin",
        b:"Sir Thomas Moore",
        c:"Albert Einstein",
        d: "Isaac Newton",
        correct: "a",
    },
    {
        question: "Who was the Greek goddess associated with the moon?",
        a: "Neptune",
        b: "Apollo",
        c: "Artemis",
        d: "Uranus",
        correct: "c",
    },
    {
        question: "What was the unit of currency in Poland at the time of the second World War?",
        a: "Ruble",
        b: "Lek",
        c: "Schilling",
        d: "Zloty",
        correct: "d", 
    },
    {
        question: "Dracula suffers from staurophobia, the fear of ______?",
        a: "Garlic",
        b: "Crucifixes",
        c: "Daylight",
        d: "Mirrors",
        correct: "b",
    },
    {
        question: "Which chess piece is of the lowest relative value?",
        a: "Castle",
        b: "Knight",
        c: "Pawn",
        d: "Bishop",
        correct: "c", 
    },
    {
        question: "Although played in many countries, which country is home to the lawn game of bocce ball?",
        a: "Canada",
        b: "Italy",
        c: "Japan",
        d: "Somalia",
        correct: "b", 
    },
    {
        question: "In darts, what's the most points you can score with a single throw?",
        a: "60",
        b: "50",
        c: "20",
        d: "100",
        correct: "a",  
    },
    {
        question: "Who said, “Live as if you were to die tomorrow. Learn as if you were to live forever?”",
        a: "Mahatama Gandi",
        b: "David Hume",
        c: "Benjamin Franklin",
        d: "Walt Disney",
        correct: "a",   
    },
    {
        question: "Which of these is NOT caused by a virus?",
        a: "Smallpox",
        b: "Herpes",
        c: "Measles",
        d: "Cholera",
        correct: "d",
           
    },
    {
        question: "Which of these is NOT a sign of the Zodiac?",
        a: "Aquarius",
        b: "Leo",
        c: "Orion",
        d: "Taurus",
        correct: "c", 
    }

];

const quiz = document.getElementById("quiz");
const answerELs = document.querySelectorAll(".answer");
const questionEL = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];
    questionEL.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
let answer = undefined;

answerELs.forEach((answerEL) => {
    if (answerEL.checked){
        answer = answerEL.id;
    }
});

return answer;

}

function deselectAnswers(){
    answerELs.forEach((answerEL) => {
        answerEL.checked = false;
    });


}

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    
    console.log(answer);
    
    
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
    
    currentQuiz++;
    if (currentQuiz < quizData.length){
            loadQuiz();
    }else{
           quiz.innerHTML = `<h2>You correctly answered ${score}/${quizData.length} questions.</h2> <button onclick= "location.reload()">Retake Quiz</button>`;
    }
}

});

});

