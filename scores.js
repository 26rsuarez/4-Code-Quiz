//these are the divs that will be changed
previousDiv = document.getElementById("previousScores");
gobackDiv = document.getElementById("back");
clearScoresDiv = document.getElementById("clear");

//score and initials come from local storage
var score = localStorage.getItem("results");
var initials = localStorage.getItem("initials");

//a high score is displayed if it is in local storage
if (localStorage.getItem("results")===null) {
    previousDiv.innerHTML="";
} else {
    newHighScore = document.createElement("div");
    newHighScore.textContent="1. "+initials+"-"+score;
    previousDiv.appendChild(newHighScore);
}


// event listener to clear storage
clearScoresDiv.addEventListener("click", function(event){
    if (event.target.matches("button")) {
        previousDiv.innerHTML="";
        localStorage.clear();
    }
})
// event listener to go back to home page
gobackDiv.addEventListener("click", function (event){
    if (event.target.matches("button")){
        window.location.replace("index.html");
    }
})