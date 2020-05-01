function lifeEvent(student){
  this.modType = "lifeEvent";
  this.student = student;
  this.length = 30;

  if(getRandomInt(2)==1)
  {
    this.type = "negative";
    this.name = generateRandomBadLifeEventName();
  }
  else
  {
    this.type = "positive";
    this.name = generateRandomGoodLifeEventName();
  }

}

function generateRandomBadLifeEventName(){
  let arr = [
    "Car accident",
    "Coronavirus",
    "You died"
  ];
  let i = getRandomInt(arr.length);
  return arr[i];


}

function generateRandomGoodLifeEventName(){
let arr = [
  "Won the lottery",
  "Planned a vacation",
  "Had a good day"
];
let i = getRandomInt(arr.length);
return arr[i];

}

lifeEvent.prototype.modifyStudent = function(){
  if(this.type == "positive")
  {
    this.student.modifyStudent(0.2, "willpower");
    this.length -= 0.2;
  }
  else
  {
    this.student.modifyStudent(-0.2, "willpower");
    this.length -= 0.2;
  }
}
