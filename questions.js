// this object will hold the questions and answers
var questions = {
    "1": {
       "title": "What holds the codition in a for loop?",
        "choices": ["Parenthesis","Quotes", "Square Brackets", "Angle Brakets" ]
    },
    "2": {
        "title": "Commonly used data types DO NOT include:",
        "choices": ["Alerts", "Integers", "Booleans", "Strings"]
    } 
}

// get the start documnent id to hide the code and questions id to show the code
var startPage = document.getElementById("startpage");
var questionPage = document.getElementById("questions");

// when the start button is clicked the startpage is hidden, the questions are shown
start.addEventListener("click", function(event){
    if (event.target.matches("button")){
        startPage.setAttribute("class", "hide");
        questionPage.removeAttribute("class");
        renderQuestion(1);
    }

})

// this function will render a new question, given the number of the question
function renderQuestion(i) {
    // first the question title is rendered
    var questionTitle = document.querySelector(".question-title");
    questionTitle.textContent = questions[i].title;

    var choiceDiv = document.querySelector(".choices");

    // choicePosition is used to randomize the answers. a random number is chosen
    // that number will be index of the first answer
    // then the number is taken off to not be used again
    /* the button is created with the answer as the text */

    var choicePosition=["0", "1", "2", "3"];
    for (var j=0; j<questions[i].choices.length; j++){
        var randomIndex = Math.floor(Math.random()*choicePosition.length);
        var buttonChoice = document.createElement("button");
        buttonChoice.textContent=(j+1) + ". " + questions[i].choices[choicePosition[randomIndex]];
        buttonChoice.setAttribute("data-index", questions[i].choices[choicePosition[randomIndex]]);
        choiceDiv.appendChild(buttonChoice);
        var lineBreak = document.createElement("br");
        choiceDiv.appendChild(lineBreak);
        choicePosition.splice(randomIndex, 1);

    }
}



function startTimer() {

}