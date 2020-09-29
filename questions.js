// this object will hold the questions and answers
// the correct answer is always the first answer in the array
var questions = {
    "1": {
        "title": "Commonly used data types DO NOT include:",
        "choices": ["Alerts", "Integers", "Booleans", "Strings"]
       
    },
    "2": {
        "title": "The condition in an if / else statement is enclosed within ____.",
        "choices": ["Parenthesis","Quotes", "Curly Brackets", "Square Brackets" ]
    }, 
    "3": {
        "title": "Arrays in JavaScript can be used to store ____.",
        "choices": ["all of the above","numbers and strings", "booleans", "other arrays" ]
    },
    "4": {
        "title": "String values must be enclosed within ____ when being assigned to variables.",
        "choices": ["quotes","curly brackets", "commas", "parenthesis" ]
    },
    "5": {
        "title": "A very useful tool used during development and debugging for printing content to the debugger is:",
        "choices": ["console.log","JavaScript", "terminal/bash", "for loops" ]
    }

}

// these are the elements that will be changing state
var startPage = document.getElementById("startpage");
var questionPage = document.getElementById("questions");
var choiceDiv = document.querySelector(".choices");
var time = document.querySelector(".time");
var feedback = document.getElementById("feedback");

var questionNumber = 1;
var secondsLeft = 75;


// this function will run the timer
function timer() {
    
    interval = setInterval(function() {
        time.textContent="Time:"+secondsLeft;
        secondsLeft --;
    }, 1000)

}


// when the start button is clicked the startpage is hidden, the questions are shown
startPage.addEventListener("click", function(event){
    if (event.target.matches("button")){
        startPage.setAttribute("class", "hide");
        questionPage.removeAttribute("class");
        timer();
        renderQuestion(questionNumber);
        
    }

})

// this function will render a new question, given the number of the question
function renderQuestion(questionNumber) {
    choiceDiv.innerHTML="";
    feedback.innerHTML="";
    // first the question title is rendered
    var questionTitle = document.querySelector(".question-title");
    questionTitle.textContent = questions[questionNumber].title;

    // choicePosition is used to randomize the answers. a random number is chosen
    // that number will be index of the first answer
    // then the number is taken off to not be used again
    /* the button is created with the answer as the text */

    var choicePosition=["0", "1", "2", "3"];
    for (var j=0; j<questions[questionNumber].choices.length; j++){
        var randomIndex = Math.floor(Math.random()*choicePosition.length);
        var buttonChoice = document.createElement("button");
        buttonChoice.textContent=(j+1) + ". " + questions[questionNumber].choices[choicePosition[randomIndex]];
        // the data index is the same as the choice so i can use it to check if it's correct or not
        buttonChoice.setAttribute("data-index", questions[questionNumber].choices[choicePosition[randomIndex]]);
        choiceDiv.appendChild(buttonChoice);
        var lineBreak = document.createElement("br");
        choiceDiv.appendChild(lineBreak);
        choicePosition.splice(randomIndex, 1);

    }
}

// the function uses the index and compares it to the first element of the choices to see if it's correct
function checkAnswer(index) {
    feedback.removeAttribute("class", "hide");
    var line = document.createElement("hr");
    feedback.appendChild(line);
    var checked = document.createElement("p");
    if (index===questions[questionNumber].choices[0]) {
        console.log(true);
        checked.textContent = "Correct!";
        
    }
    else{
        console.log(false);
        secondsLeft -=10;
        checked.textContent = "False!";
    };
    feedback.appendChild(checked);
    questionNumber++;
    renderQuestion(questionNumber);
}

// this event will check if the user clicked the correct answer, then call the render answer page
questionPage.addEventListener("click", function(event){
    event.preventDefault();
    if(event.target.matches("button")) {
        var button=event.target;
        var index = button.getAttribute("data-index");
        checkAnswer(index);
    }
})



