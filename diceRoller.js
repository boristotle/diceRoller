// function diceRoller returns a random # between 1 and 6.
// snd iteration, diceRoller ( param ) returns param #'s beween 1 and 6
// third iteration, diceRoller ( param1, param2 ) returns param 1 random numbers between 1 and param2



Constructor iterations:

var DiceRoller = function ( ) {
this.hand = [];
this.roll = function() {
Math.floor((Math.random() * 6 + 1 )); 
    }
}

 var game = new DiceRoller();



Have a dice constructor that can be initialized as follows:

  var game = new DiceRoller();
  game.hand;
  => [];


function DiceRoller() {
  this.hand = [];
}


Add a method to roll the dice as follows:
  var game = new DiceRoller();
  game.hand;
  =>[]
  game.roll();
  game.hand;
  => [4]


}

Add the ability to specify number of dice:
  var game = new DiceRoller();
  game.hand;
  =>[]
  game.roll(4);
  game.hand;
  => [4,5,2,3]

function (numDice) {
  }

}


Add the ability to specify number of dice sides:
  var game = new DiceRoller(9);
  game.hand;
  =>[]
  game.roll(5);
  game.hand;
  => [2,8,6,9,3]

roll: function (numSides) {
  var output = [];
  for (var i = 1, i <= numSides; i++) {
    output.push(numSides);
  }




Sides default to 6 if you do not specify at instanciation





function DiceRoller (sides) {
    this.hand = [];
    this.sides = Number(sides) || 6;
    this.roll = function(rolls) {
        this.hand = [];
        for(var i = 1; i <= rolls; i++) {
            this.hand.push(Math.floor(Math.random() * (this.sides - 1 + 1)) + 1);
        }
    
    }

};




var diceRoller = function ( ) {
  return (Math.floor((Math.random()*6 + 1 ))) ; // this returns a number
}
console.log("" + diceRoller());






var diceRoller2 = function ( quantDice ) {
  var output = [];
  for ( var i = 0 ; i < quantDice ; i++ ) {
    output.push(Math.floor((Math.random()*6 + 1 )))
  }
return output;
}
console.log(diceRoller2( 3, 10 ) + "");









var diceRoller3 = function ( quantDice, numSides ) {
  var sides = Number(numSides) || 6;
  console.log("quantDice: " + quantDice + "Sides: " + sides);
  var output = [];
  for ( var i = 0 ; i < quantDice ; i++ ) {
    output.push(Math.floor((Math.random()*sides + 1 )))
  }
return output;
}

console.log(diceRoller3( 3 ) + "");
console.log(diceRoller3( 3, 20 ) + "");

