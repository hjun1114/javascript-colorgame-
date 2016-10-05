var colorLists = [
  "rgb(255, 0, 0)",
  "rgb(255, 255, 0)",
  "rgb(0, 255, 0)",
  "rgb(0, 255, 255)",
  "rgb(0, 0, 255)",
  "rgb(255, 0, 255)"
]

var squares = document.querySelectorAll(".square");
var answerColor = colorLists[3];
var displayAnswerColor = document.querySelector("#displayAnswerColor");
var correctOrWrong = document.querySelector("#correctOrWrong");

displayAnswerColor.textContent = answerColor;

for(var i = 0; i < squares.length ; i++){

  squares[i].style.background = colorLists[i]; // giving squares colors

  squares[i].addEventListener("click", function(){

    var clickedColor = this.style.background; // save the color of picked one

    if (clickedColor === answerColor) {
      correctOrWrong.textContent = "Correct!";
    } else {
      this.style.background = "#232323";
      correctOrWrong.textContent = "Wrong!";
    }
  });
}
