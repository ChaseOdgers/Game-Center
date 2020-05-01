var deck = ["2C","2D","2H","2S","3C","3D","3H","3S","4C","4D","4H","4S","5C",
            "5D","5H","5S","6C","6D","6H","6S","7C","7D","7H","7S","8C","8D",
            "8H","8S","9C","9D","9H","9S","10C","10D","10H","10S","jC","jD",
            "jH","jS","qC","qD","qH","qS","kC","kD","kH","kS","aC","aD","aH","aS",

            "2C","2D","2H","2S","3C","3D","3H","3S","4C","4D","4H","4S","5C",
            "5D","5H","5S","6C","6D","6H","6S","7C","7D","7H","7S","8C","8D",
            "8H","8S","9C","9D","9H","9S","10C","10D","10H","10S","jC","jD",
            "jH","jS","qC","qD","qH","qS","kC","kD","kH","kS","aC","aD","aH","aS",

            "2C","2D","2H","2S","3C","3D","3H","3S","4C","4D","4H","4S","5C",
            "5D","5H","5S","6C","6D","6H","6S","7C","7D","7H","7S","8C","8D",
            "8H","8S","9C","9D","9H","9S","10C","10D","10H","10S","jC","jD",
            "jH","jS","qC","qD","qH","qS","kC","kD","kH","kS","aC","aD","aH","aS",

            "2C","2D","2H","2S","3C","3D","3H","3S","4C","4D","4H","4S","5C",
            "5D","5H","5S","6C","6D","6H","6S","7C","7D","7H","7S","8C","8D",
            "8H","8S","9C","9D","9H","9S","10C","10D","10H","10S","jC","jD",
            "jH","jS","qC","qD","qH","qS","kC","kD","kH","kS","aC","aD","aH","aS"
          ];

var pCount = 0;
var dCount = 0;
var split1A = false;
var split2A = false;
var split = false;
var split1 = 0;
var split2 = 0;
var cutCount = 0;
var aceInplay  = 0;

var dCard1, dCard2, pCard1, pCard2, posInDeck, hitCount;

/*
pCount = current players count
dCount = current dealers count
split = checks if a split is active
split1A = checks if in first card set of a split
split2A = checks if in second card set of a split
split1 = current count of the first hand in a split
split2 = current count of the second hand in a split
cutCount = a count to see how long until the next shuffle
aceInplay = number of aces in current play
dCard1 = dealers first card code
dCard2 = dealers second card code
pCard1 = players first card code
pCard2 = players second card code
posInDeck = the current position in the shuffled list
hitCount  = counter for displaying the image of the card
*/

document.getElementById('hit').disabled = true;
document.getElementById("stand").disabled = true;
document.getElementById("double").disabled = true;
document.getElementById("split").disabled = true;
document.getElementById("play").disabled = false;


//pre: card = the card code, n = the action of what needs to be returned
//this takes in a card and if its a
//0 then it will return the number of that card
//1 then it will return the string of the image file
//post: returns number of the card or the string of the image file
function cards(card, n)
{
  switch(card)
  {
    case "2C":
      switch (n)
      {
        case 0:
          return 2;
          break;
        case 1:
          return "imgs/blackjack/deck/2C.jpg";
          break;
      }
      pCount = pCount + 2;
      break;
    case "2D":
      switch (n)
      {
        case 0:
          return 2;
          break;
        case 1:
          return "imgs/blackjack/deck/2D.jpg";
          break;
      }
    case "2H":
      switch (n)
      {
        case 0:
          return 2;
          break;
        case 1:
          return "imgs/blackjack/deck/2H.jpg";
          break;
      }
    case "2S":
      switch (n)
      {
        case 0:
          return 2;
          break;
        case 1:
          return "imgs/blackjack/deck/2S.jpg";
          break;
      }
    case "3C":
      switch (n)
      {
        case 0:
          return 3;
          break;
        case 1:
          return "imgs/blackjack/deck/3C.jpg";
          break;
      }
    case "3D":
      switch (n)
      {
        case 0:
          return 3;
          break;
        case 1:
          return "imgs/blackjack/deck/3D.jpg";
          break;
      }
    case "3H":
      switch (n)
      {
        case 0:
          return 3;
          break;
        case 1:
          return "imgs/blackjack/deck/3H.jpg";
          break;
      }
    case "3S":
      switch (n)
      {
        case 0:
          return 3;
          break;
        case 1:
          return "imgs/blackjack/deck/3S.jpg";
          break;
      }
    case "4C":
      switch (n)
      {
        case 0:
          return 4;
          break;
        case 1:
          return "imgs/blackjack/deck/4C.jpg";
          break;
      }
    case "4D":
      switch (n)
      {
        case 0:
          return 4;
          break;
        case 1:
          return "imgs/blackjack/deck/4D.jpg";
          break;
      }
    case "4H":
      switch (n)
      {
        case 0:
          return 4;
          break;
        case 1:
          return "imgs/blackjack/deck/4H.jpg";
          break;
      }
    case "4S":
      switch (n)
      {
        case 0:
          return 4;
          break;
        case 1:
          return "imgs/blackjack/deck/4S.jpg";
          break;
      }
    case "5C":
      switch (n)
      {
        case 0:
          return 5;
          break;
        case 1:
          return "imgs/blackjack/deck/5C.jpg";
          break;
      }
    case "5D":
      switch (n)
      {
        case 0:
          return 5;
          break;
        case 1:
          return "imgs/blackjack/deck/5D.jpg";
          break;
      }
    case "5H":
      switch (n)
      {
        case 0:
          return 5;
          break;
        case 1:
          return "imgs/blackjack/deck/5H.jpg";
          break;
      }
    case "5S":
      switch (n)
      {
        case 0:
          return 5;
          break;
        case 1:
          return "imgs/blackjack/deck/5S.jpg";
          break;
      }
    case "6C":
      switch (n)
      {
        case 0:
          return 6;
          break;
        case 1:
          return "imgs/blackjack/deck/6C.jpg";
          break;
      }
    case "6D":
      switch (n)
      {
        case 0:
          return 6;
          break;
        case 1:
          return "imgs/blackjack/deck/6D.jpg";
          break;
      }
    case "6H":
      switch (n)
      {
        case 0:
          return 6;
          break;
        case 1:
          return "imgs/blackjack/deck/6H.jpg";
          break;
      }
    case "6S":
      switch (n)
      {
        case 0:
          return 6;
          break;
        case 1:
          return "imgs/blackjack/deck/6S.jpg";
          break;
      }
    case "7C":
      switch (n)
      {
        case 0:
          return 7;
          break;
        case 1:
          return "imgs/blackjack/deck/7C.jpg";
          break;
      }
    case "7D":
      switch (n)
      {
        case 0:
          return 7;
          break;
        case 1:
          return "imgs/blackjack/deck/7D.jpg";
          break;
      }
    case "7H":
      switch (n)
      {
        case 0:
          return 7;
          break;
        case 1:
          return "imgs/blackjack/deck/7H.jpg";
          break;
      }
    case "7S":
      switch (n)
      {
        case 0:
          return 7;
          break;
        case 1:
          return "imgs/blackjack/deck/7S.jpg";
          break;
      }
    case "8C":
      switch (n)
      {
        case 0:
          return 8;
          break;
        case 1:
          return "imgs/blackjack/deck/8C.jpg";
          break;
      }
    case "8D":
      switch (n)
      {
        case 0:
          return 8;
          break;
        case 1:
          return "imgs/blackjack/deck/8D.jpg";
          break;
      }
    case "8H":
      switch (n)
      {
        case 0:
          return 8;
          break;
        case 1:
          return "imgs/blackjack/deck/8H.jpg";
          break;
      }
    case "8S":
      switch (n)
      {
        case 0:
          return 8;
          break;
        case 1:
          return "imgs/blackjack/deck/8S.jpg";
          break;
      }
    case "9C":
      switch (n)
      {
        case 0:
          return 9;
          break;
        case 1:
          return "imgs/blackjack/deck/9C.jpg";
          break;
      }
    case "9D":
      switch (n)
      {
        case 0:
          return 9;
          break;
        case 1:
          return "imgs/blackjack/deck/9D.jpg";
          break;
      }
    case "9H":
      switch (n)
      {
        case 0:
          return 9;
          break;
        case 1:
          return "imgs/blackjack/deck/9H.jpg";
          break;
      }
    case "9S":
      switch (n)
      {
        case 0:
          return 9;
          break;
        case 1:
          return "imgs/blackjack/deck/9S.jpg";
          break;
      }
    case "10C":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/10C.jpg";
          break;
      }
    case "10D":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/10D.jpg";
          break;
      }
    case "10H":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/10H.jpg";
          break;
      }
    case "10S":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/10S.jpg";
          break;
      }
    case "jC":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/JC.jpg";
          break;
      }
    case "jD":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/JD.jpg";
          break;
      }
    case "jH":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/JH.jpg";
          break;
      }
    case "jS":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/JS.jpg";
          break;
      }
    case "qC":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/QC.jpg";
          break;
      }
    case "qD":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/QD.jpg";
          break;
      }
    case "qH":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/QH.jpg";
          break;
      }
    case "qS":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/QS.jpg";
          break;
      }
    case "kC":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/KC.jpg";
          break;
      }
    case "kD":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/KD.jpg";
          break;
      }
    case "kH":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/KH.jpg";
          break;
      }
    case "kS":
      switch (n)
      {
        case 0:
          return 10;
          break;
        case 1:
          return "imgs/blackjack/deck/KS.jpg";
          break;
      }
    case "aC":
      switch (n)
      {
        case 0:
          aceInplay++;
          return 11;
          break;
        case 1:
          return "imgs/blackjack/deck/AC.jpg";
          break;
      }
    case "aD":
      switch (n)
      {
        case 0:
          aceInplay++;
          return 11;
          break;
        case 1:
          return "imgs/blackjack/deck/AD.jpg";
          break;
      }
    case "aH":
      switch (n)
      {
        case 0:
          aceInplay++;
          return 11;
          break;
        case 1:
          return "imgs/blackjack/deck/AH.jpg";
          break;
      }
    case "aS":
      switch (n)
      {
        case 0:
          aceInplay++;
          return 11;
          break;
        case 1:
          return "imgs/blackjack/deck/AS.jpg";
          break;
      }

  }
}

//pre: deck = list of cards
//shuffles the deck of cards
//post: returns the list that is now shuffled

function shuffleDeck(deck)
{
  let temp;
  let randomPosition;
  let position = deck.length;
  while (position != 0)
  {
    randomPosition = Math.floor(Math.random() * position);
    position--;
    temp = deck[position];
    deck[position] = deck[randomPosition];
    deck[randomPosition] = temp;
  }
  return deck;
}

//pre: n = the current count
//checks if ace is in play and if 11 should turn to 1
//post: return the correct number of the current count
function aCheck(n)
{
  if (aceInplay > 0)
  {
    if (n > 21)
    {
      n = n - 10;
      aceInplay--;
    }
  }
  return n;
}


//pre: state of the game
//post: compute the action of the current state then waits for next state
function play(state)
{
  switch(state)
  {
    case "hit":
      if (split1A == true)
      {
        split1 = split1 + cards(deck[posInDeck],0);
        pCount = aCheck(split1);
        if (hitCount == 0)
        {
          document.getElementById("pCard2Img").src =cards(deck[posInDeck],1);

        }
        else {
          document.getElementById("pHit" + hitCount + "Img").src =cards(deck[posInDeck],1);
        }
        posInDeck++;
        hitCount++;
        document.getElementById("player").innerHTML ="Player:" + split1;
        if (split1 < 22)
        {
          //hit or stand

          document.getElementById("log").innerHTML = "You can hit or stand";

        }
        else {
          //first hand bust
          split1A = false;
          //start second hand
          split2A = true;
          document.getElementById("log").innerHTML = "Your first hand has bust starting second hand";
        }

      }
      else if (split2A == true)
      {
        split2 = split2 + cards(deck[posInDeck],0);
        pCount = aCheck(split2);
        document.getElementById("pHitS" + hitSCount + "Img").src =cards(deck[posInDeck],1);
        posInDeck++;
        hitSCount++;
        document.getElementById("player").innerHTML = "Player: " + split2;
        if (split2 < 22)
        {
          //hit or stand
          document.getElementById("log").innerHTML = "You can hit or stand";

        }
        else {
          //bust
          split2A = false;
          //ends the game
          aceInplay = 0;
          dCount = cards(dCard1,0) + cards(dCard2,0);

          hitCount = 1;
          dealerPlay();
        }
      }
      else {
        pCount = pCount + cards(deck[posInDeck],0);
        pCount = aCheck(pCount);
        document.getElementById("pHit" + hitCount + "Img").src = cards(deck[posInDeck],1);
        posInDeck++;
        hitCount++;
        document.getElementById("player").innerHTML = "Player: " + pCount;
        if (pCount == 21)
        {
          document.getElementById("log").innerHTML = "You got 21, dealers turn to play";
          aceInplay = 0;
          dCount = cards(dCard1,0) + cards(dCard2,0);

          hitCount = 1;
          dealerPlay();
        }
        else if (pCount < 21)
        {
          //hit or stand
          document.getElementById("log").innerHTML = "You can hit or stand "
        }
        else {
          //lost
          document.getElementById("log").innerHTML = "You have busted with " + pCount;
          endGame(pCount, dCount);
        }

      }
      break;
    case "stand":
      if (split1A == true)
      {
        split1A = false;
        //start second hand
        split2A = true;
        document.getElementById("log").innerHTML = "Hit or stand on your second hand.";
        // you are now working with other set

      }
      else {
        aceInplay = 0;
        dCount = cards(dCard1,0) + cards(dCard2,0);

        hitCount = 1;
        dealerPlay();
      }

      break;
    case "split":
      document.getElementById("split").disabled = true;
      document.getElementById("log").innerHTML = "You have chose to split. Hit or stand on your first hand.";
      document.getElementById("pHitS1Img").src = cards(pCard2, 1);
      document.getElementById("pCard2Img").src = "imgs/blackjack/deck/white.jpg";
      split1 = cards(pCard1,0);
      split2 = cards(pCard2,0);
      document.getElementById("player").innerHTML = split1;
      split = true;
      split1A = true;
      hitCount = 0;
      break;
    case "double":
      pCount = pCount + cards(deck[posInDeck],0);
      document.getElementById("pHit1Img").src = cards(deck[posInDeck],1);
      pCount = aCheck(pCount);
      posInDeck++;
      document.getElementById("player").innerHTML = "Player: " + pCount;

      if (pCount < 22)
      {
        aceInplay = 0;
        dCount = cards(dCard1,0) + cards(dCard2,0);

        hitCount = 1;
        dealerPlay();
      }
      else
      {
        //bust
        document.getElementById("log").innerHTML = "You have bust with " + pCount;
        document.getElementById("hit").disabled = true;
        document.getElementById("stand").disabled = true;
        document.getElementById("double").disabled = true;
        document.getElementById("play").disabled = false;
      }
      break;
    case "play":
      document.getElementById("hit").disabled = false;
      document.getElementById("stand").disabled = false;
      document.getElementById("double").disabled = false;
      document.getElementById("play").disabled = true;
      document.getElementById("split").disabled = true;

      posInDeck++;
      cutCount++;

      pCard1 = deck[posInDeck];
      posInDeck++;
      pCard2 = deck[posInDeck];
      posInDeck++;
      dCard1 = deck[posInDeck];
      posInDeck++;
      dCard2 = deck[posInDeck];
      posInDeck++;


      pCount = cards(pCard1,0) + cards(pCard2,0);
      pCount = aCheck(pCount);
      document.getElementById("player").innerHTML = "Player: " + pCount;

      document.getElementById("dealer").innerHTML = "Dealer";
      document.getElementById("pCard1Img").src = cards(pCard1,1);
      document.getElementById("pCard2Img").src = cards(pCard2,1);
      document.getElementById("dCard1Img").src = cards(dCard1,1);

      if (pCount == 21)
      {
        document.getElementById("log").innerHTML = "Blackjack you have won!"
        document.getElementById('hit').disabled = true;
        document.getElementById("stand").disabled = true;
        document.getElementById("double").disabled = true;
        document.getElementById("play").disabled = false;
      }
      else if (pCard1.charAt(0) == pCard2.charAt(0)) {
        document.getElementById("split").disabled = false;
        document.getElementById("log").innerHTML = "Hit, Stand, Double Down, Split";
      }
      else
      {
        document.getElementById("log").innerHTML = "Hit, Stand, Double Down";
      }
      break;

  }
}


//Pre:None
//plays blackjack for the dealer based on the dealer rules
//Post:calls the endGame function
function dealerPlay()
{

  document.getElementById("dCard2Img").src = cards(dCard2,1);
  dCount = aCheck(dCount);
  document.getElementById("dealer").innerHTML = "Dealer: " + dCount;
  if (dCount < 17)
  {
    dCount = dCount + cards(deck[posInDeck],0);

    document.getElementById("dHit" + hitCount + "Img").src = cards(deck[posInDeck],1);
    posInDeck++;
    hitCount++;
    dealerPlay();

  }
  else {
    if (split == true)
    {
      document.getElementById("log").innerHTML ="First hand ---- " + endGame(split1, dCount);
      document.getElementById("log2").innerHTML ="Second hand ---- " + endGame(split2, dCount);

    }
    else {
      document.getElementById("log").innerHTML = endGame(pCount, dCount);
    }
  }
}


//pre: p = players count, d = dealers count
//takes in the 2 players counts and determinds the winner.
//post: returns the result of the game as a string
function endGame(p, d)
{
  document.getElementById('hit').disabled = true;
  document.getElementById("stand").disabled = true;
  document.getElementById("double").disabled = true;
  document.getElementById("play").disabled = false;

  if (p > 21)
  {
    //lost
    return  "You have bust with " + p
  }
  else if (d > 21)
  {
    //win
    return  "You have won"
  }
  else if (p == d)
  {
    // push
    return  "You have pushed with " + p
  }
  else if (p == 21)
  {
    // win
    return  "You have won"
  }
  else if (d == 21)
  {
    //lost
    return  "You have lost"
  }
  else if (p > d)
  {
    //win
    return  "You have won"
  }
  else if (d > p)
  {
    //lost
    return "You have lost"
  }
  else if (p == d)
  {
    //push
    return " You have pushed with " + p
  }
}


//controlls the buttons
document.addEventListener("DOMContentLoaded", () =>
{
  document.getElementById('hit').addEventListener('click', function(){
      play("hit");
    })
  document.getElementById('stand').addEventListener('click', function(){
      play("stand");
  })
  document.getElementById('split').addEventListener('click', function(){
      play("split");
  })
  document.getElementById('double').addEventListener('click', function(){
      play("double");
  })
  document.getElementById('play').addEventListener('click', function(){
      reset();
      play("play");
  })

//pre: none
//reset function to reset the game to that starting state
//post: game is reset for next round
function reset()
{
  document.getElementById("dCard1Img").src = "imgs/blackjack/deck/white.jpg";
  document.getElementById("dCard2Img").src = "imgs/blackjack/deck/white.jpg";
  document.getElementById("pCard1Img").src = "imgs/blackjack/deck/white.jpg";
  document.getElementById("pCard2Img").src = "imgs/blackjack/deck/white.jpg";

  for (let i = 1; i<=4; i++)
  {
    document.getElementById("pHit" + i + "Img").src = "imgs/blackjack/deck/white.jpg";
    document.getElementById("dHit" + i + "Img").src = "imgs/blackjack/deck/white.jpg";
  }

  for (let i = 1; i<=6; i++)
  {
    document.getElementById("pHitS" + i + "Img").src = "imgs/blackjack/deck/white.jpg";
  }
  hitSCount = 2;
  hitCount = 1;
  pCount = 0;
  dCount = 0;
  hitCount = 1;
  if (cutCount == 10)
  {
    posInDeck = 0;
    shuffleDeck(deck);
    cutCount = 1;
  }
  else if (cutCount == 0)
  {
    shuffleDeck(deck);
    posInDeck = 0;
  }
}
})
