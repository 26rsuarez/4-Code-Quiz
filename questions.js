// this object will hold the questions and answers
// the correct answer is always the first answer in the array
// the choices will be randomized in the question rendering
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
var resultDiv = document.getElementById("results")
var feedbackDiv = document.getElementById("feedback");

// global variables
var questionNumber = 1;
var secondsLeft = 75;

// this function will run the timer
function timer() {
        interval = setInterval(function() {
            time.textContent="Time:"+secondsLeft;
            secondsLeft --;

            if (secondsLeft===0){
                results();
            }
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

// this function shows the results at the end of the test
function results(){
    clearInterval(interval)
    questionPage.setAttribute("class", "hide")
    resultDiv.removeAttribute("class");
}

// this function will render a new question, given the number of the question
function renderQuestion(questionNumber) {
    // need to clear html for rendering a new question 
    choiceDiv.innerHTML="";
    // first the question title is rendered
    var questionTitle = document.querySelector(".question-title");
    questionTitle.textContent = questions[questionNumber].title;

    /* choicePosition is used to randomize the answers.*/
    var choicePosition=["0", "1", "2", "3"];
    for (var j=0; j<4; j++){
        // a random number is chosen
        var randomIndex = Math.floor(Math.random()*choicePosition.length);
        // a button will be created
        var buttonChoice = document.createElement("button");
        // that button will be the first answer and will have the text of the index equal to the choice position number
        buttonChoice.textContent=(j+1) + ". " + questions[questionNumber].choices[choicePosition[randomIndex]];
        // i set the data index the same as the choice so i can use it to check if it's correct or not
        buttonChoice.setAttribute("data-index", questions[questionNumber].choices[choicePosition[randomIndex]]);
        choiceDiv.appendChild(buttonChoice);
        var lineBreak = document.createElement("br");
        choiceDiv.appendChild(lineBreak);
        // then the number is taken off the choicePosition array to not be used again
        choicePosition.splice(randomIndex, 1);

    }
}

// the function uses the index and compares it to the first element of the choices to see if it's correct
function checkAnswer(index) {
    feedbackDiv.innerHTML="";
    feedbackDiv.removeAttribute("class", "hide");
    var line = document.createElement("hr");
    feedbackDiv.appendChild(line);
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
    feedbackDiv.appendChild(checked);
    questionNumber++;
    
    // if the questionNumber exceeds the number of questions the results funciton will be called 
    if (questionNumber>Object.keys(questions).length) {
        results();
    } else {
        renderQuestion(questionNumber);
    }
    
}

// this event will see what the user clicked then call the check answer page with the data index of the button clicked
questionPage.addEventListener("click", function(event){
    event.preventDefault();
    if(event.target.matches("button")) {
        var button=event.target;
        var index = button.getAttribute("data-index");
        checkAnswer(index);
    }
})



