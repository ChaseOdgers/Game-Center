//document.addEventListener("DOMContentLoaded", () =>{
  function updateGameDisplay(modArr, student)
  {
    document.getElementById("event-list").innerHTML = modArr.join(", ");
    document.getElementById("stats").innerHTML = "";



    updateGrade(student);
    updateStudentStats(student);
  }

    function updateAdvesaryPosition(adversaries)
    {
      if(adveries.length < 4)
      {
        console.log(adversaries.type + (adversaries.location+1));
        document.getElementById(adversaries.type + (adversaries.location+1)).innerHTML = "";
      }

        document.getElementById(adversaries.type + adversaries.location).innerHTML = this.name;

    }

    function updateGrade(student){

    }

    function updateStudentStats(student)
    {

    }


    function removeFromEventTab(Event){

    }

    function addToEventTab(Event){

    }


//});
