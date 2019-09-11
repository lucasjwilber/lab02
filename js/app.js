'use strict'

var randomNumber = Math.round(Math.random() * 10);
var quizScore = 0;
var guessingGame = [
    //index 0 = questions
    [`Does an 8oz can of Redbull have more caffeine than an 8oz cup of coffee?`,
        `Are there 3 different characters you can use to encapsulate strings?`,
        `Would the following code give an error? \n alert('I'm eating an apple');`,
        `Yes or no: I was in the army.`,
        `Do I own a cat?`,
        `Guess a number between 1 and 10. You have 4 chances!`,
        `What is my favorite color?`,
    ],
    //index 1 = correct answers shorthand
    [`n`,
        `y`,
        `y`,
        `n`,
        `n`,
        randomNumber,
        `grey`,
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
        `placeholder`,
        `placeholder`,
    ],
];

var visitorName = prompt("Welcome to my site! Who is this?");
alert(`Welcome to my site ${visitorName}. Let's play a guessing game.`);

//questions loop
for (var i = 0; i < guessingGame[0].length; i++) {

    //change index 3 placeholders to user's entries
    guessingGame[3][i] = prompt(guessingGame[0][i]);

    //if user entered a string, lowercase it for simpler comparisons later
    if (typeof (guessingGame[3][i] === 'string')) {
        guessingGame[3][i] = guessingGame[3][i].toLowerCase();
    }
    if ((guessingGame[3][i] === guessingGame[1][i])
        || (guessingGame[3][i] === guessingGame[2][i])
        && (i !== 5)) {
        alert(`Correct!`);
        quizScore++;

        //question 6, guess a number
    } else if (i === 5) {
        var attempts = 0;
        while ((guessingGame[3][5] !== guessingGame[1][5])
            && (attempts <= 4)) {
            guessingGame[3][5] = prompt(guessingGame[0][5]);
            attempts++;
        }
        if (attempts === 4) {
            alert(`Incorrect :(`);
        } else {
            alert(`Correct!`);
            quizScore++;
        }

        //question 7;
    } else {
        alert(`Incorrect :(`);
    }
}