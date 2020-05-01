var pieces = []
var boardArray= [];
var button;
let tileCount = 0;
let clickedTile = -1;
let clickedPiece = -1;
let availableLeft = -1;
let availableRight = -1;
let piecesHighlighted = 0;
let piecehasbeenclicked = 0;
let tempJumped = -1;
let bluecapturecounter = 75;
let redcapturecounter = 75;
let player1PieceCount = 14;
let player2PieceCount = 14;
let winner = -1;
//player 1 is blue, player 2 is orange;
let currentPlayer = -1;
function setup() {
  createCanvas(800, 800);
  resetGame();
}

//CLASSES
//The tile class gives every square printed when board is created its own properties, a number to reference, and x and y coordinate,
//a color and whether or not the tile is occupied, using getters and setters I can determine all information both about a tiles location
//and the location of pieces in respect to said tile, as well as tiles that are available for moves and jumps
class Tile{
  constructor(number, x, y, color,occupied){
    this.color = color;
    this.x = x;
    this.y = y;
    this.number =number;
    this.occupied = occupied;
    this.highlighted = 0;
    this.jumphighlightright = 0;
    this.jumphighlightleft = 0;
    this.jumphighlightbackleft = 0;
    this.jumphighlightbackright = 0;
  }
  getOccupied(){
    //console.log(this.occupied);
    return this.occupied;
  }
  showTile(){
    if(this.highlighted == 0){
      stroke('black');
      strokeWeight(1);
      fill(this.color);
      square(this.x,this.y,50);
    }
    if(this.highlighted == 1){
      stroke('black');
      strokeWeight(1);
      fill(this.color);
      square(this.x,this.y,50);
      fill('green');
      circle(this.x+25,this.y+25,20);
    }
    if(this.jumphighlightright == 1){
      stroke('black');
      strokeWeight(1);
      fill(this.color);
      square(this.x,this.y,50);
      fill('red');
      circle(this.x+25,this.y+25,25);
    }
    if(this.jumphighlightleft == 1){
      stroke('black');
      strokeWeight(1);
      fill(this.color);
      square(this.x,this.y,50);
      fill('red');
      circle(this.x+25,this.y+25,25);
    }
    if(this.jumphighlightbackleft == 1){
      stroke('black');
      strokeWeight(1);
      fill(this.color);
      square(this.x,this.y,50);
      fill('red');
      circle(this.x+25,this.y+25,25);
    }
    if(this.jumphighlightbackright == 1){
      stroke('black');
      strokeWeight(1);
      fill(this.color);
      square(this.x,this.y,50);
      fill('red');
      circle(this.x+25,this.y+25,25);
    }
  }
  checkClick(_x,_y){
    if((((this.x)<(_x))&&((_x)<(this.x+50))&&((this.y)<(_y))&&((_y)<(this.y+50)))&&(this.color == 'black')){
      clickedTile = this.number;
      console.log('Tile clicked: ' + clickedTile);
    }
  }
  getNumber(){
    return this.number;
  }
  showNumber(){
    fill('green');
    text(this.number, this.x+25,this.y+25);
  }

  getXcoord(){
    return this.x;
  }
  getYcoord(){
    return this.y;
  }
  setOccupied(){
    //console.log('Occupied set on: ' + this.number);
    this.occupied = 1;
  }
  setUnoccupied(){
//    console.log('Not occupied: ' + this.number);
    this.occupied = 0;
  }
  getColor(){
    return this.color;
  }
  getHighlightValue(){
    return this.highlighted;
  }
  getJumpHighlightRightValue(){
    return this.jumphighlightright;
  }
  getJumpHighlightLeftValue(){
    return this.jumphighlightleft;
  }
  getJumpHighlightbackRightValue(){
    return this.jumphighlightbackright;
  }
  getJumpHighlightbackLeftValue(){
    return this.jumphighlightbackleft;
  }
  setHighlight(){
    this.highlighted = 1;
  }
  setJumpHighlightRight(){
    this.jumphighlightright = 1;
  }
  setJumpHighlightLeft(){
    this.jumphighlightleft = 1;
  }
  setJumpHighlightbackLeft(){
    this.jumphighlightbackleft = 1;
  }
  setJumpHighlightbackRight(){
    this.jumphighlightbackright = 1;
  }
  setNotHighlighted(){
    this.highlighted = 0;
    this.jumphighlightright = 0;
    this.jumphighlightleft = 0;
    this.jumphighlightbackright =0;
    this.jumphighlightbackleft =0;
  }
}

//the piece class handles all information about the circles printed on the screen, these "pieces" are represented at an x,y location, if 
//they are a king they will display a gold circle in their center, and they also contain their own tilenumber, which allows us to know where,
//the piece is on the board without need for referencing x,y coordinates
class Piece{
  constructor(number,x,y,color,king,tilenumber){
    this.x = x;
    this.y = y;
    this.color = color;
    this.king = 0;
    this.number = number;
    this.tileNumber = tilenumber;
    this.captured = 0;
  }
  showPiece(){
    if(this.king == 0){
      stroke(this.color);
      strokeWeight(1);
      fill(this.color);
      circle(this.x,this.y,40);
    }
    if(this.king == 1){
      stroke(this.color);
      strokeWeight(1);
      fill(this.color);
      circle(this.x,this.y,40);
      fill('gold');
      circle(this.x,this.y,20);
    }
  }
  getXcoord(){
    return this.x;
  }
  getYcoord(){
    return this.y;
  }
  checkClick(_x,_y){
    let d = dist(_x,_y, this.x, this.y);
    if(d < 20){
      console.log('Piece Clicked: ' + this.number);
      clickedPiece = this.number;
      piecehasbeenclicked = 1;
    }
  }
  getColor(){
      return this.color;
  }
  setXcoord(_x){
    this.x = _x;
  }
  setYcoord(_y){
    this.y = _y;
  }
  setPieceTileNumber(_z){
    this.tileNumber = _z;
  }
  getNumber(){
    return this.tileNumber;
  }
  setCaptured(){
    this.captured = 1;
    if(this.color == 'blue'){
      this.x =450;
      this.y = bluecapturecounter;
      bluecapturecounter = bluecapturecounter+25;
      player1PieceCount--;
    }
    if(this.color == 'orange'){
      this.x = 500;
      this.y = redcapturecounter;
      redcapturecounter = redcapturecounter+25;
      player2PieceCount--;
    }
  }
  setKing(){
    this.king = 1;
  }
  getKing(){
    return this.king;
  }
}

//PIECE FUNCTIONS
//The build piece function is a way to hardset the location and color values at the beginning of the program, this could be done
//using loops however during the process of coding it was benificial to be able to start a piece in a location to test specific functionality,
//i.e. when testing the king function I could just 
function buildPieces(){
     pieces[0] = new Piece(0, 25,25,'blue',0,0);
     pieces[1] = new Piece(1,125,25,'blue',0,2);
     pieces[2] = new Piece(2,225,25,'blue',0,4);
     pieces[3] = new Piece(3,325,25,'blue',0,6);
     pieces[4] = new Piece(4,75,75,'blue',0,9);
     pieces[5] = new Piece(5,175,75,'blue',0,11);
     pieces[6] = new Piece(6,275,75,'blue',0,13);
     pieces[7] = new Piece(7,375,75,'blue',0,15);
     pieces[8] = new Piece(8,25,125,'blue',0,16);
     pieces[9] = new Piece(9,125,125,'blue',0,18);
     pieces[10] = new Piece(10,225,125,'blue',0,20);
     pieces[11] = new Piece(11,325,125,'blue',0,22);

     pieces[12] = new Piece(12,75,275,'orange',0,41);
     pieces[13] = new Piece(13,175,275,'orange',0,43);
     pieces[14] = new Piece(14,275,275,'orange',0,45);
     pieces[15] = new Piece(15,375,275,'orange',0,47);

     pieces[16] = new Piece(16,25,325,'orange',0,48);
     pieces[17] = new Piece(17,125,325,'orange',0,50);
     pieces[18] = new Piece(18,225,325,'orange',0,52);
     pieces[19] = new Piece(19,325,325,'orange',0,54);

     pieces[20] = new Piece(20,75,375,'orange',0,57);
     pieces[21] = new Piece(21,175,375,'orange',0,59);
     pieces[22] = new Piece(22,275,375,'orange',0,61);
     pieces[23] = new Piece(23,375,375,'orange',0,63);
}
function showPieces(){
  for(let i=0; i<24;i++){
    pieces[i].showPiece();
  }
}
function hasPieceBeenClicked(_x,_y){
  for(let i=0; i<24; i++){
    pieces[i].checkClick(_x,_y);
  }
}

//TILE FUNCTIONS
function buildBoard(){
  for(let row=0; row<8; row++){
  //if in an even row
    if((row==0)||(row==2)||(row==4)||(row==6)){
      for(let column=0; column<8; column++){
        if((column==0)||(column==2)||(column==4)||(column==6)){
          boardArray[tileCount] = new Tile(tileCount, column*50, row*50, 'black',0);
          tileCount++;
        }
        if((column==1)||(column==3)||(column==5)||(column==7)){
          boardArray[tileCount] = new Tile(tileCount, column*50, row*50, 'white',0);
          tileCount++;
        }
      }
    }
  //if in an odd row
    if((row==1)||(row==3)||(row==5)||(row==7)){
      for(let column=0; column<8; column++){
        if((column==0)||(column==2)||(column==4)||(column==6)){
          boardArray[tileCount] = new Tile(tileCount, column*50, row*50, 'white',0);
          tileCount++;
        }
        if((column==1)||(column==3)||(column==5)||(column==7)){
          boardArray[tileCount] = new Tile(tileCount, column*50, row*50, 'black',0);
          tileCount++;
        }
      }
    }
  }
}
function showBoard(){
  for(let i=0; i<64; i++){
    boardArray[i].showTile();;
  }
}
function hasTileBeenClicked(_x,_y){
    for(let i=0; i<64; i++){
      boardArray[i].checkClick(_x,_y);
    }
}
function numberTiles(){
  for(let i=0; i<64; i++){
    boardArray[i].showNumber();
  }
}
function markOccupied(){
  tileX = 0;
  tileY = 0;
  pieceX = 0;
  pieceY = 0;
  occupiedFlag =0;
  for(let i=0; i<64; i++){
    for(let j=0; j<24; j++){
      tileX = boardArray[i].getXcoord();
      tileY = boardArray[i].getYcoord();
      pieceX = pieces[j].getXcoord();
      pieceY = pieces[j].getYcoord();
      if(((pieceX-25)==(tileX))&&((pieceY-25)==(tileY))){
        occupiedFlag = i;
      //  console.log("Occupied set on: " + i);
      }
      else{boardArray[i].setUnoccupied()};
    }
    boardArray[occupiedFlag].setOccupied();
  }
}

//CHECKERS FUNCTIONS
function resetGame(){
  buildBoard();
  showBoard();
  numberTiles();
  buildPieces();
  showPieces();
  markOccupied();
  tileCount = 0;
  clickedTile = -1;
  clickedPiece = -1;
  currentPlayer = 1;
}
function movePieceToClicked(){
  if((clickedPiece !== -1) && (clickedTile !== -1) && (boardArray[clickedTile].getOccupied()==0) && (boardArray[clickedTile].getColor()!== 'white')){
  pieces[clickedPiece].setXcoord(boardArray[clickedTile].getXcoord()+25);
  pieces[clickedPiece].setYcoord(boardArray[clickedTile].getYcoord()+25);
  console.log('Piece moved');
  //update piece tile number
  pieces[clickedPiece].setPieceTileNumber(clickedTile);
  markOccupied();
  switchCurrentPlayer();
  }
}
function resetHighlights(){
  for(let i=0; i<64; i++){
    boardArray[i].setNotHighlighted();
  }
}
function tileClickedisHighlighted(){
  if(boardArray[clickedTile].getHighlightValue() == 1){
    return true;
  }
  if(boardArray[clickedTile].getJumpHighlightRightValue()==1){
    tempJumped = getRightTileNumber();
    for(let i=0; i<24; i++){
      if(pieces[i].getNumber()==tempJumped){
        pieces[i].setCaptured();
      }
    }
    return true;
  }
  if(boardArray[clickedTile].getJumpHighlightLeftValue()==1){
    tempJumped = getLeftTileNumber();
    for(let i=0; i<24; i++){
      if(pieces[i].getNumber()==tempJumped){
        pieces[i].setCaptured();
      }
    }
    return true;
  }
  if(boardArray[clickedTile].getJumpHighlightbackLeftValue()==1){
    tempJumped = clickedTile-9;
    for(let i=0; i<24; i++){
      if(pieces[i].getNumber()==tempJumped){
        pieces[i].setCaptured();
      }
    }
    return true;
  }
  if(boardArray[clickedTile].getJumpHighlightbackRightValue()==1){
    tempJumped = clickedTile-7;
    for(let i=0; i<24; i++){
      if(pieces[i].getNumber()==tempJumped){
        pieces[i].setCaptured();
      }
    }
    return true;
  }
  else{ return false;}
}
function isThisTheCurrentUsersPiece(){
  if((pieces[clickedPiece].getColor() == 'orange') && (currentPlayer == 2)){
    return true;
  }
  else if((pieces[clickedPiece].getColor() == 'blue') && (currentPlayer == 1)){
    return true;
  }
  else{
        console.log('else');
    return false;
  }

}
function switchCurrentPlayer(){
  if (currentPlayer == 1){
    currentPlayer = 2;
    console.log('current player is now 2');
  }
  else if (currentPlayer == 2){
    currentPlayer = 1;
    console.log('current player is now 1');
  }
}
function colorOfPieceinTile(tile){
  tileToTest = tile;
  for(let i=0; i<24; i++){
    if(pieces[i].getNumber() == tileToTest){
      return pieces[i].getColor();
    }
  }
}
function getJumpLeftTileNumber(){
  if((pieces[clickedPiece].getColor()=='orange')){
    //console.log('orange');
    return getLeftTileNumber()-9;
  }
  if((pieces[clickedPiece].getColor()=='blue')){
    return getLeftTileNumber()+9;
  }
}
function getJumpRightTileNumber(){
  if((pieces[clickedPiece].getColor()=='orange')){
    //console.log('orange');
    return getRightTileNumber()-7;
  }
  if((pieces[clickedPiece].getColor()=='blue')){
    return getRightTileNumber()+7;
  }
}
function getLeftTileNumber(){
  let leftTileNumber = -1;
  let currentPieceColor = 'red';
  currentPieceColor = pieces[clickedPiece].getColor();
  leftTileNumber = -1;
  if((currentPieceColor == 'blue')){
    leftTileNumber = pieces[clickedPiece].getNumber() +9;
    return leftTileNumber;
  }
  else if((currentPieceColor == 'orange')){
    leftTileNumber = pieces[clickedPiece].getNumber() -9;
    return leftTileNumber;
  }
}
function getRightTileNumber(){
  let rightTileNumber = -1;
  let currentPieceColor = pieces[clickedPiece].getColor();
  if((currentPieceColor == 'blue')){
    rightTileNumber = pieces[clickedPiece].getNumber() +7;
    return rightTileNumber;
  }
  if((currentPieceColor == 'orange')){
    rightTileNumber = pieces[clickedPiece].getNumber() -7;
    return rightTileNumber;
  }}
function getJumpLeftTileOccupation(){
  var number = getJumpLeftTileNumber();
  if(boardArray[number]!== undefined){
    return boardArray[number].getOccupied();
  }
}
function getJumpRightTileOccupation(){
  var number = getJumpRightTileNumber();
  if(boardArray[number]!== undefined){
    return boardArray[number].getOccupied();
  }
}
function getLeftTileOccupation(){
  var number = getLeftTileNumber();
  //console.log('left Tile Number: ' + number+' getOccupied returns: '+ boardArray[number].getOccupied());
  if(boardArray[number]!== undefined){
    return boardArray[number].getOccupied();
  }
}
function getRightTileOccupation(){
  var number = getRightTileNumber();
  if(boardArray[number]!== undefined){
    return boardArray[number].getOccupied();
  }
}
function highlightAvailableMoves(){
  if((pieces[clickedPiece].getKing() !== 1)&&(getLeftTileOccupation() == 0)&&(boardArray[getLeftTileNumber()].getColor() !== 'white')){
    boardArray[getLeftTileNumber()].setHighlight();
  }
  if((pieces[clickedPiece].getKing() !== 1)&&(getRightTileOccupation() == 0)&&(boardArray[getRightTileNumber()].getColor() !== 'white')){
    boardArray[getRightTileNumber()].setHighlight();
  }
  if((pieces[clickedPiece].getKing() !== 1)&&(getLeftTileOccupation() !== 0)&&(getJumpLeftTileOccupation() == 0)&&(boardArray[getJumpLeftTileNumber()].getColor() !== 'white')&&(colorOfPieceinTile(getLeftTileNumber())!== pieces[clickedPiece].getColor())){
  //  if(colorOfPieceinTile(getLeftTileNumber) !== colorOfPieceinTile(clickedTile)){
          boardArray[getJumpLeftTileNumber()].setJumpHighlightLeft();
        //}
  }
  if((pieces[clickedPiece].getKing() !== 1)&&(getRightTileOccupation() !== 0)&&(getJumpRightTileOccupation() == 0)&&(boardArray[getJumpRightTileNumber()].getColor() !== 'white')&&(boardArray[getRightTileNumber()].getColor() !== 'white')&&(colorOfPieceinTile(getRightTileNumber())!== pieces[clickedPiece].getColor())){
  //  if(colorOfPieceinTile(getRightTileNumber)!== colorOfPieceinTile(clickedTile)){
    boardArray[getJumpRightTileNumber()].setJumpHighlightRight();
//  }
  }
  if(pieces[clickedPiece].getKing() == 1){
    number = pieces[clickedPiece].getNumber();
    if(((number + 7)<64)&&((number + 7)>=0)&&(boardArray[number + 7].getOccupied()==0)&&(boardArray[number+7] !== undefined)&&(boardArray[number+7].getColor() !== 'white')){
      if(colorOfPieceinTile(number+7)!== pieces[clickedPiece].getColor()){
      boardArray[number+7].setHighlight();
      }
    }
    if(((number - 7)<64)&&((number - 7)>=0)&&(boardArray[number - 7].getOccupied()==0)&&(boardArray[number-7] !== undefined)&&(boardArray[number-7].getColor() !== 'white')){
      if(colorOfPieceinTile(number-7)!== pieces[clickedPiece].getColor()){
      boardArray[number-7].setHighlight();
      }
    }
    if(((number + 9)<64)&&((number + 9)>=0)&&(boardArray[number + 9].getOccupied()==0)&&(boardArray[number+9] !== undefined)&&(boardArray[number+9].getColor() !== 'white')){
      if(colorOfPieceinTile(number+9)!== pieces[clickedPiece].getColor()){
      boardArray[number+9].setHighlight();
      }
    }
    if(((number - 9)<64)&&((number - 9)>=0)&&(boardArray[number - 9].getOccupied()==0)&&(boardArray[number-9] !== undefined)&&(boardArray[number-9].getColor() !== 'white')){
      if(colorOfPieceinTile(number-9)!== pieces[clickedPiece].getColor()){
      boardArray[number-9].setHighlight();
      }
    }

    if(((number +18 )<64)&&((number + 18)>=0)&&(boardArray[number + 9].getOccupied()==1)&&(boardArray[number + 18].getOccupied()==0)&&(boardArray[number+18] !== undefined)&&(boardArray[number+18].getColor() !== 'white')){
      if(colorOfPieceinTile(number+9)!== pieces[clickedPiece].getColor()){
        boardArray[number + 18].setJumpHighlightbackLeft();
      }
    }
    if(((number - 18)<64)&&((number - 18)>=0)&&(boardArray[number - 9].getOccupied()==1)&&(boardArray[number - 18].getOccupied()==0)&&(boardArray[number-18] !== undefined)&&(boardArray[number-18].getColor() !== 'white')){
      if(colorOfPieceinTile(number-9)!== pieces[clickedPiece].getColor()){
        boardArray[number -18].setJumpHighlightLeft();
      }
    }
    if(((number + 14)<64)&&((number + 14)>=0)&&(boardArray[number + 7].getOccupied()==1)&&(boardArray[number + 14].getOccupied()==0)&&(boardArray[number+14] !== undefined)&&(boardArray[number+14].getColor() !== 'white')){
      if(colorOfPieceinTile(number+7)!== pieces[clickedPiece].getColor()){
        boardArray[number + 14].setJumpHighlightbackRight();
      }
    }
    if(((number - 14)<64)&&((number - 14)>=0)&&(boardArray[number - 7].getOccupied()==1)&&(boardArray[number - 14].getOccupied()==0)&&(boardArray[number-14] !== undefined)&&(boardArray[number-14].getColor() !== 'white')){
      if(colorOfPieceinTile(number-7)!== pieces[clickedPiece].getColor()){
      boardArray[number - 14].setJumpHighlightRight();
      }
    }
  }
}
function clearJumpedPiece(){

}
function checkWinner(){
  if(player1PieceCount < 1){
    winner = 2;
    return true;
  }
  if(player2PieceCount < 1){
    winner = 1;
    return true;
  }
  else{return false;}
}
function checkKing(){
  for(let i =0; i<24;i++){
    if(pieces[i].getColor()=='orange'){
      if(pieces[i].getNumber() == 0){
        pieces[i].setKing();
      }
      if(pieces[i].getNumber() == 2){
        pieces[i].setKing();
      }
      if(pieces[i].getNumber() == 4){
        pieces[i].setKing();
      }
      if(pieces[i].getNumber() == 6){
        pieces[i].setKing();
      }
    }
    if(pieces[i].getColor()=='blue'){
      if(pieces[i].getNumber() == 57){
        pieces[i].setKing();
      }
      if(pieces[i].getNumber() == 59){
        pieces[i].setKing();
      }
      if(pieces[i].getNumber() == 61){
        pieces[i].setKing();
      }
      if(pieces[i].getNumber() == 63){
        pieces[i].setKing();
      }
    }
  }
}
function refresh(){
  markOccupied();
  showBoard();
  showPieces();
}
function currentPlayerMessage(){
  if(currentPlayer == 1){
    fill('white');
    noStroke();
    rect(530,50,180,50);
    textSize(20);
    fill('blue');
    text('Player '+ currentPlayer + 's turn', 530,80);
  }
  if(currentPlayer == 2){
    fill('white');
    noStroke();
    rect(530,50,180,50);
    textSize(20);
    fill('orange');
    text('Player '+ currentPlayer + 's turn', 530,80);
  }
}
function rulesMessage(){
  fill('magenta');
  textSize(15);
  text('Checkers', 0,420);
  fill('red');
  text('Rules: ', 0, 435);
  text('1.) The goal is to collect all of the opponents pieces ', 0, 450);
  text('2.) Pieces can be captured by jumping diagonally, capture opportunities are highlighted in red', 0, 465);
  text('3.) Pieces can only move diagonally in unobstructed directions, to move a piece click the piece to move then any highlighted red or green dot ', 0, 480);
  text('4.) Kings can travel in any direction, to obtain a king move one of your pieces to the back row of the opponents start area ', 0, 495);
  text('5.) When the game is finished the winner will be announced, to restart the game simply press F5 on your keyboard or click the refresh icon in your browser',0,510);
  textSize(10);
  fill('grey')
  text('This game was made for EECS 448 at the University of Kansas, Professor Andy Gill, Spring 2020. By:CHASE ODGERS using P5.JS library',0,525);
}
//P5 FUNCTIONS
function mousePressed(){
  resetHighlights();
  hasPieceBeenClicked(mouseX,mouseY);
  hasTileBeenClicked(mouseX,mouseY);
}
function winMessage(){
  strokeWeight(2);
  stroke(50);
  rect(150,200,400,200);
  textSize(50);
  fill(50);
  text('Player '+ winner + ' WINS!!', 175,300);
}
function draw() {
  if((piecehasbeenclicked == 1)&&(isThisTheCurrentUsersPiece())){
    highlightAvailableMoves();
    if(tileClickedisHighlighted()){
      movePieceToClicked();
      resetHighlights();
      checkKing();
    }
  }
  showBoard();
  currentPlayerMessage();
  rulesMessage();
  showPieces();
  if(checkWinner()){
    winMessage();
  }
}
