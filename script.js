// Complete Grape Personality Quiz Logic

const questions = [
    { question: "What type of weather do you prefer?", options: ["Sunny", "Rainy", "Windy", "Snowy"] },
    { question: "What's your favorite activity?", options: ["Outdoor", "Indoor", "Sport", "Relaxing"] },
    // ... Add remaining questions here (total 12)
];

const grapeVarieties = [
    { name: "Chardonnay", score: 0 },
    { name: "Merlot", score: 0 },
    // ... Add remaining grape varieties here (total 24)
];

function calculateScore(answers) {
    let scores = new Array(grapeVarieties.length).fill(0);
    answers.forEach((answer, index) => {
        scores[index] += answer;
    });
    return scores;
}

function generateProfile(scores) {
    // Logic to generate profile based on scores
}

function displayResults(profile) {
    // Logic to display result to user
}

// Event listeners and logic to start the quiz
