import React from "react"
import { decode } from 'html-entities';
import { nanoid } from 'nanoid'
import "../styles.css"

export default function Question(props) {
    const incorrectOptions = props.incorrect_answers.map(opt => {
        const incClassName = props.selected_option === opt ? (props.quizOver ? "option-design option-design-incorrect":"option-design-selected"):(props.quizOver ? "option-design-light":"option-design")
        return <div 
            key={nanoid} 
            className={incClassName}
            onClick={() => props.handleSelect(props.id, opt)}
        >{decode(opt)}</div>
    })

    const cClassName = props.selected_option === props.correct_answer ? (props.quizOver ? "option-design option-design-correct":"option-design-selected"):(props.quizOver ? "option-design option-design-correct":"option-design")
    const correctOptions = <div 
            key={nanoid} 
            className={cClassName}
            onClick={() => props.handleSelect(props.id, props.correct_answer)}
        >{decode(props.correct_answer)}</div>
    
    incorrectOptions.push(correctOptions)
    const sortedAnswerElements = incorrectOptions.sort((a, b) => (
		a.props.children.localeCompare(b.props.children))
	);

    return (
        <div>
            <div className="question-design-container">
                <h3 className="question-design">{decode(props.question)}</h3>
                {props.quizOver && <div className={props.selected_option === props.correct_answer ? "dot-correct":"dot-incorrect"}>•</div>}
            </div>
            <div className="options-holder">{sortedAnswerElements}</div>
            <div className="seperator-design"></div>
        </div>
    )
}