/*The student is the core of keeping track of data. All the functions are centered
on the student object. Which basically boils down to that all function must have
a function that only takes in the student as a parameter and modify it using
student.prototype.modifyStudent */

function student(type, currentGrade, MH, PH, sleep, social, study){
  this.type = type;
  this.grade = currentGrade;
  this.mentalHealth = MH;
  this.physicalHealth = PH;
  this.sleep = sleep;
  this.social = social;
  this.study = study;
  this.willpower = 100;
}

student.prototype.GameOver = function(){
  if(this.grade < 0 || this.mentalHealth < 0 || this.physicalHealth < 0 || this.sleep < 0 || this.social < 0 || this.study < 0 || this.willpower < 0)
  {
    return true;
  }
  else
  {
    return false;
  }

}


student.prototype.modifyStudent = function(value, where){
  if(where == "type")
  {
    this.type = value;
  }
  else if(where == "grade")
  {
    this.grade += value;
  }
  else if(where == "MH")
  {
    this.mentalHealth += value;
  }
  else if(where == "PH")
  {
    this.physicalHealth += value;
  }
  else if(where == "sleep")
  {
    this.sleep += value;
  }
  else if(where == "social")
  {
    this.social += value;
  }
  else if(where == "study")
  {
    this.study += value;
  }
  else if(where == "willpower")
  {
    this.willpower += value;
  }
}
