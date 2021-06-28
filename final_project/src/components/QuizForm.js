import React, {Component} from 'react';
import Question from './Question';
import Answer from './Answer';
import './QuizForm.css';
export default class QuizForm extends Component {

    // initiating the local state
    state = {
        quiestions: {
            1: 'Вопрос номер 1 ? (правильный 1)',
            2: 'Вопрос номер 2 ? (правильный 2)',
            3: 'Вопрос номер 3 ? (правильный 3)',
            4: 'Вопрос номер 4 ? (правильный 4)',
            5: 'Вопрос номер 5 ? (правильный 1)'
        },
        answers: {
            1: {
                1: 'Ответ 1',
                2: 'Ответ 2',
                3: 'Ответ 3',
                4: 'Ответ 4'
            },
            2: {
                1: 'Ответ 1',
                2: 'Ответ 2',
                3: 'Ответ 3',
                4: 'Ответ 4'
            },
            3: {
                1: 'Ответ 1',
                2: 'Ответ 2',
                3: 'Ответ 3',
                4: 'Ответ 4'
            },
            4: {
                1: 'Ответ 1',
                2: 'Ответ 2',
                3: 'Ответ 3',
                4: 'Ответ 4'
            },
            5: {
                1: 'Ответ 1',
                2: 'Ответ 2',
                3: 'Ответ 3',
                4: 'Ответ 4'
            }
        },
        correctAnswers: {
            1: '1',
            2: '2',
            3: '3',
            4: '4',
            5: '1'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 0,
        score: 0,
        userName: ""
    }

    // this method that checks the correct answer
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer === correctAnswers[step]){
            this.setState({
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            });
        }else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
    }
   // this method sets user name

   getUserName = userNameResult => {
    const {userName} = this.state;
    this.setState({userName: userNameResult});

   }

    // this method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    handleChange(event) {
        const {userName} = this.state;
        this.setState({userName: event.target.value});
    }

    input1Change = (e) => {
        let next = this.state;
        next.value = e.target.value;
        next.changed = next.value !== next.valueOld;
        next.length = e.target.value.length;
        this.setState(next);
      }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score, userName } = this.state;
        return(
            <div className="Content">
                {step == 0 ?    
                    (<div className="introductionPage">
                        <h1>Давайте познакомимся!</h1>
                        <input type="text" name="user" placeholder="Введите Ваше имя"  ref={ref => this.input1 = ref}
                            onChange={this.input1Change} value={this.state.value}/><br/>
                        <br/>
                        <button
                        className="NextStep"
                        onClick={(props) => {this.getUserName(this.state.value);this.nextStep(step)}}>Далее</button>
                     </div>)
                    :
                    step <= Object.keys(quiestions).length ?
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <br/>
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Далее</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>{userName}, Вы закончили викторину!</h1>
                            <p>Вы набрали : {score} из {Object.keys(quiestions).length} балл(ов)</p>
                            <p>Спасибо!</p>
                        </div>
                    )
                }
            </div>
        );
    }
}
