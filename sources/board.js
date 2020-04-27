class Board{
  constructor(){

  }
  show(){
    var rows = 0
    var color1 = 'white'
    var color2 = 'black'
    while(rows < 8)
      {
        //if the row is even it starts black, white, odd, it starts white black
        if(rows % 2 == 0)
          {
            color1 = 'black'
            color2 = 'white'
          }
        else
          {
            color1 = 'white'
            color2 = 'black'
          }
        var cols = 0

        //this fills the columns with color and creates board
        while (cols < 8)
          {
            if(cols % 2 == 0)
              {
                fill(color1)
              }
            else
              {
                fill(color2)
              }
              stroke(0);
              strokeWeight(1);
            rect(cols * 50, rows * 50, 50, 50)
            cols = cols +1
          }
        rows = rows + 1
      }
  }
}
