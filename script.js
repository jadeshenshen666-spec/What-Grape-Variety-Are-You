// Quiz JavaScript Code for Grape Variety

// Question data: an array of question objects, each with a question, possible answers, and correct answer.
const questions = [
    {
        question: "Which grape is used in making red wine?",
        answers: ["Chardonnay", "Merlot", "Riesling", "Cabernet Sauvignon"],
        correct: "Cabernet Sauvignon"
    },
    {
        question: "What grape variety is known for its high acidity?",
        answers: ["Malbec", "Sauvignon Blanc", "Zinfandel", "Shiraz"],
        correct: "Sauvignon Blanc"
    },
    {
        question: "Which grape is commonly used to make Champagne?",
        answers: ["Tempranillo", "Pinot Noir", "Grenache", "Cabernet Franc"],
        correct: "Pinot Noir"
    }
];

// Function to display questions and handle scoring
function displayQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        // Display question
        console.log(`Q${index + 1}: ${q.question}`);
        q.answers.forEach((answer, i) => {
            console.log(`${i + 1}: ${answer}`);
        });
        // Assume user answers via some input method
        let userAnswer = prompt(`Your answer for Q${index + 1}:`);
        if (userAnswer === q.correct) {
            console.log("Correct!");
            score++;
        } else {
            console.log(`Wrong! The correct answer is ${q.correct}.`);
        }
    });

    // Display final score
    console.log(`Your final score is: ${score}/${questions.length}`);
}

displayQuiz();
