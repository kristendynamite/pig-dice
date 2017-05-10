//business logic
function Player(dice, rollScore, totalScore) {
  this.dice = dice;
  this.arrayRollScore = []; //START EMPTY
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
  if (this.dice > 1){
    this.arrayRollScore.push(this.dice);
    console.log(this);
    return this.arrayRollScore;
  // } else if (this.dice === 1){
    // this.arrayRollScore = 0 ;
  //   //Try to reset .turn-total
  }
}

Player.prototype.SumArray = function (){
  this.rollScore=0;
  for(var i in this.arrayRollScore) {
    this.rollScore += parseInt(this.arrayRollScore[i]);
    if(this.rollScore > 30){
      alert("You won!")
    }
  }
  return this.rollScore;
}



//user interface logic
$(document).ready(function() {
  var dice;
  var rollScore;
  var totalScore;
  var player1 = new Player(dice, rollScore, totalScore);
  var player2 = new Player(dice, rollScore, totalScore);

  $("button#roll").click(function(){
    $("#dice-number").text(player1.Roll());
    $(".turn-total").text(player1.Rollscore());
  });

  $("button#hold").last().click(function(){
    $(".over-all-total").text(player1.SumArray());
    $(".turn-total").text("");
    //Try to reset .turn-total
  });

  $("button#roll-2").click(function(){
    $("#dice-number-2").text(player2.Roll());
    $(".turn-total-2").text(player2.Rollscore());
  });

  $("button#hold-2").last().click(function(){
    $(".over-all-total-2").text(player2.SumArray());
    $(".turn-total-2").text("");
  });

  $("button#restart").click(function(){
    location.reload();
  });
});
