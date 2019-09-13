'use strict';



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
  //index 3 = user responses, will be reassigned by prompts
  ['placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
    'placeholder',
  ],
];


var quizScore = 0;
var visitorName = prompt('Welcome to my site! Who is this?');
var wantsQuiz = confirm(`Welcome to my site ${visitorName}. Want to play a guessing game?`);

function askQuestion(number) {
  //ask a question and change the corresponding 'placeholder' answer to whatever the user entered
  guessingGame[3][number] = prompt(guessingGame[0][number]).toLowerCase();

  //if user's answer matches either of the predefined answers
  if (
    (guessingGame[3][number] === guessingGame[1][number])
    || (guessingGame[3][number] === guessingGame[2][number])) {
    alert('Correct!');
    quizScore++;
    console.log(`Question; ${guessingGame[0][number]}. Correct answer: ${guessingGame[2][number]} or ${guessingGame[1][number]}. User answered with ${guessingGame[3][number]}`);
  }
  else {
    alert('Incorrect :(');
  }
}


if (wantsQuiz) {

  //this loop asks the first 5 questions
  for (var i = 0; i < guessingGame.length; i++) {
    askQuestion(i);
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
  //ask the question
  do {
    var answerGuess = prompt(`Name a Support character in the game Overwatch. You have ${guesses} tries left!`);
    answerGuess = answerGuess.toLowerCase();
    console.log(answerGuess);
    guesses--;
    //compare the answer given to the array of correct answers
    for (i = 0; i < correctAnswers.length; i++) {
      if (answerGuess === correctAnswers[i]) {
        gotItRight = true;
        console.log(`you guessed ${answerGuess}, you have ${guesses} guesses left`);
      }
    }
    //repeat the while loop if the answer was incorrect and user still has guess attempts
  } while (
    (gotItRight === false) && (guesses > 0)
  );

  //at this point the while loop above has ended becuase the user is either correct or out of tries, check which:
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
}
