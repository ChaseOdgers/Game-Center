function student(type, currentGrade, MH, PH, sleep, social, study){
  this.type = type;
  this.grade = currentGrade;
  this.mentalHealth = MH;
  this.physicalHealth = PH;
  this.sleep = sleep;
  this.social = social;
  this.study = study;

  let willpower = 100;
}


student.prototype.modType = (val) => {this.type = val;}
student.prototype.modGrade = (val) => {this.grade += val;}
student.prototype.modMH = (val) => {this.mentalHealth += val;}
student.prototype.modPH = (val) => {this.physicalHealth += val;}
student.prototype.modSleep = (val) => {this.sleep += val;}
student.prototype.modSocial = (val) => {this.sleep += val;}
student.prototype.modStudy = (val) => {this.study += val;}
student.prototype.modWillpower = (val) => {this.willpower += val;}
