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

function getPossibleMoves(aBoardPiece) {
    let currentLocation = aBoardPiece.parentNode.id;
    let currentColumn = currentLocation.charAt(0).charCodeAt(0);
    let currentRow = parseInt(currentLocation.charAt(1));

    let pieceType = aBoardPiece.id.substring(0, aBoardPiece.id.length - 1);
    let possibleMoves = [];

    if (pieceType == "pawn") {
        let pieceColor = aBoardPiece.id.charAt(aBoardPiece.id.length - 1);
        if (pieceColor == "W") {
            possibleMoves.push(String.fromCharCode(currentColumn) + (currentRow + 1));
            if (currentRow == 2) {
                possibleMoves.push(String.fromCharCode(currentColumn) + (currentRow + 2));
            }
        }
        else {
            possibleMoves.push(String.fromCharCode(currentColumn) + (currentRow - 1));
            if (currentRow == 7) {
                possibleMoves.push(String.fromCharCode(currentColumn) + (currentRow - 2));
            }
        }
    }

    return possibleMoves;
}

function showMoves(possibleMoves) {
    possibleMoves.forEach((move) => {
        document.getElementById(move).classList.add("move");
    })
    setTimeout(() => { // wait 3 seconds then remove shown possible moves
        possibleMoves.forEach((move) => {
            document.getElementById(move).classList.remove("move");
        })
    }, 2500);
}