'use strict'
var visitorName = prompt("Welcome to my site! Who is this?");
document.getElementById("welcomeVisitorMessage").textContent = `Greetings, ${visitorName}!`;
//start quiz. first question:
var quizScore = 0;
var firstQuestion = prompt(`Welcome to my site ${visitorName}. Ready for a short quiz?`).toLowerCase();
console.log(`first question answered with "${firstQuestion}"`);
if (firstQuestion === "yes" || firstQuestion === "y") {
    console.log("question answered correctly");
    var secondQuestion = prompt(` Great! One point for you! Only four questions left. \n Question 2: Would the following code give an error? \n alert('I'm eating an apple');`).toLowerCase();
    quizScore++;
} else {
    console.log("question answered incorrectly");
    var secondQuestion = prompt(`Too bad, you've already started. And now you're 0 for 1. Only four questions left. \n Question 2: Would the following code give an error? \n alert('I'm eating an apple');`).toLowerCase();
}
console.log(`second question answered with "${secondQuestion}"`);
//second question:
if (secondQuestion === "yes" || secondQuestion === "y") {
    console.log("question answered correctly");
    var thirdQuestion = prompt(`Correct! \n Third question: Does an 8oz can of Redbull have more caffeine than an 8oz cup of coffee?`).toLowerCase();
    quizScore++;
} else {
    console.log("question answered incorrectly");
    var thirdQuestion = prompt(`Wrong! \n Third question: Does an 8oz can of Redbull have more caffeine than an 8oz cup of coffee?`).toLowerCase();
}
console.log(`third question answered with "${thirdQuestion}"`);
//third question
if (thirdQuestion === "yes" || thirdQuestion === "y") {
    console.log("question answered incorrectly");
    var fourthQuestion = prompt(`False! \n Fourth question: Are there 3 different characters you can use to encapsulate strings?`).toLowerCase();
} else {
    console.log("question answered correctly");
    var fourthQuestion = prompt(`That's right! \n Fourth question: Are there 3 different characters you can use to encapsulate strings?`).toLowerCase();
    quizScore++;
}
console.log(`fourth question answered with "${fourthQuestion}"`);
//fourth question
if (fourthQuestion === "yes" || fourthQuestion === "y") {
    console.log("question answered correctly");
    var fifthQuestion = prompt(`Correct! \n Last question: Is Au the chemical symbol for Australium?`).toLowerCase();
    quizScore++;
} else {
    console.log("question answered incorrectly");
    var fifthQuestion = prompt(`Incorrect! The ', ", and \` characters all work with strings. \n Last question: Is Au the chemical symbol for Australium?`).toLowerCase();
}
console.log(`fifth question answered with "${fifthQuestion}"`);
//fifth question
if (fifthQuestion === "yes" || fifthQuestion === "y") {
    console.log("question answered correctly");
    alert(`Nope! Test complete, you scored ${quizScore} out of 5`);
} else {
    console.log("question answered correctly");
    quizScore++;
    alert(`Good job. You scored ${quizScore} out of 5`);
}
console.log(`total score for ${visitorName}: ${quizScore}`);
console.log(`"LiVe ReLoAd EnAbLeD."`);
//footer
document.getElementById("footer").textContent = `Thanks for visiting, ${visitorName}.`;