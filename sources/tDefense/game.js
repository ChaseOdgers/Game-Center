/*This is where the center of the game where all the game actions happen.
This is sequentially what happens after the gameGeneration.js
In this file, the frame by frame is controlled and student object is kept track of.*/

function gameStart(student){

  let studentModifications = [];



/*---------------------Player Controlled Button Listeners--------------------*/
  document.getElementById("smallCommitMH").addEventListener("click", () =>
  {studentModifications.push(new makeCommitment("small", "MH", "commitments");});
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

/*
Pre: The student object in the game will be pased to get its stats updated.
Post: All the functions in studentModifications[] get executed and adjusted.
Param: Student object
*/
function frameEvent(adversaries, commitments, lifeEvents, student){

  moveAdversaries(adversaries, student);

  for(let i = 0; i<studentModifications.length; i++)
  {
    if(studentModifications[i] == commitment)
    {

    }
    else if(studentModifications[i] == adversaries)
    {
      if(studentModifications[i].location == 1)
      {
        studentModifications[i].modifyStudent(student);
        studentModifications.splice(i,1);
      }
    }
    else if(studentModifications[i] == lifeEvents)
    {

    }
  }



}

function announceGrade(student){
  alert("Congratulations! You ended the semester with a " + student.grade);
}
