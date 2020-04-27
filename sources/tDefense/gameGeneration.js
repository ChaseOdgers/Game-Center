//The game is generated here as soon as the player chooses which type of student they are

document.addEventListener("DOMContentLoaded",() => {

  document.getElementById("aStudent").addEventListener("click", function(){

    document.getElementById("startingMenu").remove();
    document.getElementById("mainHeading").innerHTML = "The Good Student";
    document.getElementById("mainGame").style.visibility = "visible";

    let aStudent = new student("A Student", 90, 90, 90, 90, 90, 90);
    gameStart(aStudent);



  });

  document.getElementById("cStudent").addEventListener("click", function(){

    document.getElementById("startingMenu").remove();
    document.getElementById("mainHeading").innerHTML = "The Good Student";
    document.getElementById("mainGame").style.visibility = "visible";

    let cStudent = new student("C Student", 80, 80, 60, 70, 60, 60);
    gameStart(cStudent);



  });

  document.getElementById("partyAnimal").addEventListener("click", function(){

    document.getElementById("startingMenu").remove();
    document.getElementById("mainHeading").innerHTML = "The Good Student";
    document.getElementById("mainGame").style.visibility = "visible";

    let partyAnimal = new student("Party Animal", 50, 40, 40, 100, 30, 50);
    gameStart(partyAnimal);


  });

  document.getElementById("engineeringStudent").addEventListener("click", function(){

    document.getElementById("startingMenu").remove();
    document.getElementById("mainHeading").innerHTML = "The Good Student";
    document.getElementById("mainGame").style.visibility = "visible";

    let engineeringStudent = new student("Engineering Student", 0, 0, 0, 0, 0, 0);
    gameStart(engineeringStudent);


  });


});
