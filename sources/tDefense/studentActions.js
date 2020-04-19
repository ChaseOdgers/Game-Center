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


student.prototype.modifyStudent = function(value, where){
  if(where == "type")
  {
    this.type == value;
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
