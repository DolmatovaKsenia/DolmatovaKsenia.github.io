const question = document.getElementById("question");
let indicator;
let indexPage = 0;
const numberOfAllQuestions = document.getElementById("number-of-questions");
const btnNext = document.getElementById("btn-next");

const option1 = document.querySelector(".option1");
const option2 = document.querySelector(".option2");
const option3 = document.querySelector(".option3");
const option4 = document.querySelector(".option4");

const answerElements = document.querySelectorAll(".option");

let score = 0;

const correctAnswer = document.getElementById("correct-answer");
const answerTracker = document.getElementById("answer-tracker");

const questions = [
    {
        question: "Зачем?",
        options: [
            'Hello',
            'Good morning',
            'Good evening',
            'Good buy'
        ],
        correctAnswer: 2
    },
    {
        question: "Почему?",
        options: [
            'ght',
            'ghhyhi',
            'gi8ygyugy',
            'hgfrtyhh'
        ],
        correctAnswer: 3
    },
    {
        question: "hfghukfjk",
        options: [
            'fvvef',
            'rwegver',
            'wegtrttwe',
            'rtbdrtgtgber'
        ],
        correctAnswer: 2
    },
    {
        question: "wrahetwheq",
        options: [
            'fvgSVSAD',
            'dfahehe',
            'hdfshjnsdjhsdrt',
            'dfhtetesnn'
        ],
        correctAnswer: 4
    },
    {
        question: "fggsdbdb",
        options: [
            'asdg',
            'fsdgaefsdb',
            'greshgrdhweah',
            'thgetshehwdwtthe'
        ],
        correctAnswer: 2
    },
    {
        question: "dgwerahwe",
        options: [
            'rgfwerg',
            'fsadhbarefhbaweq',
            'dfhanhafhe',
            'dgshdshbg'
        ],
        correctAnswer: 3
    },
    {
        question: "rsabhfsdahet",
        options: [
            'egeragergeq',
            'gfsagras',
            'grergre',
            'fdheddga'
        ],
        correctAnswer: 1
    },
    {
        question: "fhefafgfs",
        options: [
            'sfdgsagesfg',
            'sdfbhfdabhfsbh',
            'safgfaghrb',
            'sfhwfahgfw'
        ],
        correctAnswer: 2
    },
    {
        question: "ftbhsrtgdn",
        options: [
            'ggsdfbsbsdf',
            'fgbdfbdsbdg',
            'grasegbdfbh',
            'grergegherh'
        ],
        correctAnswer: 3
    },
    {
        question: "htgfuhfjkfuigy",
        options: [
            'fdghregwerg',
            'rwgregrwegergerg',
            'fsdgesrgretge',
            'rfgrdgregreg'
        ],
        correctAnswer: 4
    }
];

quiz.addEventListener("change", (event) => {
    
});

quiz.addEventListener("click", (event) => {
    if (event.target.classList.contains(btn-next)) {
        console.log("Next");
    }
    if (event.target.classList.contains(btn-restart)) {
        console.log("Restart");
    }
});

numberOfAllQuestions.innerHTML = questions.length; 

const load = () => {
    questions.innerHTML = questions[indexPage].question;

    option1.innerHTML = questions[indicator].options[0];
    option2.innerHTML = questions[indicator].options[1];
    option3.innerHTML = questions[indicator].options[2];
    option4.innerHTML = questions[indicator].options[3];

    indicator.innerHTML = indicator + 1;
    indicator++;
}

let completedAnswers = [];

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * questions.length);
    let hit = false;

    if (indexPage == questions.length) {
        quizEnd();
    }
    else {
        if (completedAnswers.length > 0) {
            completedAnswers.forEach(item => {
                if (item == randomNumber) {
                    hit = true;
                }
            });
            if (hit) {
                randomQuestion();
            }
            else {
                indicator = randomNumber;
                load();
            }
        };
        if (completedAnswers == 0) {
            indicator = randomNumber;
            load();
        }
    };
    completedAnswers.push(indicator);
};

const quizEnd = () => {
    console.log("Конец игры");
}

window.addEventListener('load', () => {
    randomQuestion();
})