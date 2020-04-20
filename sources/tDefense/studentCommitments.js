

function makeCommitment(size, type, list){
  if(size == "small")
  {
    if(type == "MH")
    {

    }
    else if(type == "PH")
    {

    }
    else if(type == "sleep")
    {

    }
    else if(type == "social")
    {

    }
    else if(type == "study")
    {

    }
  }
  else if(size == "medium")
  {
    if(type == "MH")
    {

    }
    else if(type == "PH")
    {

    }
    else if(type == "sleep")
    {

    }
    else if(type == "social")
    {

    }
    else if(type == "study")
    {

    }
  }
  else if(size == "big")
  {
    if(type == "MH")
    {

    }
    else if(type == "PH")
    {

    }
    else if(type == "sleep")
    {

    }
    else if(type == "social")
    {

    }
    else if(type == "study")
    {

    }
  }
}

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
