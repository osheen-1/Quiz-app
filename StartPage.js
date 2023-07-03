import React from "react"
import "../styles.css"

export default function StartPage(props) {
    return (
        <div className="start-page-design">
            <h1 className="title">Quizzical</h1>
            <p className="description">Good Luck!!</p>
            <div className="form-tag">
            <div className="form-element">Amount:</div>
                <select id="amount" value={props.amount} name="amount" onChange={props.handleChange}>
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    <option value="40">40</option>
                    <option value="45">45</option>
                    <option value="50">50</option>
                </select>
            </div>
            <div className="form-tag">
                <div className="form-element">Category:</div>
                <select id="category" value={props.category} name="category" onChange={props.handleChange}>
                    <option value="">Any Category</option>
                    <option value="9">General Knowledge</option>
                    <option value="10">Entertainment: Book</option>
                    <option value="11">Entertainment: Film</option>
                    <option value="12">Entertainment: Music</option>
                    <option value="13">Entertainment: Musical & Theatres</option>
                    <option value="14">Entertainment: Telivision</option>
                    <option value="15">Entertainment: Video Games</option>
                    <option value="16">Entertainment: Board Games</option>
                    <option value="17">Science & Nature</option>
                    <option value="18">Science: Computers</option>
                    <option value="19">Science: Mathematics</option>
                    <option value="20">Mythology</option>
                    <option value="21">Sports</option>
                    <option value="22">Geography</option>
                    <option value="23">History</option>
                    <option value="24">Politics</option>
                    <option value="25">Art</option>
                    <option value="26">Celebrities</option>
                    <option value="27">Animals</option>
                    <option value="28">Vehicles</option>
                    <option value="29">Entertainment: Comics</option>
                    <option value="30">Science: Gadgets</option>
                    <option value="31">Entertainment: Japanese Anime & Manga</option>
                    <option value="32">Entertainment: Cartoon & Animations</option>
                </select>
            </div>
            <div className="form-tag">
                <div className="form-element">Difficulty:</div>
                <select id="difficulty" value={props.difficulty} name="difficulty" placeholder="Any Difficulty" onChange={props.handleChange}>
                    <option value="">Any Difficulty</option>
                    <option value="easy">Easy</option>
                    <option value="medium">Medium</option>
                    <option value="hard">Hard</option>
                </select>
            </div>
            <div className="form-tag">
                <div className="form-element">Type: of Questions:</div>
                <select id="type" value={props.type} name="type" placeholder="Any Type" onChange={props.handleChange}>
                    <option value="">Any Type</option>
                    <option value="multiple">Multiple</option>
                    <option value="boolean">True / False</option>
                </select>
            </div>
            {!props.noQuestionError && <div className="error">Oops!! We couldn't find the question with these options!</div>}
            <button onClick={props.handleStart}>Start Quiz</button>
        </div>
    )
}