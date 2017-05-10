//business logic
function Player(dice, rollScore, totalScore) {
  this.dice = dice;
  this.rollScore = rollScore;
  this.totalScore = totalScore;
}

// function Game(playerOne, playerTwo) {
//   this.playerOne = playerOne;
//   this.playerTwo = playerTwo;
// }

Player.prototype.Roll  = function(min, max) {
  min = Math.ceil(1);
  max = Math.floor(7);
  return Math.floor(Math.random() * (max - min)) + min;
  // this.dice = document.getElementById("dice-number")
  // this.dice.innerHTML = Math.floor((Math.random() * 6) + 1);
  // return this.dice;
}


//user interface logic
$(document).ready(function() {
  var dice;
  var rollScore;
  var totalScore;
  var player1 = new Player(dice, rollScore, totalScore);

  $("button#roll").click(function(){
    $("#dice-number").text(player1.Roll());
  });
});
