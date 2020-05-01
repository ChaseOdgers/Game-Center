document.addEventListener("DOMContentLoaded", () => {
    createBoard();
    setupBoard();
    playGame();
});

/*
@pre: createBoard() as not been previously called
@post: an 8x8 board is generated with an alternating color scheme 
*/
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

/*
@pre: createBoard() has been previously called
@post: the previously created board has chess pieces added to it in their starting locations
*/
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

/*
@param: possibleMoves -> an array of board positions which the calling piece can move to
@pre: possibleMoves has been generated using getPossibleMoves()
@post: the boardSquares the piece can move to are highlighted in green for 1.5 seconds
*/
function showMoves(possibleMoves) {
    possibleMoves.forEach((move) => {
        document.getElementById(move).classList.add("move");
    })
    setTimeout(() => { // wait 2 seconds then remove shown possible moves
        possibleMoves.forEach((move) => {
            document.getElementById(move).classList.remove("move");
        })
    }, 1500);
}

/*
@pre: none -> called as an event listener placed upon each piece in playGame()
@post: the clicked piece is moved to the selected position or an error message is displayed if invalid
@brief: handles "pausing" and "activating" event listeners to make sure the right event is being listened for
*/
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
                updateCurrentPlayer();
                if (isCheck(theSelectionID)) {
                    isGameOver = isCheckmate();
                }
            }
            else {
                updateStatus("Invalid move", false);
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
        updateStatus("You can't move that color of piece", false);
    }
}

/*
@param: currentLocation -> the current boardSquare the selected piece is at
        newLocation -> the location of the boardSqaure to move the selected piece to
@pre: newLocation has been validated as an acceptable location to move the selected piece
@post: the piece located at currentLocation is moved to newLocation
        ***Special Case: castling will move a king to a square that is not newLocation***
*/
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

/*
@post: the currentPlayer tracker is updated to reflect a move being made
*/
function updateCurrentPlayer() {
    document.getElementById("W").classList.toggle("currentPlayer");
    document.getElementById("B").classList.toggle("currentPlayer");
}

/*
@param: newStatusMessage -> the message to be displayed to the users
        isPermanent -> a bool which specifies whether newStatusMessage is to remain permanently
@post: newStatusMessage is displayed to the user within the playerStatus element and reset after 2 seconds,
        if isPermanent is true, the message is never reset
*/
function updateStatus(newStatusMessage, isPermanent) {
    let theStatus = document.getElementById("playerStatus").firstElementChild;
    theStatus.innerText = newStatusMessage;
    if (!isPermanent) {
        setTimeout(() => {
            theStatus.innerText = "Current Player";
        }, 2000);
    }
}

/*
@pre: createBoard() and setupBoard() have been previously called
@post: makeMove() is assigned as an event listener callback for each piece on the board
*/
function playGame() {
    let thePieces = document.getElementsByClassName("boardPiece");
    for (let i = 0; i < thePieces.length; i++) {
        thePieces[i].addEventListener("click", makeMove, true);
    } 
}

/*
@param: newestMovedPieceLocation -> the boardSquare location of the most recently moved piece
@pre: newestMovedPieceLocation contains a piece and hasChildElements() [is not null]
@post: if the most recently moved piece has put the opposing king into check, returns true,
        returns false otherwise
*/
function isCheck(newestMovedPieceLocation) {
    let possibleCheckingPiece = document.getElementById(newestMovedPieceLocation);
    /* this null check is to account for a castling move since the newLocation from movePiece() will
       not actually contain a piece */
    if (possibleCheckingPiece.firstElementChild != null) {
        let theKing = document.getElementById("kingW");
        // if the current piece is a white, find the black king
        if (possibleCheckingPiece.firstElementChild.classList.contains("whitePiece")) {
            theKing = document.getElementById("kingB");
        }

        let possibleMoves = getPossibleMoves(possibleCheckingPiece.firstElementChild);

        if (possibleMoves.includes(theKing.parentElement.id)) {
            return true;
        }
    }

    return false;
}

/*
@pre: should only be called after isCheck() returns true
@post: if the checking piece has also put the opposing king into checkmate, returns true,
        returns false otherwise. [playerStatus message is updated to display check or checkmate]
*/
function isCheckmate() {
    let theKing = document.getElementById("kingW");
    let allFriendlyPieces = document.getElementsByClassName("whitePiece");
    let allOpposingPieces = document.getElementsByClassName("blackPiece");
    // if wrong assumption, get the black king and white pieces
    if (document.getElementsByClassName("currentPlayer").item(0).id == "B") {
        theKing = document.getElementById("kingB");
        allFriendlyPieces = document.getElementsByClassName("blackPiece");
        allOpposingPieces = document.getElementsByClassName("whitePiece");
    }

    let allOpposingMoves = [];
    for (let i = 0; i < allOpposingPieces.length; i++) {
        allOpposingMoves = allOpposingMoves.concat(getPossibleMoves(allOpposingPieces.item(i)));
    }

    let kingsMoves = getPossibleMoves(theKing);
    // if every possible move of the king is attackable
    if (kingsMoves.every(kingMove => allOpposingMoves.includes(kingMove))) {
        if (kingsMoves.length != 1) {
            updateStatus("Checkmate!", true);
            return true;
        }
        else {
            let allFriendlyMoves = [];
            for (let i = 0; i < allFriendlyPieces.length; i++) {
                if (allFriendlyPieces.item(i).id != theKing.id) {
                    allFriendlyMoves = allFriendlyMoves.concat(getPossibleMoves(allFriendlyPieces.item(i)));
                }
            }

            let checkingPiece;
            let checkingPieceMoves;
            // find the checking piece
            for (let i = 0; i < allOpposingPieces.length; i++) {
                if (getPossibleMoves(allOpposingPieces.item(i)).includes(kingsMoves[0])) {
                    checkingPiece = allOpposingPieces.item(i);
                    checkingPieceMoves = getPossibleMoves(checkingPiece);
                    checkingPieceMoves.push(checkingPiece.parentElement.id);
                }
            }
            
            // simulate all possible blocking moves with unshown filler pieces
            let movesToFill = checkingPieceMoves.filter(move => allFriendlyMoves.includes(move));
            console.log(movesToFill);
            movesToFill.forEach(move => {
                let boardSquare = document.getElementById(move);
                let fillerPiece = document.createElement("div");
                fillerPiece.classList.add("filler");
                fillerPiece.style.visibility = "hidden";
                boardSquare.appendChild(fillerPiece);
            });

            let checkmate = false;
            // if the checking piece can't be captured
            if (!movesToFill.includes(checkingPiece.parentElement.id)) {
                // see if the king is still in check
                checkmate = isCheck(checkingPiece.parentElement.id);
            }
            
            // is the king still in check after all possible blocking moves are made?
            if (checkmate) {
                updateStatus("Checkmate!", true);
                return true;
            }

            // remove filler pieces
            movesToFill.forEach(move => {
                let boardSquare = document.getElementById(move);
                let fillerPiece = boardSquare.children;
                for (let i = 0; i < fillerPiece.length; i++) {
                    if (fillerPiece.item(i).classList.contains("filler")) {
                        fillerPiece.item(i).parentElement.removeChild(fillerPiece.item(i));
                    }
                }
            });
        }
    }

    updateStatus("Check!", false);
    return false;
}