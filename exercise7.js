function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> You have scored " + quiz.score + " points!</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
var questions = [
    new Question("What is the currency of Denmark?", ["Dirham", "Krone","Dinar", "Rupee"], "Krone"),
    new Question("Which country has the longest coastline in the world?", ["Russia", "Indonesia", "Australia", "Canada"], "Canada"),
    new Question("What is the world's most populated country?", ["China", "India","Japan", "USA"], "China"),
    new Question("The Great Barrier Reef is off the coast of which country?", ["Fiji", "New Zealand", "Australia", "All"], "Australia"),
    new Question("In which country is Mount Fuji located?", ["Japan", "North Korea", "Fiji", "Peru"], "Japan")
];
var quiz = new Quiz(questions);
populate();
