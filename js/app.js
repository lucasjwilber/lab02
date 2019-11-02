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
if (visitorName) {
  var wantsQuiz = confirm(`Welcome to my site ${visitorName}. Want to play a guessing game?`);
}


//if visitor clicks OK when asked if they want to take my quiz
if (wantsQuiz) {
  runQuiz();
}


//question 1
function question1() {
  guessingGame[3][0] = prompt(guessingGame[0][0]).toLowerCase();

  //if user's answer matches either of the predefined answers
  if (
    (guessingGame[3][0] === guessingGame[1][0])
    || (guessingGame[3][0] === guessingGame[2][0])) {
    alert('Correct!');
    quizScore++;
    console.log(`Question; ${guessingGame[0][0]}. Correct answer: ${guessingGame[2][0]} or ${guessingGame[1][0]}. User answered with ${guessingGame[3][0]}`);
  }
  else {
    alert('Incorrect :(');
  }
}


//question 2
function question2() {
  guessingGame[3][1] = prompt(guessingGame[0][1]).toLowerCase();

  //if user's answer matches either of the predefined answers
  if (
    (guessingGame[3][1] === guessingGame[1][1])
    || (guessingGame[3][1] === guessingGame[2][1])) {
    alert('Correct!');
    quizScore++;
    console.log(`Question; ${guessingGame[0][1]}. Correct answer: ${guessingGame[2][1]} or ${guessingGame[1][1]}. User answered with ${guessingGame[3][1]}`);
  }
  else {
    alert('Incorrect :(');
  }
}


//question 3
function question3() {
  guessingGame[3][2] = prompt(guessingGame[0][2]).toLowerCase();

  //if user's answer matches either of the predefined answers
  if (
    (guessingGame[3][2] === guessingGame[1][2])
    || (guessingGame[3][2] === guessingGame[2][2])) {
    alert('Correct!');
    quizScore++;
    console.log(`Question; ${guessingGame[0][2]}. Correct answer: ${guessingGame[2][2]} or ${guessingGame[1][2]}. User answered with ${guessingGame[3][2]}`);
  }
  else {
    alert('Incorrect :(');
  }
}


//question 4
function question4() {
  guessingGame[3][3] = prompt(guessingGame[0][3]).toLowerCase();

  //if user's answer matches either of the predefined answers
  if (
    (guessingGame[3][3] === guessingGame[1][3])
    || (guessingGame[3][3] === guessingGame[2][3])) {
    alert('Corrsadfsdfsdf!');
    console.log('asdf');
    quizScore++;
    console.log(`Question; ${guessingGame[0][3]}. Correct answer: ${guessingGame[2][3]} or ${guessingGame[1][3]}. User answered with ${guessingGame[3][3]}`);
  }
  console.log('asdfsd');
}


//question 5
function question5() {
  guessingGame[3][4] = prompt(guessingGame[0][4]).toLowerCase();
  //if user's answer matches either of the predefined answers
  if (
    (guessingGame[3][4] === guessingGame[1][4])
    || (guessingGame[3][4] === guessingGame[2][4])) {
    alert('Correct!');
    quizScore++;
    console.log(`Question; ${guessingGame[0][4]}. Correct answer: ${guessingGame[2][4]} or ${guessingGame[1][4]}. User answered with ${guessingGame[3][4]}`);
  }
  else {
    alert('Incorrect :(');
  }
}

console.log('asdfasd');


//question 6
function question6() {
  var attempts = 3;
  var randomNumber = (Math.ceil(Math.random() * 10)).toString();
  console.log(`number is ${randomNumber}`);
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
}


/////////////////////////////////question 7//////////////////////////////////
function question7() {
  var correctAnswers = ['japan', 'uk', 'jordan', 'mexico', 'germany',];
  var guesses = 6;
  var gotItRight = false;
  
  //ask the question
  do {
    var answerGuess = prompt(`Name a country that I've visited, other than America. You've got ${guesses} tries!`).toLowerCase();
    console.log(answerGuess);
    guesses--;
    //compare the answer given to the array of correct answers
    for (var i = 0; i < correctAnswers.length; i++) {
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
}


function runQuiz() {
  alert('Here we go!');
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();
  alert(`Thanks for taking my quiz! Your final score is ${quizScore}/7.`);
}

