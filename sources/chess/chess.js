document.addEventListener("DOMContentLoaded", () => {
    createBoard();
    setupBoard();
    playGame();
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
            let isGameOver = false;
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
                isGameOver = isCheckmate(theSelectionID);
            }
            else {
                updateStatus("Invalid move");
            }
        
            setTimeout(() => {
                // "pause" the handleClick eventHandler
                document.getElementById("mainBoard").removeEventListener("click", handleClick, false);
                if (!isGameOver) {
                    // "activate" the showMoves eventHandler
                    let thePieces = document.getElementsByClassName("boardPiece");
                    for (let i = 0; i < thePieces.length; i++) {
                        thePieces[i].addEventListener("click", makeMove, true);
                    }
                }
                else {
                    document.getElementById("playerStatus").firstElementChild.innerText = "Checkmate!";
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
    // castle to the right
    let currentColumn = currentLocation.charCodeAt(0);
    let currentRow = currentLocation.charAt(1);
    if ((currentLocation == "e1" && newLocation == "h1") ||
        (currentLocation == "e8" && newLocation == "h8"))
    {
        let newKingSquare = document.getElementById(String.fromCharCode(currentColumn + 2) + currentRow);
        let newRookSquare = document.getElementById(String.fromCharCode(currentColumn + 1) + currentRow);

        newKingSquare.appendChild(currentBoardSquare.firstElementChild);
        newRookSquare.appendChild(newBoardSquare.firstElementChild);
    }
    // castle to the left
    else if ((currentLocation == "e1" && newLocation == "a1") ||
             (currentLocation == "e8" && newLocation == "a8"))
    {
        let newKingSquare = document.getElementById(String.fromCharCode(currentColumn - 2) + currentRow);
        let newRookSquare = document.getElementById(String.fromCharCode(currentColumn - 1) + currentRow);

        newKingSquare.appendChild(currentBoardSquare.firstElementChild);
        newRookSquare.appendChild(newBoardSquare.firstElementChild);
    }
    // attacking a piece
    else if (newBoardSquare.hasChildNodes()) {
        newBoardSquare.removeChild(newBoardSquare.firstElementChild);
        newBoardSquare.appendChild(currentBoardSquare.firstChild);
    }
    // moving to an empty boardSquare
    else {
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

function playGame() {
    let thePieces = document.getElementsByClassName("boardPiece");
    for (let i = 0; i < thePieces.length; i++) {
        thePieces[i].addEventListener("click", makeMove, true);
    } 
}

function isCheckmate(newestMovedPieceLocation) {
    let possibleCheckingPiece = document.getElementById(newestMovedPieceLocation);
    let theKing;
    if (possibleCheckingPiece.firstElementChild != null) {
        // if the current piece is a white, find the black king
        if (possibleCheckingPiece.firstElementChild.classList.contains("whitePiece")) {
            theKing = document.getElementById("kingB");
        }
        else { // find the white king
            theKing = document.getElementById("kingW");
        }
        let possibleMoves = getPossibleMoves(possibleCheckingPiece.firstElementChild);

        // if the king is in check, is it also in checkmate?
        if (possibleMoves.includes(theKing.parentElement.id)) {
            let kingsMoves = getPossibleMoves(theKing);
            let allOpponentPieces;
            // if the king is white, find all black pieces
            if (theKing.classList.contains("whitePiece")) {
                allOpponentPieces = document.getElementsByClassName("blackPiece");
            }
            else { // find all white pieces
                allOpponentPieces = document.getElementsByClassName("whitePiece");
            }

            let allOpponentMoves = [];
            for (let i = 0; i < allOpponentPieces.length; i++) {
                allOpponentMoves = allOpponentMoves.concat(getPossibleMoves(allOpponentPieces.item(i)));
            }

            // if all possible moves for the king is attackable: checkmate
            if (kingsMoves.every(move => allOpponentMoves.includes(move))) {
                return true;
            }
            else { // the king is just in check
                updateStatus("Check!");
            }
        }
    }

    return false;
}