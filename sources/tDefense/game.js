/*This is where the center of the game where all the game actions happen.
This is sequentially what happens after the gameGeneration.js
In this file, the frame by frame is controlled and student object is kept track of.*/

function gameStart(student){

  let studentModifications = [];



/*---------------------Player Controlled Button Listeners--------------------*/
  document.getElementById("smallCommitMH").addEventListener("click", () =>
  {studentModifications.push(new commitment("small", "MH", "student");});
  document.getElementById("smallCommitPH").addEventListener("click", () =>
  {studentModifications.push(new commitment("small", "PH", "student");});
  document.getElementById("smallCommitSleep").addEventListener("click", () =>
  {studentModifications.push(new commitment("small", "MH", "student");});
  document.getElementById("smallCommitSocial").addEventListener("click", () =>
  {studentModifications.push(new commitment("small", "MH", "student");});
  document.getElementById("smallCommitStudy").addEventListener("click", () =>
  {studentModifications.push(new commitment("small", "MH", "student");});

  document.getElementById("mediumCommitMH").addEventListener("click", () =>
  {studentModifications.push(new commitment("medium", "MH", "student");});
  document.getElementById("mediumCommitPH").addEventListener("click", () =>
  {studentModifications.push(new commitment("medium", "MH", "student");});
  document.getElementById("mediumCommitSleep").addEventListener("click", () =>
  {studentModifications.push(new commitment("medium", "MH", "student");});
  document.getElementById("mediumCommitSocial").addEventListener("click", () =>
  {studentModifications.push(new commitment("medium", "MH", "student");});
  document.getElementById("mediumCommitStudy").addEventListener("click", () =>
  {studentModifications.push(new commitment("medium", "MH", "student");});

  document.getElementById("bigCommitMH").addEventListener("click", () =>
  {studentModifications.push(new commitment("big", "MH", "commitments");});
  document.getElementById("bigCommitPH").addEventListener("click", () =>
  {studentModifications.push(new commitment("big", "MH", "commitments");});
  document.getElementById("bigCommitSleep").addEventListener("click", () =>
  {studentModifications.push(new commitment("big", "MH", "commitments");});
  document.getElementById("bigCommitSocial").addEventListener("click", () =>
  {studentModifications.push(new commitment("big", "MH", "commitments");});
  document.getElementById("bigCommitStudy").addEventListener("click", () =>
  {studentModifications.push(new commitment("big", "MH", "commitments");});
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
