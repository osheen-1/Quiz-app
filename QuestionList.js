import React from "react"
import { nanoid } from 'nanoid'
import Question from "./Question";
import getQuestions from "../getQuestions"
import "../styles.css"

export default function QuestionList(props) {
    const [questiondata, setQuestiondata] = React.useState([])
    const [quizOver, setQuizOver] = React.useState(false)
    const [checkAnswerButton, setCheckAnswerButton] = React.useState(false)
    const [correctAnswers, setCorrectAnswers] = React.useState(0)
    
    const allQuestionsAnswered = questiondata.every(question => question.selected_option !== "")

    React.useEffect(() => {
        getQuestions(props.quizOptions).then(questions => {
            if(questions.length === 0) {
                props.handleStart()
                props.handleNoQuestionError(false)
                return
            }
            else {
                props.handleNoQuestionError(true)
            }
            return setQuestiondata (questions.map(question => {
                return {
                    ...question,
                    id: nanoid(),
                    selected_option: "",
                    showAnswer: false
                }
            }))
        })
    }, [])

    React.useEffect(() => {
        if(questiondata.length !== 0 && allQuestionsAnswered) {
            let ca = 0
            for(let i=0; i<questiondata.length; i++) {
                if(questiondata[i].selected_option === questiondata[i].correct_answer) {
                    ca++
                }
            }
            setCorrectAnswers(ca)
            setCheckAnswerButton(true)
        }
    }, [questiondata])

    function handleSelect(questionid, answer) {
        if(!quizOver) {
            setQuestiondata(prevQuestiondata => (
                prevQuestiondata.map(question => (
                    question.id === questionid ? {...question, selected_option: answer} : question
                ))
            ))
        }
    }

    function handleCheck() {
        if(allQuestionsAnswered) {
            setQuizOver(true)
            setQuestiondata (prevQuestionData => prevQuestionData.map(question => ({...question, showAnswer:true})))
        }
    }

    function handlePlay() {
        setCheckAnswerButton(false)
        setQuizOver(false)
        props.handleStart()
    }

    const quesElement = questiondata.map(question => (
        <Question
            key={question.id} 
            id={question.id}
            type={question.type}
            category={question.category}
            question={question.question}
            correct_answer={question.correct_answer}
            incorrect_answers={question.incorrect_answers}
            selected_option={question.selected_option}
            handleSelect={handleSelect}
            showAnswer={question.showAnswer}
            quizOver={quizOver}
        />
    ))

    return (
        <div>
            <div>
                {quesElement}
                {!quizOver && <button className={checkAnswerButton?"checkAnswer":"checkAnswer-disabled"} onClick={handleCheck}>Check Answer</button>}
                {quizOver && <div className="score-card">
                    <div>You scored {correctAnswers}/{questiondata.length} correct answers</div>
                    <button className="play-again" onClick={handlePlay}>Play Again</button>
                </div>}
            </div>
        </div>
    )
}