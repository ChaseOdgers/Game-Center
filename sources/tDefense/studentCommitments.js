

function generateCommitmentName(size)
{
  if(size == "small")
  {
    let listOfSmallCommitments = [
      "Going to bed early"
    ]
  }
  else if(size == "medium")
  {

  }
  else if(size == "big")
  {

  }
}

function commitment(scope, type, student){
  this.student = student;
  this.scope = scope;
  this.type = type;

  if(scope == "small")
  {
    this.length = 5;
  }
  else if(scope == "medium")
  {
    this.length = 30;
  }
  else if(scope == "big")
  {
    this.length = 150;
  }
}

commitment.prototype.fulfill = function(student){
  if(this.scope == "small")
  {
    this.student.modifyStudent(-1, willpower)
  }
  else if(this.scope == "medium")
  {
    this.student.modifyStudent(-0.5, willpower)
  }
  else if(this.scope == "big")
  {
    this.student.modifyStudent(-0.1, willpower)
  }

  if(this.type == "MH")
  {

  }
  else if(this.type == "PH")
  {

  }
  else if(this.type == "sleep")
  {

  }
  else if(this.type == "social")
  {

  }
  else if(this.type == "study")
  {

  }

  this.length -= 1;
}
