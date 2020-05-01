  function updateGameDisplay(modArr, student)
  {
    let eventList ="";
    let studentStat="";
    for(let i = 0;i<modArr.length;i++)
    {
      let j = modArr[i].name;
      eventList += "<li>"+j+"</li>"
    }

    let stuArr = [
      "<li>Grade: ", student.grade, "</li>",
      "<li>Mental Health: ", student.mentalHealth, "</li>",
      "<li>Physcial Health: ", student.physicalHealth, "</li>",
      "<li>Sleep: ", student.sleep, "</li>",
      "<li>Social: ", student.social, "</li>",
      "<li>Study: ", student.study, "</li>",
      "<li>Willpower: ", student.willpower, "</li>",
    ]

    for(let i = 0; i < stuArr.length; i++)
    {
      let j = stuArr[i];
      studentStat += j;
    }




      document.getElementById("event-list").innerHTML = eventList;
      document.getElementById("stats").innerHTML = studentStat;






  }

  function updateAdvesaryPosition(adversaries)
  {
    if(adversaries.length < 5)
    {
      document.getElementById(adversaries.type + (adversaries.location+1)).innerHTML = "";
    }

      document.getElementById(adversaries.type + adversaries.location).innerHTML = adversaries.name;
  }
