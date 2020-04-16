document.addEventListener("DOMContentLoaded", () => {
    createBoard();
    setupBoard();

    let thePieces = document.getElementsByClassName("boardPiece");
    for (let i = 0; i < thePieces.length; i++) {
        thePieces[i].addEventListener("click", () => showMoves(getPossibleMoves(thePieces[i])));
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

        /* aSquare = document.getElementById(String.fromCharCode(i) + 7);
        let aBlackPawn = document.createElement("div");
        aBlackPawn.id = "pawnB";
        aBlackPawn.className = "boardPiece";
        aSquare.appendChild(aBlackPawn); */

        // White Player's Pieces
        aSquare = document.getElementById(String.fromCharCode(i) + 1);
        let aWhitePiece = document.createElement("div");
        aWhitePiece.id = pieceList[i-97] + "W";
        aWhitePiece.className = "boardPiece";
        aSquare.appendChild(aWhitePiece);

        /* aSquare = document.getElementById(String.fromCharCode(i) + 2);
        let aWhitePawn = document.createElement("div");
        aWhitePawn.id = "pawnW";
        aWhitePawn.className = "boardPiece";
        aSquare.appendChild(aWhitePawn); */
    }
}

function showMoves(possibleMoves) {
    possibleMoves.forEach((move) => {
        document.getElementById(move).classList.add("move");
    })
    setTimeout(() => { // wait 3 seconds then remove shown possible moves
        possibleMoves.forEach((move) => {
            document.getElementById(move).classList.remove("move");
        })
    }, 2000);
}

function getPossibleMoves(aBoardPiece) {
    let currentLocation = aBoardPiece.parentNode.id;
    let currentColumn = currentLocation.charCodeAt(0);
    let currentRow = parseInt(currentLocation.charAt(1));

    let pieceType = aBoardPiece.id.substring(0, aBoardPiece.id.length - 1);
    let pieceColor = aBoardPiece.id.charAt(aBoardPiece.id.length - 1);

    let possibleMoves = [];

    if (pieceType == "pawn") {

        if (pieceColor == "W") { // a white pawn
            let facingBoardSquare = document.getElementById(String.fromCharCode(currentColumn) + (currentRow + 1));
            // if the boardSquare in front of the pawn does not contain a piece
            if (!facingBoardSquare.hasChildNodes()) {
                possibleMoves.push(facingBoardSquare.id);
            }
            let antiBoardSquare = document.getElementById(String.fromCharCode(currentColumn + 1) + (currentRow + 1));
            // if a black piece can be attacked on the anti diagonal
            if (antiBoardSquare != null && antiBoardSquare.hasChildNodes()) {
                if (antiBoardSquare.firstChild.id.charAt(antiBoardSquare.id.length - 1) != pieceColor) {
                    possibleMoves.push(antiBoardSquare.id);
                }
            }
            let mainBoardSquare = document.getElementById(String.fromCharCode(currentColumn - 1) + (currentRow + 1));
            // if a black piece can be attacked on the main diagonal
            if (mainBoardSquare != null && mainBoardSquare.hasChildNodes()) {
                if (mainBoardSquare.firstChild.id.charAt(mainBoardSquare.length - 1) != pieceColor) {
                    possibleMoves.push(mainBoardSquare.id);
                }
            }
            let twoAwayFacingBoardSquare = document.getElementById(String.fromCharCode(currentColumn) + (currentRow + 2));
            // if the pawn is at its starting position
            if (!twoAwayFacingBoardSquare.hasChildNodes() && currentRow == 2) {
                possibleMoves.push(twoAwayFacingBoardSquare.id);
            }
        }
        else { // a black pawn
            let facingBoardSquare = document.getElementById(String.fromCharCode(currentColumn) + (currentRow - 1));
            // if the boardSquare in front of the pawn does not contain a piece
            if (!facingBoardSquare.hasChildNodes()) {
                possibleMoves.push(facingBoardSquare.id);
            }
            let antiBoardSquare = document.getElementById(String.fromCharCode(currentColumn - 1) + (currentRow - 1));
            // if a white piece can be attacked on the anti diagonal
            if (antiBoardSquare != null && antiBoardSquare.hasChildNodes()) {
                if (antiBoardSquare.firstChild.id.charAt(antiBoardSquare.firstChild.id.length - 1) != pieceColor) {
                    possibleMoves.push(antiBoardSquare.id);
                }
            }
            let mainBoardSquare = document.getElementById(String.fromCharCode(currentColumn + 1) + (currentRow - 1));
            // if a white piece can be attacked on the main diagonal
            if (mainBoardSquare != null && mainBoardSquare.hasChildNodes()) {
                if (mainBoardSquare.firstChild.id.charAt(mainBoardSquare.firstChild.id.length - 1) != pieceColor) {
                    possibleMoves.push(mainBoardSquare.id);
                }
            }
            let twoAwayFacingBoardSquare = document.getElementById(String.fromCharCode(currentColumn) + (currentRow - 2));
            // if the pawn is at its starting position
            if (!twoAwayFacingBoardSquare.hasChildNodes() && currentRow == 7) {
                possibleMoves.push(twoAwayFacingBoardSquare.id);
            }
        }
    }
    if (pieceType == "rook" || pieceType == "queen") { // I think it will fail to detect enemy in adjacent boardSquare
        let evaluatingRow = currentRow + 1;
        let posVerticalDirSquare = document.getElementById(String.fromCharCode(currentColumn) + evaluatingRow);
        // while the next boardSquare is not off the board and does not contain a piece
        while (posVerticalDirSquare != null && !posVerticalDirSquare.hasChildNodes()) {
            possibleMoves.push(posVerticalDirSquare.id);
            posVerticalDirSquare = document.getElementById(String.fromCharCode(currentColumn) + ++evaluatingRow);
            // if the next boardSquare is not off the board and contains a piece
            if (posVerticalDirSquare != null && posVerticalDirSquare.hasChildNodes()) {
                // if the piece is not the same color as the moving rook
                if (posVerticalDirSquare.firstChild.id.charAt(posVerticalDirSquare.firstChild.id.length - 1) != pieceColor) {
                    possibleMoves.push(posVerticalDirSquare.id);
                }
            }
        }
        evaluatingRow = currentRow - 1;
        let negVerticalDirSquare = document.getElementById(String.fromCharCode(currentColumn) + evaluatingRow);
        // while the next boardSquare is not off the board and does not contain a piece
        while (negVerticalDirSquare != null && !negVerticalDirSquare.hasChildNodes()) {
            possibleMoves.push(negVerticalDirSquare.id);
            negVerticalDirSquare = document.getElementById(String.fromCharCode(currentColumn) + --evaluatingRow);
            // if the next boardSquare is not off the board and contains a piece
            if (negVerticalDirSquare != null && negVerticalDirSquare.hasChildNodes()) {
                // if the piece is not the same color as the moving rook
                if (negVerticalDirSquare.firstChild.id.charAt(negVerticalDirSquare.firstChild.id.length - 1) != pieceColor) {
                    possibleMoves.push(negVerticalDirSquare.id);
                }
            }
        }
        let evaluatingColumn = currentColumn + 1;
        let posHorizontalDirSquare = document.getElementById(String.fromCharCode(evaluatingColumn) + currentRow);
        // while the next boardSquare is not off the board and does not contain a piece
        while (posHorizontalDirSquare != null && !posHorizontalDirSquare.hasChildNodes()) {
            possibleMoves.push(posHorizontalDirSquare.id);
            posHorizontalDirSquare = document.getElementById(String.fromCharCode(++evaluatingColumn) + currentRow);
            // if the next boardSquare is not off the board and contains a piece
            if (posHorizontalDirSquare != null && posHorizontalDirSquare.hasChildNodes()) {
                // if the piece is not the same color as the moving rook
                if (posHorizontalDirSquare.firstChild.id.charAt(posHorizontalDirSquare.firstChild.id.length - 1) != pieceColor) {
                    possibleMoves.push(posHorizontalDirSquare.id);
                }
            }
        }
        evaluatingColumn = currentColumn - 1;
        let negHorizontalDirSquare = document.getElementById(String.fromCharCode(evaluatingColumn) + currentRow);
        // while the next boardSquare is not off the board and does not contain a piece
        while (negHorizontalDirSquare != null && !negHorizontalDirSquare.hasChildNodes()) {
            possibleMoves.push(negHorizontalDirSquare.id);
            negHorizontalDirSquare = document.getElementById(String.fromCharCode(--evaluatingColumn) + currentRow);
            // if the next boardSquare is not off the board and contains a piece
            if (negHorizontalDirSquare != null && negHorizontalDirSquare.hasChildNodes()) {
                // if the piece is not the same color as the moving rook
                if (negHorizontalDirSquare.firstChild.id.charAt(negHorizontalDirSquare.firstChild.id.length - 1) != pieceColor) {
                    possibleMoves.push(negHorizontalDirSquare.id);
                }
            }
        }
    }
    if (pieceType == "bishop" || pieceType == "queen") { // I think it will fail to detect enemy in adjacent boardSquare
        console.log("hit");
        let evaluatingRow = currentRow + 1;
        let evaluatingColumn = currentColumn + 1;
        let posAntiDirSquare = document.getElementById(String.fromCharCode(evaluatingColumn) + evaluatingRow);
        // while the next boardSquare is not off the board and does not contain a piece
        while (posAntiDirSquare != null && !posAntiDirSquare.hasChildNodes()) {
            possibleMoves.push(posAntiDirSquare.id);
            posAntiDirSquare = document.getElementById(String.fromCharCode(++evaluatingColumn) + ++evaluatingRow);
            // if the next boardSquare is not off the board and contains a piece
            if (posAntiDirSquare != null && posAntiDirSquare.hasChildNodes()) {
                // if the piece is not the same color as the moving rook
                if (posAntiDirSquare.firstChild.id.charAt(posAntiDirSquare.firstChild.id.length - 1) != pieceColor) {
                    possibleMoves.push(posAntiDirSquare.id);
                }
            }
        }
        evaluatingRow = currentRow - 1;
        evaluatingColumn = currentColumn - 1;
        let negAntiDirSquare = document.getElementById(String.fromCharCode(evaluatingColumn) + evaluatingRow);
        // while the next boardSquare is not off the board and does not contain a piece
        while (negAntiDirSquare != null && !negAntiDirSquare.hasChildNodes()) {
            possibleMoves.push(negAntiDirSquare.id);
            negAntiDirSquare = document.getElementById(String.fromCharCode(--evaluatingColumn) + --evaluatingRow);
            // if the next boardSquare is not off the board and contains a piece
            if (negAntiDirSquare != null && negAntiDirSquare.hasChildNodes()) {
                // if the piece is not the same color as the moving rook
                if (negAntiDirSquare.firstChild.id.charAt(negAntiDirSquare.firstChild.id.length - 1) != pieceColor) {
                    possibleMoves.push(negAntiDirSquare.id);
                }
            }
        }
        evaluatingRow = currentRow - 1;
        evaluatingColumn = currentColumn + 1;
        let posMainDirSquare = document.getElementById(String.fromCharCode(evaluatingColumn) + evaluatingRow);
        // while the next boardSquare is not off the board and does not contain a piece
        while (posMainDirSquare != null && !posMainDirSquare.hasChildNodes()) {
            possibleMoves.push(posMainDirSquare.id);
            posMainDirSquare = document.getElementById(String.fromCharCode(++evaluatingColumn) + --evaluatingRow);
            // if the next boardSquare is not off the board and contains a piece
            if (posMainDirSquare != null && posMainDirSquare.hasChildNodes()) {
                // if the piece is not the same color as the moving rook
                if (posMainDirSquare.firstChild.id.charAt(posMainDirSquare.firstChild.id.length - 1) != pieceColor) {
                    possibleMoves.push(posMainDirSquare.id);
                }
            }
        }
        evaluatingRow = currentRow + 1;
        evaluatingColumn = currentColumn - 1;
        let negMainDirSquare = document.getElementById(String.fromCharCode(evaluatingColumn) + evaluatingRow);
        // while the next boardSquare is not off the board and does not contain a piece
        while (negMainDirSquare != null && !negMainDirSquare.hasChildNodes()) {
            possibleMoves.push(negMainDirSquare.id);
            negMainDirSquare = document.getElementById(String.fromCharCode(--evaluatingColumn) + ++evaluatingRow);
            // if the next boardSquare is not off the board and contains a piece
            if (negMainDirSquare != null && negMainDirSquare.hasChildNodes()) {
                // if the piece is not the same color as the moving rook
                if (negMainDirSquare.firstChild.id.charAt(negMainDirSquare.firstChild.id.length - 1) != pieceColor) {
                    possibleMoves.push(negMainDirSquare.id);
                }
            }
        }
    }
    
    console.log(possibleMoves);

    return possibleMoves;
}