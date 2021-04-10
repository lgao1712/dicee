var randomNumber1 = Math.floor(6 * Math.random()) + 1;
var player1Dice = "images/dice" + randomNumber1 + ".png";

var randomNumber2 = Math.floor(6 * Math.random()) + 1;
var player2Dice = "images/dice" + randomNumber2 + ".png";

if (player1Dice > player2Dice) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!";
} else if (player1Dice < player2Dice) {
  document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!";
} else {
  document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
}

document.getElementsByClassName("img1")[0].src = player1Dice;
document.getElementsByClassName("img2")[0].src = player2Dice;

// if () {
//   document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!";
// } else if {
//   document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins!";
// } else {
//   document.getElementsByTagName("h1")[0].innerHTML = "Draw!";
// }
