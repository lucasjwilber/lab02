'use strict'
//0 = questions
//1 = answers
//2 = responses
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
for (var i = 0; i < 5; i++) {
    guessingGame[3][i] = prompt(guessingGame[0][i]);
    guessingGame[3][i] = guessingGame[3][i].toLowerCase();
    console.log(guessingGame[3][i]);
    if (guessingGame[3][i] === guessingGame[1][i]
        || guessingGame[3][i] === guessingGame[2][i]) {
            alert(`Correct!`);
            quizScore++;
    } else {
        alert(`Incorrect :(`);
    }
}