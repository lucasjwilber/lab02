'use strict';

var quizScore = 0;

var guessingGame = [
  //index 0 = questions
  ['Yes or no: I was a chef before joining Code Fellows.',
    'Did I skateboard in middle school/high school?',
    'If I could live anywhere, it would be San Diego.',
    'Yes or no: I was in the army.',
    'Do I own a cat?',
  ],
  //index 1 = correct answers shorthand
  ['n',
    'y',
    'y',
    'n',
    'n',
  ],
  //index 2 = correct answers full
  ['no',
    'yes',
    'yes',
    'no',
    'no',
  ],
  //index 3 = user responses
  ['placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
  ],
];

var visitorName = prompt('Welcome to my site! Who is this?');
alert(`Welcome to my site ${visitorName}. Let's play a guessing game.`);

//questions loop
for (var i = 0; i < 5; i++) {

  //rewrite index 3 placeholders to user's entries
  guessingGame[3][i] = prompt(guessingGame[0][i]);

  //if user entered a string, lowercase it for simpler comparisons later
  if (typeof (guessingGame[3][i]) === 'string') {
    guessingGame[3][i] = guessingGame[3][i].toLowerCase();
  }

  //check for correct answer
  if (
    (guessingGame[3][i] === guessingGame[1][i])
    || (guessingGame[3][i] === guessingGame[2][i])
    && (i !== 5)
  ) {
    alert('Correct!');
    quizScore++;
    console.log(`Question; ${guessingGame[0][i]}. Correct answer: ${guessingGame[2][i]} or ${guessingGame[1][i]}. User answered with ${guessingGame[3][i]}`);

  } else {
    alert('Incorrect :(');
  }
}

//question 6
var randomNumber = (Math.ceil(Math.random() * 10)).toString();
console.log(`number is ${randomNumber}`);
var attempts = 3;
var numberGuess = prompt('Guess a number between 1 and 10. You have 4 tries left!');

while ((numberGuess !== randomNumber) && (attempts > 0)) {
  if (numberGuess > randomNumber) {
    numberGuess = prompt(`Too high! You have ${attempts} tries left!`);
    attempts--;
    console.log(`user guessed ${numberGuess}, but the number is ${randomNumber}`);
  }
  else {
    numberGuess = prompt(`Too low! You have ${attempts} tries left!`);
    attempts--;
    console.log(`user guessed ${numberGuess}, but the number is ${randomNumber}`);
  }
}

if (numberGuess === randomNumber) {
  alert(`Correct! The number was ${randomNumber}`);
  quizScore++;
}
else {
  alert(`Out of tries! The number was ${randomNumber}`);
}


//question 7
var correctAnswers = ['moira', 'ana', 'mercy', 'baptiste', 'zenyatta', 'lucio', 'brigitte',];
var guesses = 6;
var gotItRight = false;

do {
  var answerGuess = prompt(`Name a Support character in the game Overwatch. You have ${guesses} tries left!`);
  answerGuess = answerGuess.toLowerCase();
  console.log(answerGuess);
  guesses--;

  for (i = 0; i < correctAnswers.length; i++) {
    if (answerGuess === correctAnswers[i]) {
      gotItRight = true;
      console.log(`you guessed ${answerGuess}, you have ${guesses} guesses left`);
    }
  }
} while (
  (gotItRight === false) && (guesses > 0)
);



if (gotItRight === true) {
  alert(`Well done ${visitorName}! That's correct!`);
  quizScore++;
}
else {
  var answerString = '';
  for (let i = 0; i < correctAnswers.length; i++) {
    answerString += (correctAnswers[i] + ', ');
  }
  alert(`Sorry ${visitorName}, you're out of tries. \n The possible answers were ${answerString}`);
}

alert(`Thanks for taking my quiz! Your final score is ${quizScore}/7.`);
