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
var pACount = 0;
var dACount = 0;
var aceCheck = false;
var split1A = false;
var split2A = false;
var split = false;
var split1 = 0;
var split2 = 0;
var cutCount = 0;
document.getElementById('hit').disabled = true;
document.getElementById("stand").disabled = true;
document.getElementById("double").disabled = true;
document.getElementById("split").disabled = true;
document.getElementById("play").disabled = false;

function cards(card, n)
{
  switch(card)
  {
    //aceCheck = false;
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
          return 11;
          break;
        case 1:
          return "imgs/blackjack/deck/AC.jpg";
          break;
      }
    case "aD":
      // aceCheck = true;
      switch (n)
      {
        case 0:
          return 11;
          break;
        case 1:
          return "imgs/blackjack/deck/AD.jpg";
          break;
      }
    case "aH":
      // aceCheck = true;
      switch (n)
      {
        case 0:
          return 11;
          break;
        case 1:
          return "imgs/blackjack/deck/AH.jpg";
          break;
      }
    case "aS":
      // aceCheck = true;
      switch (n)
      {
        case 0:
          return 11;
          break;
        case 1:
          return "imgs/blackjack/deck/AS.jpg";
          break;
      }

  }
}
var dCard1, dCard2, pCard1, pCard2, posInDeck, hitCount;

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

function play(state)
{
  switch(state)
  {
    case "hit":
      if (split1A == true)
      {
        split1 = split1 + cards(deck[posInDeck],0);
        if (hitCount == 0)
        {
          document.getElementById("pCard2Img").src = "Player: " + cards(deck[posInDeck],1);

        }
        else {
          document.getElementById("pHit" + hitCount + "Img").src = "Player: " + cards(deck[posInDeck],1);
        }
        posInDeck++;
        hitCount++;
        document.getElementById("player").innerHTML = split1;
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
        document.getElementById("pHitS" + hitSCount + "Img").src = "Player: " + cards(deck[posInDeck],1);
        posInDeck++;
        hitSCount++;
        document.getElementById("player").innerHTML = split2;
        if (split2 < 22)
        {
          //hit or stand
          document.getElementById("log").innerHTML = "You can hit or stand";

        }
        else {
          //bust
          split2A = false;
          //ends the game
          dealerPlay();
        }
      }
      else {
        pCount = pCount + cards(deck[posInDeck],0);
        document.getElementById("pHit" + hitCount + "Img").src = cards(deck[posInDeck],1);
        posInDeck++;
        hitCount++;
        document.getElementById("player").innerHTML = "Player: " + pCount;
        if (pCount == 21)
        {
          document.getElementById("log").innerHTML = "You got 21, dealers turn to play";
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
      //document.getElementById("log").innerHTML = "You have chose to double down."
      pCount = pCount + cards(deck[posInDeck],0);
      posInDeck++;
      document.getElementById("player").innerHTML = "Player: " + pCount;
      if (pCount < 22)
      {
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
      pCard1 = deck[0];
      dCard1 = deck[1];
      pCard2 = deck[2];
      dCard2 = deck[3];
      pCard1 = deck[posInDeck];
      posInDeck++;
      pCard2 = deck[posInDeck];
      posInDeck++;
      dCard1 = deck[posInDeck];
      posInDeck++;
      dCard2 = deck[posInDeck];
      posInDeck++;



      pCount = cards(pCard1,0) + cards(pCard2,0);
      dCount = cards(dCard1,0) + cards(dCard2,0);
      document.getElementById("player").innerHTML = "Player: " + pCount;
      document.getElementById("dealer").innerHTML = "Dealer: " + cards(dCard1,0);
      document.getElementById("pCard1Img").src = cards(pCard1,1);
      document.getElementById("pCard2Img").src = cards(pCard2,1);
      document.getElementById("dCard1Img").src = cards(dCard1,1);

      if (pCount == 21)
      {
        document.getElementById("log").innerHTML = "Blackjack you have won!"
      }
      else if (cards(pCard1,0) == cards(pCard2,0)) {
        document.getElementById("split").disabled = false;
        document.getElementById("log").innerHTML = "Hit, Stand, Double Down, Split";
      }
      else
      {
        document.getElementById("log").innerHTML = "Hit, Stand, Double Down";
      }
      break;
    case "insurance":
      break;
  }
}

function dealerPlay()
{
  // if (dCard1 == "aC" || dCard1 == "aH" || dCard1 == "aD" || dCard1 == "aS")
  // {
  //   if (dCount > 16 && dCount < 22)
  //   {
  //     // go to end
  //   }
  // }
  hitCount = 1;
  document.getElementById("dCard2Img").src = cards(dCard2,1);
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
  document.getElementById('insurance').addEventListener('click', function(){
      play("insurance");
  })

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
  if (cutCount == 6)
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
//have one ace bool that tells if an ace is in player
//have another ace bool to see if there is one that is current


})
