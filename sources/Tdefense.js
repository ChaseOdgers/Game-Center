
/*BIG CHANGE: This game will not be too much of a tower defense, instead it will be very similar to like
plants vs zombie kind of game */
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
/*DISCLAIMER: This rng was copy and pasted from
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/

document.getElementByID("c9").addEventListener("click", function(){alert("Success!");});

function toggleMenuVisibility()//TODO: Fix visibility, this function does not work
{
  let x = document.getElementById("upgradeMenu");
  if(x.style.display === "none")
  {
    x.style.display === "block";
  }
  else
  {
    x.style.display === "none";
  }
}

function mob(coordinate, health)  //blueprint for
{
  this.place = coordinate;
  this.health = health;
  this.modHealth = function(mod)
  {
    this.health += mod;
  }
}

let turn =  0;
let playerHealth = 100;
let mobToSpawn = 0;
let mobList = [];
let mobCount = 0;
let startingCoordinate = [0,getRandomInt(0,4)]

while(playerHealth > 0)
{
  //Player buying upgrades phase
  showMenu();
  //TODO: Add an event listener for when the player clicks on add turret
  //TODO: When adding a turret, add an event listener for where the player clicks to store the coordinate in the tile



  mobToSpawn = turn + 5;

  while(mobCount != 0 || mobToSpawn != 0) //This is basically frame by frame movemet
  {
    mobList.move();//move will modify the coordinate array of each of the mob object inside to move towards the castle

    if(mobToSpawn != 0)
    {
      let temp = new mob(startingCoordinate, 100)
      mobList.push(temp);
    }
  }
  turn++;
}
