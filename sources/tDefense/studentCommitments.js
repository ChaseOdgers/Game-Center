

function generateCommitmentName(size)
{
  if(size == "small")
  {
    let listOfSmallCommitments = [
      "Going to bed early",
      "Moving study area",
      "Turning your phone to do not disturb",
      "Finding a study group",
      "Meditate"
    ]
    let i = getRandomInt(listOfSmallCommitments.length);
    return listOfSmallCommitments[i];
  }
  else if(size == "medium")
  {
    let listOfMediumCommitments = [
      "Working out",
      "Cutting less on caffeine",
      "Working together with a buddy",
      "Ask professor for help"
    ]
    let i = getRandomInt(listOfMediumCommitments.length);
    return listOfMediumCommitments[i];
  }
  else if(size == "big")
  {
    let listofBigCommitments = [
      "Work out everyday",
      "Meditate everyday",
    ]
    let i = getRandomInt(listOfSmallCommitments.length);
    return listOfMediumCommitments[i];

  }
}

function commitment(scope, type, student){
  this.modType = "commitment"
  this.student = student;
  this.scope = scope;
  this.type = type;

  if(scope == "small")
  {
    this.length = 5;
    this.name = generateCommitmentName("small");
  }
  else if(scope == "medium")
  {
    this.length = 30;
    this.name = generateCommitmentName("medium");
  }
  else if(scope == "big")
  {
    this.length = 150;
    this.name = generateCommitmentName("big");
  }
}

//This function will modify the student
commitment.prototype.fulfill = function(){
  if(this.scope == "small")
  {
    this.student.modifyStudent(-1, "willpower");

    if(this.type == "MH")
    {
      this.student.modifyStudent(1, "MH");
    }
    else if(this.type == "PH")
    {
      this.student.modifyStudent(1, "PH");
    }
    else if(this.type == "sleep")
    {
      this.student.modifyStudent(1, "sleep");
    }
    else if(this.type == "social")
    {
      this.student.modifyStudent(1, "social");
    }
    else if(this.type == "study")
    {
      this.student.modifyStudent(1, "study");
    }
  }
  else if(this.scope == "medium")
  {
    this.student.modifyStudent(-0.5, "willpower");

    if(this.type == "MH")
    {
      this.student.modifyStudent(0.5, "MH");
    }
    else if(this.type == "PH")
    {
      this.student.modifyStudent(0.5, "PH");
    }
    else if(this.type == "sleep")
    {
      this.student.modifyStudent(0.5, "sleep");
    }
    else if(this.type == "social")
    {
      this.student.modifyStudent(0.5, "social");
    }
    else if(this.type == "study")
    {
      this.student.modifyStudent(0.5, "study");
    }
  }
  else if(this.scope == "big")
  {
    this.student.modifyStudent(-0.1, "willpower");

    if(this.type == "MH")
    {
      this.student.modifyStudent(0.1, "MH");
    }
    else if(this.type == "PH")
    {
      this.student.modifyStudent(0.1, "PH");
    }
    else if(this.type == "sleep")
    {
      this.student.modifyStudent(0.1, "sleep");
    }
    else if(this.type == "social")
    {
      this.student.modifyStudent(0.1, "social");
    }
    else if(this.type == "study")
    {
      this.student.modifyStudent(0.1, "study");
    }
  }


  this.length -= 1;
}
