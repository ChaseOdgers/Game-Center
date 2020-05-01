//This file deals with all the adveries which will act as mobs in the tower defense

function adversaries(student){
  this.modType = "adversaries"
  this.student = student;
  this.deterioration = getRandomInt2(5, 15);
  this.type = getRandomAdversaryType();
  if(this.type == "MH")
  {
    this.name = getRandomMHAdversary();
  }
  else if(this.type == "PH")
  {
    this.name = getRandomPHAdversary();
  }
  else if(this.type == "sleep")
  {
    this.name = getRandomSleepAdversary();
  }
  else if(this.type == "social")
  {
    this.name = getRandomSocialAdversary();
  }
  else if(this.type == "study")
  {
    this.name = getRandomStudyAdversary();
  }
  this.location = 4;//The location will start at the end of the row
}

adversaries.prototype.modifyStudent = function(){
  console.log(this.deterioration);
  this.student.modifyStudent(-this.deterioration, this.type);
}

adversaries.prototype.moveNextBlock = function(){
  if(this.location >= 0)
  {
    this.location -= 1;
  }

  if(this.deterioration>0)
  {
    if(this.type == "MH")
    {
      this.deterioration -= ((this.student.mentalHealth)/10);
    }
    else if(this.type == "PH")
    {
      this.deterioration -= ((this.student.physicalHealth)/10);
    }
    else if(this.type == "sleep")
    {
      this.deterioration -= ((this.student.sleep)/10);
    }
    else if(this.type == "social")
    {
      this.deterioration -= ((this.student.social)/10);
    }
    else if(this.type == "study")
    {
      this.deterioration -= ((this.student.study)/10);
    }
  }

}

function getRandomMHAdversary(){
  let arr = [
    "Burn out",
    "Insecurity",
    "Loneliness",
    "Imposter syndrome",
    "Laziness",
    "Stress"
  ];
  let i = getRandomInt(arr.length);
  return arr[i];
}

function getRandomPHAdversary(){
  let arr = [
    "Sore Muscle",
    "Food poisining",
    "Hangover",
    "Flu",
    "Common cold"
  ];
  let i = getRandomInt(arr.length);
  return arr[i];
}

function getRandomSleepAdversary(){
  let arr = [
    "Phone distraction",
    "Roommate threw a party",
    "Stress",
    "1 am already?!",
    "Insomnia",
    "Caffeine",
    "All nighter"
  ];
  let i = getRandomInt(arr.length);
  return arr[i];
}

function getRandomSocialAdversary(){
  let arr = [
    "Social anxiety",
    "Rejected by your crush",
    "Rejected by your friends",
    "Teacher is mean",
    "Insecurity",
    "No friends"
  ];
  let i = getRandomInt(arr.length);
  return arr[i];
}

function getRandomStudyAdversary(){
  let arr = [
    "Phone distraction",
    "Catching up",
    "Difficult subject",
    "Distracting classmates",
    "Laziness"
  ];
  let i = getRandomInt(arr.length);
  return arr[i];
}



function getRandomAdversaryType(){
  let arr = ["MH", "PH", "sleep", "social", "study"];
  let i = getRandomInt(4);
  return arr[i];
}
