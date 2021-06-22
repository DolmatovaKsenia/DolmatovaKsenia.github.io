const questions = [
    {
        question: "Question 1",
        answers: [
            'Hello',
            'Good morning',
            'Good evening',
            'Good buy'
        ],
        correct: 2
    },
    {
        question: "Question 2",
        answers: [
            'ght',
            'ghhyhi',
            'gi8ygyugy',
            'hgfrtyhh'
        ],
        correct: 3
    }
];

const questions = document.getElementById("questions");
const indicator = document.getElementById("indicator");
const numberOfAllQuestions = document.getElementById("number-of-questions");
const btnNext = document.getElementById("btn-next");
const btnRestart = document.getElementById("btn-restart");

const answer1 = document.querySelector(".answer1");
const answer2 = document.querySelector(".answer2");
const answer3 = document.querySelector(".answer3");
const answer4 = document.querySelector(".answer4");

const answerElements = document.querySelectorAll(".answer");

let score = 0;

const correctAnswer = document.getElementById("correct-answer");

const renderQuestions = (index) => {
    const renderAnswers = () => {

    }
    questions.innerHTML = 'ВСТАВИТЬ ИЗ HTML КУСОК'
};


const renderResults = () => {};

const renderIndicator = () => {};

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

numberOfAllQuestions.innerHTML = DATA.length; 

const load = () => {
    DATA.innerHTML = DATA[indicator].question;

    answers[1].innerHTML = questions[indicator].answers[1];
    answers[2].innerHTML = questions[indicator].answers[2];
    answers[3].innerHTML = questions[indicator].answers[3];
}

const randomQuestion = () => {
    let randomNumber = Math.floor(Math.random() * DATA.length);
}



// class Quiz
// {
//     constructor(type, questions, results)
//     {
//         this.type = type;

//         this.questions = questions;

//         this.results = results;

//         this.score = 0;

//         this.result = 0;

//         this.current_question = 0;

//     }

//     Click(index) {
//         let value = this.questions[this.current_question].Click(index);

//         this.score += value;

//         let correct = -1;

//         if (value >= 1) {
//             correct = index;
//         }
//         else {
//             for (let i = 0; i < this.questions[this.current_question].answer.length; i++)
//             {
//                 if(this.questions[this.current_question].answers[i].value >= 1)
//                {
//                    correct = i;
//                    break;
//                }
//             }
//         }
//         this.Next();
//         return correct;
//     }

//     Next()
//     {
//         this.current_question++;

//         if (this.current_question >= this.questions.length)
//         {
//             this.End();
//         }
//     }

//     End()
//     {
//         for (let i = 0; i < this.results.length; i++)
//         {
//             if (this.results[i].Check(this.score))
//             {
//                 this.result = i;
//             }
//         }
//     }
// }

// class Question{

//     constructor(text, answers)
//     {
//         this.text = text;
//         this.answer = answers;
//     }

//     Click(index)
//     {
//         return this.answers[index].value;
//     }

// }

// class Answer
// {
//     constructor(text, value)
//     {
//         this.text = text;
//         this.value = value;
//     }
// }

// class Result
// {
//     constructor(text, value)
//     {
//         this.text = text;
//         this.value = value;
//     }
//     Check(value)
//     {
//         if (this.value <= value)
//         {
//             return true;
//         }
//         else
//         {
//             return false;
//         }
//     }
// }

// const results =
// [
//    new Result("Неудовлетворительно", 0),
//    new Result("Неудовлетворительно", 1),
//    new Result("Удовлетворительно", 2),
//    new Result("Удовлетворительно", 3),
//    new Result("Хорошо", 4),
//    new Result("Хорошо", 5),
//    new Result("Отлично", 6)
// ];
 
// const quiz = new Quiz(1, questions, results);

// Update();
 
// function Update()
// {
//    if(quiz.current < quiz.questions.length)
//    {
//        headElem.innerHTML = quiz.questions[quiz.current].text;
 
//        buttonsElem.innerHTML = "";
 
//        for(let i = 0; i < quiz.questions[quiz.current].answers.length; i++)
//        {
//            let btn = document.createElement("button");
//            btn.className = "button";
 
//            btn.innerHTML = quiz.questions[quiz.current].answers[i].text;
 
//            btn.setAttribute("index", i);
 
//            buttonsElem.appendChild(btn);
//        }
      
//        pagesElem.innerHTML = (quiz.current + 1) + " / " + quiz.questions.length;
 
//        Init();
//    }
//    else
//    {
//        buttonsElem.innerHTML = "";
//        headElem.innerHTML = quiz.results[quiz.result].text;
//        pagesElem.innerHTML = "Очки: " + quiz.score;
//    }
// }
 
// function Init()
// {
//    let btns = document.getElementsByClassName("button");
 
//    for(let i = 0; i < btns.length; i++)
//    {
//        btns[i].addEventListener("click", function (e) { Click(e.target.getAttribute("index")); });
//    }
// }
 
// function Click(index)
// {
//    let correct = quiz.Click(index);
 
//    let btns = document.getElementsByClassName("button");
 
//    for(let i = 0; i < btns.length; i++)
//    {
//        btns[i].className = "button button_passive";
//    }
 
//    if(quiz.type == 1)
//    {
//        if(correct >= 0)
//        {
//            btns[correct].className = "button button_correct";
//        }
 
//        if(index != correct)
//        {
//            btns[index].className = "button button_wrong";
//        }
//    }
//    else
//    {
//        btns[index].className = "button button_correct";
//    }
 
//    setTimeout(Update, 5000);
// }