document.addEventListener("DOMContentLoaded", () => {
    createBoard();
    setupBoard();

    let thePieces = document.getElementsByClassName("boardPiece");
    for (let i = 0; i < thePieces.length; i++) {
        thePieces[i].addEventListener("click", makeMove, false);
    }
    
});

function createBoard() {
    let theBoard = document.getElementById("mainBoard");
    for (let i = 8; i >= 1; i--) {
        let aRow = document.createElement("tr");
        for (let j = 97; j <= 104; j++) { // 97 = 'a', 104 = 'h'
            let aColumn = document.createElement("td");
            aColumn.id = String.fromCharCode(j) + "" + i;
            if ((i + j) % 2 == 1) {
                aColumn.className = "boardSquare white";
            }
            else {
                aColumn.className = "boardSquare black";
            }
            aRow.appendChild(aColumn);
        }

        theBoard.appendChild(aRow);
    }
}

function setupBoard() {
    let pieceList = ["rook", "knight", "bishop", "queen", "king", "bishop", "knight", "rook"];
    for (let i = 97; i <= 104; i++) { // 97 = 'a', 104 = 'h'
        // Black Player's Pieces
        let aSquare = document.getElementById(String.fromCharCode(i) + 8);
        let aBlackPiece = document.createElement("div");
        aBlackPiece.id = pieceList[i-97] + "B";
        aBlackPiece.className = "boardPiece";
        aSquare.appendChild(aBlackPiece);

        aSquare = document.getElementById(String.fromCharCode(i) + 7);
        let aBlackPawn = document.createElement("div");
        aBlackPawn.id = "pawnB";
        aBlackPawn.className = "boardPiece";
        aSquare.appendChild(aBlackPawn);

        // White Player's Pieces
        aSquare = document.getElementById(String.fromCharCode(i) + 1);
        let aWhitePiece = document.createElement("div");
        aWhitePiece.id = pieceList[i-97] + "W";
        aWhitePiece.className = "boardPiece";
        aSquare.appendChild(aWhitePiece);

        aSquare = document.getElementById(String.fromCharCode(i) + 2);
        let aWhitePawn = document.createElement("div");
        aWhitePawn.id = "pawnW";
        aWhitePawn.className = "boardPiece";
        aSquare.appendChild(aWhitePawn);
    }
}

function showMoves(possibleMoves) {
    possibleMoves.forEach((move) => {
        document.getElementById(move).classList.add("move");
    })
    setTimeout(() => { // wait 2 seconds then remove shown possible moves
        possibleMoves.forEach((move) => {
            document.getElementById(move).classList.remove("move");
        })
    }, 2000);
}

function makeMove() {
    let currentLocation = document.getElementById(this.parentNode.id);
    let possibleMoves = getPossibleMoves(this);
    showMoves(possibleMoves);
    document.getElementById("mainBoard").onclick = handleClick;
}

function handleClick(theEvent) {
    let theSelection = theEvent.target;
    console.log(theSelection);

}