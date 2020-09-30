previousDiv = document.getElementById("previousScores");
gobackDiv = document.getElementById("back");
clearScoresDiv = document.getElementById("clear");

var score = localStorage.getItem("results");
var initials = localStorage.getItem("initials");

newHighScore = document.createElement("div");
newHighScore.textContent="1. "+initials+"-"+score;
previousDiv.appendChild(newHighScore);


clearScoresDiv.addEventListener("click", function(event){
    if (event.target.matches("button")) {
        previousDiv.innerHTML="";
        localStorage.clear();
    }
})

gobackDiv.addEventListener("click", function (event){
    if (event.target.matches("button")){
        window.location.replace("index.html");
    }
})