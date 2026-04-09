// script.js

// Array to hold questions and their corresponding answer choices.
const questions = [
    {
        question: "What is your preferred climate for grape growing?",
        options: ["Cool", "Moderate", "Warm", "Hot"],
    },
    {
        question: "What type of soil do you prefer?",
        options: ["Sandy", "Clay", "Loamy", "Rocky"],
    },
    {
        question: "What is your favorite flavor profile?",
        options: ["Fruity", "Herbaceous", "Earthy", "Spicy"],
    },
    {
        question: "How would you describe your taste preference?",
        options: ["Sweet", "Dry", "Tannin", "Acidic"],
    },
    {
        question: "What body do you prefer in a wine?",
        options: ["Light", "Medium", "Full"],
    },
    {
        question: "Which pairing do you enjoy most?",
        options: ["Cheese", "Meat", "Vegetarian", "Seafood"],
    },
    {
        question: "What is your preferred wine region?",
        options: ["France", "Italy", "Spain", "USA"],
    },
    {
        question: "Do you prefer sparkling or still wines?",
        options: ["Sparkling", "Still"],
    },
    {
        question: "What is your favorite drink temperature?",
        options: ["Chilled", "Room temperature"],
    },
    {
        question: "How adventurous are you with wine?",
        options: ["Very", "Somewhat", "Not at all"],
    },
    {
        question: "What is your budget for buying wine?",
        options: ["Low", "Medium", "High"],
    },
    {
        question: "How often do you drink wine?",
        options: ["Daily", "Weekly", "Occasionally", "Rarely"],
    },
];

// Object to hold grape variety information and their scoring
const grapeVarieties = {
    "Chardonnay": [0, 1, 2, 0],
    "Merlot": [1, 2, 0, 1],
    "Cabernet Sauvignon": [2, 1, 1, 0],
    "Pinot Noir": [0, 0, 2, 2],
    "Riesling": [0, 2, 0, 0],
    "Sauvignon Blanc": [0, 0, 1, 0],
    "Malbec": [1, 0, 0, 2],
    "Syrah": [2, 0, 1, 0],
    "Tempranillo": [1, 2, 0, 1],
    "Zinfandel": [0, 1, 1, 2],
    "Barbera": [2, 1, 0, 0],
    "Grenache": [0, 2, 2, 1],
};

// Function to calculate scores based on answers
function calculateScores(answers) {
    let scores = {};
    Object.keys(grapeVarieties).forEach(variety => {
        scores[variety] = 0;
        for (let i = 0; i < answers.length; i++) {
            scores[variety] += grapeVarieties[variety][i];
        }
    });
    return scores;
}

// Function to get the result based on scores
function getResult(scores) {
    let maxScore = -1;
    let bestVariety = "";
    Object.keys(scores).forEach(variety => {
        if (scores[variety] > maxScore) {
            maxScore = scores[variety];
            bestVariety = variety;
        }
    });
    return bestVariety;
}

// Function to display the results to the user
function displayResults(variety) {
    const resultContainer = document.getElementById('result');
    resultContainer.innerHTML = `Your best match is: ${variety}`;
}

// Example of how to use these functions (this part would normally be executed based on user interaction)
const userAnswers = [1, 0, 2, 1, 0, 3, 0, 1, 0, 2, 1, 3]; // Sample input from user
const scores = calculateScores(userAnswers);
const bestMatch = getResult(scores);
displayResults(bestMatch);