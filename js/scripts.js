//business logic
function Player(dice, arrayRollScore, rollScore, totalScore) {
  this.dice = dice;
  this.arrayRollScore = arrayRollScore;
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
  this.dice = Math.floor(Math.random() * (max - min)) + min;
  // this.dice = document.getElementById("dice-number")
  // this.dice.innerHTML = Math.floor((Math.random() * 6) + 1);
  return this.dice;
}

// Push into a global Array
// var rollScore = []; // try to make it local, how
Player.prototype.Rollscore = function (){
  if (this.dice){
    this.arrayRollScore.push(this.dice);
  }
  return this.arrayRollScore;
}



//user interface logic
$(document).ready(function() {
  var dice;
  var rollScore;
  var totalScore;
  var arrayRollScore = [];
  var player1 = new Player(dice, arrayRollScore, rollScore, totalScore);

  $("button#roll").click(function(){
    $("#dice-number").text(player1.Roll());
    $(".turn-total").text(player1.Rollscore());
  });
});
