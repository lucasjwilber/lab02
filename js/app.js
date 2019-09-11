'use strict'

var quizScore = 0;
var guessingGame = [
    //index 0 = questions
    [`Does an 8oz can of Redbull have more caffeine than an 8oz cup of coffee?`,
        `Are there 3 different characters you can use to encapsulate strings?`,
        `Would the following code give an error? \n alert('I'm eating an apple');`,
        `Yes or no: I was in the army.`,
        `Do I own a cat?`,
    ],
    //index 1 = correct answers shorthand
    [`n`,
        `y`,
        `y`,
        `n`,
        `n`,
    ],
    //index 2 = correct answers full
    [`no`,
        `yes`,
        `yes`,
        `no`,
        `no`,
    ],
    //index 3 = user responses
    [`placeholder`,
        `placeholder`,
        `placeholder`,
        `placeholder`,
        `placeholder`,
    ],
];

var visitorName = prompt("Welcome to my site! Who is this?");
alert(`Welcome to my site ${visitorName}. Let's play a guessing game.`);

//questions loop
for (var i = 0; i < 5; i++) {

    //rewrite index 3 placeholders to user's entries
    guessingGame[3][i] = prompt(guessingGame[0][i]);

    //if user entered a string, lowercase it for simpler comparisons later
    if (typeof (guessingGame[3][i] === 'string')) {
        guessingGame[3][i] = guessingGame[3][i].toLowerCase();
    }
    
    //check for correct answer
    if ((guessingGame[3][i] === guessingGame[1][i])
        || (guessingGame[3][i] === guessingGame[2][i])
        && (i !== 5)) {
        alert(`Correct!`);
        quizScore++;
        console.log(`Question; ${guessingGame[0][i]}. Correct answer: ${guessingGame[2][i]} or ${guessingGame[1][i]}. User answered with ${guessingGame[3][i]}`);
    } else {
        alert(`Incorrect :(`);
    }
}

//question 6
var randomNumber = Math.round(Math.random() * 10);
var numberGuess = 0; //placeholder value
var attempts = 0;
do {
    numberGuess = prompt(`Guess a number between 1 and 10. You have 4 tries to get it right!`);
    attempts++;
    console.log(`User guessed ${numberGuess}. Correct answer is ${randomNumber}. Attempt ${attempts}/4`);
} while (numberGuess != randomNumber && attempts < 4);
if (numberGuess == randomNumber) {
    alert(`Nice! You got it.`);
} else {
    alert(`Nice try, but the answer was ${randomNumber}`);
}