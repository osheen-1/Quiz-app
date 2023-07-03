export default function getQuestions(quizOptions) {
    let amountParam = ""
    let categoryParam = ""
    let difficultyParam = ""
    let typeParam = ""
    if(quizOptions.amount >= 5 && quizOptions.amount <= 50) {
        amountParam = `amount=${quizOptions.amount}`
    }
    if(quizOptions.category !== "") {
        categoryParam = `&category=${quizOptions.category}`
    }
    if(quizOptions.difficulty !== "") {
        difficultyParam = `&difficulty=${quizOptions.difficulty}`
    }
    if(quizOptions.type !== "") {
        typeParam = `&type=${quizOptions.type}`
    }
    let url = `https://opentdb.com/api.php?${amountParam}${categoryParam}${difficultyParam}${typeParam}`
    return fetch(url)
        .then(res => res.json())
        .then(data => data.results)
};