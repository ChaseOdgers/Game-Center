

function adversaries(student){
  this.student = student;
  this.name = getRandomAdversaryName();
  this.deterioration = Math.floor(Math.random() * 15) + 5
  this.type = getRandomAdversaryType();
  this.location = 5;//The location will start at the end of the row
}

adversaries.prototype.modifyStudent = function(){
  this.student.modifyStudent(this.deterioration, this.type);
}

adversaries.prototype.moveNextBlock = function(){
  if(this.location >= 0)
  {
    this.location -= 1;
  }
}

function getRandomAdversaryName(){
  let arr = [
    "Phone distraction",
    "Party",
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
