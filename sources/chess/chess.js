document.addEventListener("DOMContentLoaded", () => {
    createBoard();
    setupBoard();

    let thePieces = document.getElementsByClassName("boardPiece");
    for (let i = 0; i < thePieces.length; i++) {
        thePieces[i].addEventListener("click", makeMove, true);
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
                aColumn.className = "boardSquare whiteSquare";
            }
            else {
                aColumn.className = "boardSquare blackSquare";
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
        aBlackPiece.className = "boardPiece blackPiece";
        aSquare.appendChild(aBlackPiece);

        aSquare = document.getElementById(String.fromCharCode(i) + 7);
        let aBlackPawn = document.createElement("div");
        aBlackPawn.id = "pawnB";
        aBlackPawn.className = "boardPiece blackPiece";
        aSquare.appendChild(aBlackPawn);

        // White Player's Pieces
        aSquare = document.getElementById(String.fromCharCode(i) + 1);
        let aWhitePiece = document.createElement("div");
        aWhitePiece.id = pieceList[i-97] + "W";
        aWhitePiece.className = "boardPiece whitePiece";
        aSquare.appendChild(aWhitePiece);

        aSquare = document.getElementById(String.fromCharCode(i) + 2);
        let aWhitePawn = document.createElement("div");
        aWhitePawn.id = "pawnW";
        aWhitePawn.className = "boardPiece whitePiece";
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
    let pieceColor = this.id.charAt(this.id.length - 1);
    if (pieceColor == document.getElementsByClassName("currentPlayer").item(0).id) {
        let possibleMoves = getPossibleMoves(this);
        showMoves(possibleMoves);

        // "pause" the showMoves eventHandler
        let thePieces = document.getElementsByClassName("boardPiece");
        for (let i = 0; i < thePieces.length; i++) {
            thePieces[i].removeEventListener("click", makeMove, true);
        }
        setTimeout(() => {
            // "activate" the handleClick eventHandler
            document.getElementById("mainBoard").addEventListener("click", handleClick, false);
        });
        
        function handleClick(theEvent) {
            let theSelection = theEvent.target;
            let theSelectionID;
            // check whether theSelection is a boardPiece or boardSquare
            if (theSelection.classList.contains("boardPiece")) {
                theSelectionID = theSelection.parentNode.id;
            }
            else {
                theSelectionID = theSelection.id;
            }
            // check whether theSelectionID is a valid move 
            if (possibleMoves.includes(theSelectionID)) {
                movePiece(currentLocation.id, theSelectionID);
                updateCurrentPlayer(pieceColor);
            }
            else {
                updateStatus("Invalid move");
            }
        
            setTimeout(() => {
                // "pause" the handleClick eventHandler
                document.getElementById("mainBoard").removeEventListener("click", handleClick, false);
                // "activate" the showMoves eventHandler
                let thePieces = document.getElementsByClassName("boardPiece");
                for (let i = 0; i < thePieces.length; i++) {
                    thePieces[i].addEventListener("click", makeMove, true);
                }
            });
        }
    }
    else {
        updateStatus("You can't move that color of piece");
    }
}

function movePiece(currentLocation, newLocation) {
    let newBoardSquare = document.getElementById(newLocation);
    let currentBoardSquare = document.getElementById(currentLocation);
    if (newBoardSquare.hasChildNodes()) { // attacking a piece
        newBoardSquare.removeChild(newBoardSquare.firstElementChild);
        newBoardSquare.appendChild(currentBoardSquare.firstChild);
    }
    else { // moving to an empty boardSquare
        newBoardSquare.appendChild(currentBoardSquare.firstChild);
    }
}

function updateCurrentPlayer(currentPlayerColor) {
    document.getElementById("W").classList.toggle("currentPlayer");
    document.getElementById("B").classList.toggle("currentPlayer");
}

function updateStatus(newStatusMessage) {
    let theStatus = document.getElementById("playerStatus").firstElementChild;
    theStatus.innerText = newStatusMessage;
    setTimeout(() => {
        theStatus.innerText = "Current Player";
    }, 2000);
}