// this object will hold the questions and answers
var questions = {
    "1": {
       "title": "What holds the codition in a for loop?",
        "choices": ["Parenthesis","Quotes", "Angle Brackets", "Angle Brakets" ]
    },
    "2": {
        "title": "Commonly used data types DO NOT include:",
        "choices": ["alerts", "Integers", "Booleans", "Strings"]
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
    }

})

// this function will render a new question, given the number of the question
function renderQuestion(i) {
    var questionTitle = document.querySelector(".question-title");
    var choiceDiv = document.querySelector(".choices");
    questionTitle.textContent = questions[i].title;
    for (var j=0; j<questions[i].choices.length; j++){
        var buttonChoice = document.createElement("button");
        buttonChoice.textContent=questions[i].choices[j];
        buttonChoice.setAttribute("data-index", j);
        choiceDiv.appendChild(buttonChoice);
    }
}

