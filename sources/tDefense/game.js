function gameStart(student){

  let studentModifications = [];



/*---------------------Player Controlled Button Listeners--------------------*/
  document.getElementById("smallCommitMH").addEventListener("click", () =>
  {makeCommitment("small", "MH", "commitments");});
  document.getElementById("smallCommitPH").addEventListener("click", () =>
  {makeCommitment("small", "PH", "commitments");});
  document.getElementById("smallCommitSleep").addEventListener("click", () =>
  {makeCommitment("small", "MH", "commitments");});
  document.getElementById("smallCommitSocial").addEventListener("click", () =>
  {makeCommitment("small", "MH", "commitments");});
  document.getElementById("smallCommitStudy").addEventListener("click", () =>
  {makeCommitment("small", "MH", "commitments");});

  document.getElementById("mediumCommitMH").addEventListener("click", () =>
  {makeCommitment("medium", "MH", "commitments");});
  document.getElementById("mediumCommitPH").addEventListener("click", () =>
  {makeCommitment("medium", "MH", "commitments");});
  document.getElementById("mediumCommitSleep").addEventListener("click", () =>
  {makeCommitment("medium", "MH", "commitments");});
  document.getElementById("mediumCommitSocial").addEventListener("click", () =>
  {makeCommitment("medium", "MH", "commitments");});
  document.getElementById("mediumCommitStudy").addEventListener("click", () =>
  {makeCommitment("medium", "MH", "commitments");});

  document.getElementById("bigCommitMH").addEventListener("click", () =>
  {makeCommitment("big", "MH", "commitments");});
  document.getElementById("bigCommitPH").addEventListener("click", () =>
  {makeCommitment("big", "MH", "commitments");});
  document.getElementById("bigCommitSleep").addEventListener("click", () =>
  {makeCommitment("big", "MH", "commitments");});
  document.getElementById("bigCommitSocial").addEventListener("click", () =>
  {makeCommitment("big", "MH", "commitments");});
  document.getElementById("bigCommitStudy").addEventListener("click", () =>
  {makeCommitment("big", "MH", "commitments");});
/*----------------------------------------------------------------------------*/


  for(let i = 0; i<75; i++)
  {

    for(let j = 0; j<5; j++)
    {
      setTimeout(frameEvent(adversaries, commitments, lifeEvets, student), 1000);
    }
    if(getRandomInt(100)==42)
    {
      generateLifeEvent(lifeEvets);
    }
  }



}


function getRandomInt(max){
  return Math.floor(math.random() * Math.floor(max));
}


function frameEvent(adversaries, commitments, lifeEvents, student){

  moveAdversaries(adversaries, student);

  for(let i = 0; i<studentModifications.length; i++)
  {
    if(studentModifications[i] == commitment)
    {

    }
    else if(studentModifications[i] == adversaries)
    {

    }
    else if(studentModifications[i] == lifeEvents)
    {

    }
  }



}
