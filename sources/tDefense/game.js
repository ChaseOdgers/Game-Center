function gameStart(student){
  let adversaries = [];
  let commitments = [];
  let lifeEvets = [];

  document.getElementById("smallCommitMH").addEventListener("click" () =>
  {makeCommitment(small, MH, commitments);});


  for(let i = 0; i<75; i++)
  {

    for(let j = 0; j<5; j++)
    {
      setTimeout(frameEvent(), 1000);
    }
    if(getRandomInt(100)==42)
    {
      generateLifeEvent(lifeEvets[]);
    }
  }



}


function getRandomInt(max){
  reutn Math.floor(math.random() * Math.floor(max));
}


function frameEvent(){

}
