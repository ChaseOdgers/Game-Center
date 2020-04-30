function getPossibleMoves(aBoardPiece) {
    let currentLocation = aBoardPiece.parentNode.id;
    let currentColumn = currentLocation.charCodeAt(0);
    let currentRow = parseInt(currentLocation.charAt(1));

    let pieceType = aBoardPiece.id.substring(0, aBoardPiece.id.length - 1);
    
    let pieceColor = aBoardPiece.classList.item(1);

    let possibleMoves = [];

    if (pieceType == "pawn") {

        if (pieceColor == "whitePiece") { // a white pawn
            let facingBoardSquare = document.getElementById(String.fromCharCode(currentColumn) + (currentRow + 1));
            // if the boardSquare in front of the pawn does not contain a piece
            if (!facingBoardSquare.hasChildNodes()) {
                possibleMoves.push(facingBoardSquare.id);
            }
            let antiBoardSquare = document.getElementById(String.fromCharCode(currentColumn + 1) + (currentRow + 1));
            // if a black piece can be attacked on the anti diagonal
            if (antiBoardSquare != null && antiBoardSquare.hasChildNodes()) {
                if (antiBoardSquare.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(antiBoardSquare.id);
                }
            }
            let mainBoardSquare = document.getElementById(String.fromCharCode(currentColumn - 1) + (currentRow + 1));
            // if a black piece can be attacked on the main diagonal
            if (mainBoardSquare != null && mainBoardSquare.hasChildNodes()) {
                if (mainBoardSquare.firstChild.classList.item(1) != pieceColor) {
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
                if (antiBoardSquare.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(antiBoardSquare.id);
                }
            }
            let mainBoardSquare = document.getElementById(String.fromCharCode(currentColumn + 1) + (currentRow - 1));
            // if a white piece can be attacked on the main diagonal
            if (mainBoardSquare != null && mainBoardSquare.hasChildNodes()) {
                if (mainBoardSquare.firstChild.classList.item(1) != pieceColor) {
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

    if (pieceType == "rook" || pieceType == "queen") {
        let evaluatingRow = currentRow;
        let posVerticalDirSquare;
        do {
            // get the next boardSquare
            posVerticalDirSquare = document.getElementById(String.fromCharCode(currentColumn) + ++evaluatingRow);
            // if the boardSquare is not empty and contains an attackable piece
            if (posVerticalDirSquare != null) {
                if (posVerticalDirSquare.hasChildNodes()) {
                    if (posVerticalDirSquare.firstChild.classList.item(1) != pieceColor) {
                        possibleMoves.push(posVerticalDirSquare.id);
                    }
                }
                else { // the boardSquare is empty
                    possibleMoves.push(posVerticalDirSquare.id);
                }
            }
        } while(posVerticalDirSquare != null && !posVerticalDirSquare.hasChildNodes());

        evaluatingRow = currentRow;
        let negVerticalDirSquare;
        do {
            // get the next boardSquare
            negVerticalDirSquare = document.getElementById(String.fromCharCode(currentColumn) + --evaluatingRow);
            // if the boardSquare is not empty and contains an attackable piece
            if (negVerticalDirSquare != null) {
                if (negVerticalDirSquare.hasChildNodes()) {
                    if (negVerticalDirSquare.firstChild.classList.item(1) != pieceColor) {
                        possibleMoves.push(negVerticalDirSquare.id);
                    }
                }
                else { // the boardSquare is empty
                    possibleMoves.push(negVerticalDirSquare.id);
                }
            }
        } while(negVerticalDirSquare != null && !negVerticalDirSquare.hasChildNodes());

        let evaluatingColumn = currentColumn;
        let posHorizontalDirSquare;
        do {
            // get the next boardSquare
            posHorizontalDirSquare = document.getElementById(String.fromCharCode(++evaluatingColumn) + currentRow);
            // if the boardSquare is not empty and contains an attackable piece
            if (posHorizontalDirSquare != null) {
                if (posHorizontalDirSquare.hasChildNodes()) {
                    if (posHorizontalDirSquare.firstChild.classList.item(1) != pieceColor) {
                        possibleMoves.push(posHorizontalDirSquare.id);
                    }
                }
                else { // the boardSquare is empty
                    possibleMoves.push(posHorizontalDirSquare.id);
                }
            }
        } while(posHorizontalDirSquare != null && !posHorizontalDirSquare.hasChildNodes());

        evaluatingColumn = currentColumn;
        let negHorizontalDirSquare;
        do {
            // get the next boardSquare
            negHorizontalDirSquare = document.getElementById(String.fromCharCode(--evaluatingColumn) + currentRow);
            // if the boardSquare is not empty and contains an attackable piece
            if (negHorizontalDirSquare != null) {
                if (negHorizontalDirSquare.hasChildNodes()) { 
                    if (negHorizontalDirSquare.firstChild.classList.item(1) != pieceColor) {
                        possibleMoves.push(negHorizontalDirSquare.id);
                    }
                }
                else { // the boardSquare is empty
                    possibleMoves.push(negHorizontalDirSquare.id);
                }
            }
        } while(negHorizontalDirSquare != null && !negHorizontalDirSquare.hasChildNodes());
    }

    if (pieceType == "bishop" || pieceType == "queen") {
        let evaluatingRow = currentRow;
        let evaluatingColumn = currentColumn;
        let posAntiDirSquare;
        do {
            // get the next boardSquare
            posAntiDirSquare = document.getElementById(String.fromCharCode(++evaluatingColumn) + ++evaluatingRow);
            // if the boardSquare is not empty and contains an attackable piece
            if (posAntiDirSquare != null) {
                if (posAntiDirSquare.hasChildNodes()) {
                    if (posAntiDirSquare.firstChild.classList.item(1) != pieceColor) {
                        possibleMoves.push(posAntiDirSquare.id);
                    }
                }
                else { // the boardSquare is empty
                    possibleMoves.push(posAntiDirSquare.id);
                }
            }
        } while(posAntiDirSquare != null && !posAntiDirSquare.hasChildNodes());

        evaluatingRow = currentRow;
        evaluatingColumn = currentColumn;
        let negAntiDirSquare;
        do {
            // get the next boardSquare
            negAntiDirSquare = document.getElementById(String.fromCharCode(--evaluatingColumn) + --evaluatingRow);
            // if the boardSquare is not empty and contains an attackable piece
            if (negAntiDirSquare != null) {
                if (negAntiDirSquare.hasChildNodes()) {
                    if (negAntiDirSquare.firstChild.classList.item(1) != pieceColor) {
                        possibleMoves.push(negAntiDirSquare.id);
                    }
                }
                else { // the boardSquare is empty
                    possibleMoves.push(negAntiDirSquare.id);
                }
            }
        } while(negAntiDirSquare != null && !negAntiDirSquare.hasChildNodes());

        evaluatingRow = currentRow;
        evaluatingColumn = currentColumn;
        let posMainDirSquare;
        do {
            // get the next boardSquare
            posMainDirSquare = document.getElementById(String.fromCharCode(++evaluatingColumn) + --evaluatingRow);
            // if the boardSquare is not empty and contains an attackable piece
            if (posMainDirSquare != null) {
                if (posMainDirSquare.hasChildNodes()) {
                    if (posMainDirSquare.firstChild.classList.item(1) != pieceColor) {
                        possibleMoves.push(posMainDirSquare.id);
                    }
                }
                else { // the boardSquare is empty
                    possibleMoves.push(posMainDirSquare.id);
                }
            }
        } while(posMainDirSquare != null && !posMainDirSquare.hasChildNodes());

        evaluatingRow = currentRow;
        evaluatingColumn = currentColumn;
        let negMainDirSquare;
        do {
            // get the next boardSquare
            negMainDirSquare = document.getElementById(String.fromCharCode(--evaluatingColumn) + ++evaluatingRow);
            // if the boardSquare is not empty and contains an attackable piece
            if (negMainDirSquare != null) {
                if (negMainDirSquare.hasChildNodes()) {
                    if (negMainDirSquare.firstChild.classList.item(1) != pieceColor) {
                        possibleMoves.push(negMainDirSquare.id);
                    }
                }
                else { // the boardSquare is empty
                    possibleMoves.push(negMainDirSquare.id);
                }
            }
        } while(negMainDirSquare != null && !negMainDirSquare.hasChildNodes());
    }

    if (pieceType == "knight") {
        let evaluatingRow = currentRow + 2;
        let posVerticalDirSquareR = document.getElementById(String.fromCharCode(currentColumn + 1) + evaluatingRow);
        if (posVerticalDirSquareR != null) {
            if (posVerticalDirSquareR.hasChildNodes()) {
                if (posVerticalDirSquareR.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(posVerticalDirSquareR.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(posVerticalDirSquareR.id);
            }
        }
        let posVerticalDirSquareL = document.getElementById(String.fromCharCode(currentColumn - 1) + evaluatingRow);
        if (posVerticalDirSquareL != null) {
            if (posVerticalDirSquareL.hasChildNodes()) {
                if (posVerticalDirSquareL.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(posVerticalDirSquareL.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(posVerticalDirSquareL.id);
            }
        }
        evaluatingRow = currentRow - 2;
        let negVerticalDirSquareR = document.getElementById(String.fromCharCode(currentColumn + 1) + evaluatingRow);
        if (negVerticalDirSquareR != null) {
            if (negVerticalDirSquareR.hasChildNodes()) {
                if (negVerticalDirSquareR.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(negVerticalDirSquareR.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(negVerticalDirSquareR.id);
            }
        }
        let negVerticalDirSquareL = document.getElementById(String.fromCharCode(currentColumn - 1) + evaluatingRow);
        if (negVerticalDirSquareL != null) {
            if (negVerticalDirSquareL.hasChildNodes()) {
                if (negVerticalDirSquareL.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(negVerticalDirSquareL.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(negVerticalDirSquareL.id);
            }
        }


        let evaluatingColumn = currentColumn + 2;
        let posHorizontalDirSquareT = document.getElementById(String.fromCharCode(evaluatingColumn) + (currentRow + 1));
        if (posHorizontalDirSquareT != null) {
            if (posHorizontalDirSquareT.hasChildNodes()) {
                if (posHorizontalDirSquareT.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(posHorizontalDirSquareT.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(posHorizontalDirSquareT.id);
            }
        }
        let posHorizontalDirSquareB = document.getElementById(String.fromCharCode(evaluatingColumn) + (currentRow - 1));
        if (posHorizontalDirSquareB != null) {
            if (posHorizontalDirSquareB.hasChildNodes()) {
                if (posHorizontalDirSquareB.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(posHorizontalDirSquareB.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(posHorizontalDirSquareB.id);
            }
        }
        evaluatingColumn = currentColumn - 2;
        let negHorizontalDirSquareT = document.getElementById(String.fromCharCode(evaluatingColumn) + (currentRow + 1));
        if (negHorizontalDirSquareT != null) {
            if (negHorizontalDirSquareT.hasChildNodes()) {
                if (negHorizontalDirSquareT.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(negHorizontalDirSquareT.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(negHorizontalDirSquareT.id);
            }
        }
        let negHorizontalDirSquareB = document.getElementById(String.fromCharCode(evaluatingColumn) + (currentRow - 1));
        if (negHorizontalDirSquareB != null) {
            if (negHorizontalDirSquareB.hasChildNodes()) {
                if (negHorizontalDirSquareB.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(negHorizontalDirSquareB.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(negHorizontalDirSquareB.id);
            }
        }
    }

    if (pieceType == "king") {
        let topSquare = document.getElementById(String.fromCharCode(currentColumn) + (currentRow + 1));
        if (topSquare != null) {
            if (topSquare.hasChildNodes()) {
                if (topSquare.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(topSquare.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(topSquare.id);
            }
        }
        let topRightSquare = document.getElementById(String.fromCharCode(currentColumn + 1) + (currentRow + 1));
        if (topRightSquare != null) {
            if (topRightSquare.hasChildNodes()) {
                if (topRightSquare.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(topRightSquare.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(topRightSquare.id);
            }
        }
        let topLeftSquare = document.getElementById(String.fromCharCode(currentColumn - 1) + (currentRow + 1));
        if (topLeftSquare != null) {
            if (topLeftSquare.hasChildNodes()) {
                if (topLeftSquare.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(topLeftSquare.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(topLeftSquare.id);
            }
        }
        let leftSquare = document.getElementById(String.fromCharCode(currentColumn - 1) + (currentRow));
        if (leftSquare != null) {
            if (leftSquare.hasChildNodes()) {
                if (leftSquare.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(leftSquare.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(leftSquare.id);
            }
        }
        let rightSquare = document.getElementById(String.fromCharCode(currentColumn + 1) + (currentRow));
        if (rightSquare != null) {
            if (rightSquare.hasChildNodes()) {
                if (rightSquare.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(rightSquare.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(rightSquare.id);
            }
        }
        let bottomSquare = document.getElementById(String.fromCharCode(currentColumn) + (currentRow - 1));
        if (bottomSquare != null) {
            if (bottomSquare.hasChildNodes()) {
                if (bottomSquare.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(bottomSquare.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(bottomSquare.id);
            }
        }
        let bottomRightSquare = document.getElementById(String.fromCharCode(currentColumn + 1) + (currentRow - 1));
        if (bottomRightSquare != null) {
            if (bottomRightSquare.hasChildNodes()) {
                if (bottomRightSquare.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(bottomRightSquare.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(bottomRightSquare.id);
            }
        }
        let bottomLeftSquare = document.getElementById(String.fromCharCode(currentColumn - 1) + (currentRow - 1));
        if (bottomLeftSquare != null) {
            if (bottomLeftSquare.hasChildNodes()) {
                if (bottomLeftSquare.firstChild.classList.item(1) != pieceColor) {
                    possibleMoves.push(bottomLeftSquare.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(bottomLeftSquare.id);
            }
        }
        // possible castling
        if (currentLocation == "e1" || currentLocation == "e8") {
            let rightTwoSquares = document.getElementById(String.fromCharCode(currentColumn + 2) + (currentRow));
            let rightRookLocation = document.getElementById(String.fromCharCode(currentColumn + 3) + (currentRow));
            let leftTwoSquares = document.getElementById(String.fromCharCode(currentColumn - 2) + (currentRow));
            let leftThreeSquares = document.getElementById(String.fromCharCode(currentColumn - 3) + (currentRow)) 
            let leftRookLocation = document.getElementById(String.fromCharCode(currentColumn - 4) + (currentRow));

            if (!rightSquare.hasChildNodes() && !rightTwoSquares.hasChildNodes() &&
                rightRookLocation.firstElementChild.id.substring(0, rightRookLocation.firstElementChild.id.length - 1) == "rook")
            {
                possibleMoves.push(rightRookLocation.id);
            }
            if (!leftSquare.hasChildNodes() && !leftTwoSquares.hasChildNodes() && !leftThreeSquares.hasChildNodes() &&
                leftRookLocation.firstElementChild.id.substring(0, leftRookLocation.firstElementChild.id.length - 1) == "rook")
            {
                possibleMoves.push(leftRookLocation.id);
            }
        }
    }

    return possibleMoves;
}