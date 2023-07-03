import React from "react"
import "./styles.css"
import StartPage from "./Components/StartPage"
import QuestionList from "./Components/QuestionList"


export default function App() {
    const [started, setStarted] = React.useState(false)
    const [noQuestionError, setNoQuestionError] = React.useState(true)
    const [quizOptions, setQuizOptions] = React.useState({amount: 5, category: "", difficulty: "", type: ""})

    function handleChange(event) {
        const {name, value} = event.target
        setQuizOptions(prevQuizOptions => {
            return {
                ...prevQuizOptions,
                [name]: value
            }
        })
    }

    function handleNoQuestionError(temp) {
        setNoQuestionError(temp)
    }

    function handleStart() {
        setStarted(prevStarted => !prevStarted)
    }

    return (
        <main>
            {!started && 
                <StartPage 
                    handleStart={handleStart} 
                    amount={quizOptions.amount}
                    category={quizOptions.category} 
                    difficulty={quizOptions.difficulty} 
                    type={quizOptions.type}
                    handleChange={handleChange}
                    noQuestionError={noQuestionError}
                />
            }
            {
                started && 
                <div>
                    <QuestionList 
                        quizOptions={quizOptions}
                        handleStart={handleStart}
                        handleNoQuestionError={handleNoQuestionError}
                    />
                </div>
            }
        </main>
    )
}