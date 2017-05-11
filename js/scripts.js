//business logic
function Player(dice, rollScore, totalScore) {
  this.dice = dice;
  this.arrayRollScore = []; //START EMPTY // roll history?
  this.rollScore = rollScore;
  this.totalScore = totalScore;
}
//WE NEED TO DECLARE THE ARRAY AS AN EMPTY ARRAY, BUT IT IS NOT PART OF OUR CONSTRUCTOR 'PARAMETERS'...SO WE DON'T OVERWRITE OUR ARRAY EVERY TIME A PLAYER ROLL THE DICE.

// function Game(playerOne, playerTwo) {
//   this.playerOne = playerOne;
//   this.playerTwo = playerTwo;
// }
Player.prototype.Roll  = function() {
  this.dice = Math.floor((Math.random() * 6) + 1);
  return this.dice;
}

Player.prototype.Rollscore = function (){

  // this.arrayRollScore.push(this.dice);
  //
  if (this.dice > 1){
    this.arrayRollScore.push(this.dice);
    return this.arrayRollScore;
  }
    else if (this.dice === 1){
    this.arrayRollScore = [];
    console.log(this.arrayRollScore);
  }
  return this.arrayRollScore;

  // } else if (this.dice === 1){
    // this.arrayRollScore = 0 ;
  //   //Try to reset .turn-total
}

Player.prototype.SumArray = function (){
  var result = 0;
  for(var i = 0; i < this.arrayRollScore.length; i++) {
    result += parseInt(this.arrayRollScore[i]);
    if(result >= 100){
      alert("You won!")
    }
  }
  return result;
}



//user interface logic
$(document).ready(function() {
  var dice;
  var rollScore;
  var totalScore;
  var player1 = new Player(dice, rollScore, 0);
  var player2 = new Player(dice, rollScore, 0);

  $("button#roll").click(function(){
    $("#dice-number").text(player1.Roll());
    $(".turn-total").text(player1.Rollscore());
  });


  $("button#hold").click(function(){
    player1.totalScore += player1.SumArray();
    $(".over-all-total").text(player1.totalScore);
    player1.arrayRollScore = [];

  });

  $("button#roll-2").click(function(){
    $("#dice-number-2").text(player2.Roll());
    $(".turn-total-2").text(player2.Rollscore());
  });

  $("button#hold-2").click(function(){
    player2.totalScore += player2.SumArray();
    $(".over-all-total-2").text(player2.totalScore);
    player2.arrayRollScore = [];
  });

  $("button#restart").click(function(){
    location.reload();
  });
});
