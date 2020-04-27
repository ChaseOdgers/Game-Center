class Piece{
  constructor(x,y,r,color, king, clicked)
    {
      this.x = x;
      this.y = y;
      this.r = r;
      this.color = color;
      this.king = king;
      this.clicked = clicked;
    }

  show(){
      if (this.king == true)
        {
          stroke(255);
          strokeWeight(7);
          fill(this.color);
          ellipse(this.x,this.y,this.r*2)
        }
      else
        {
          stroke(255);
          strokeWeight(1);
          fill(this.color);
          ellipse(this.x,this.y,this.r*2)
        }
    }

  getColor(){
    return this.color;
  }
  setKing(){
    this.king = true;
  }

  getXPosition(){
    return this.x;
  }

  getYPosition(){
    return this.y
  }

  setXPosition(x){
    this.x = x;
  }

  setYPosition(y){
    this.y = y;
  }


 clicked(x,y){
    let d = dist(x, y, this.x, this.y)
    if (d<this.r){
      console.log("clicked on bubble!" );
        }
  }
}
