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
                if (antiBoardSquare.firstChild.id.charAt(antiBoardSquare.firstChild.id.length - 1) != pieceColor) {
                    possibleMoves.push(antiBoardSquare.id);
                }
            }
            let mainBoardSquare = document.getElementById(String.fromCharCode(currentColumn - 1) + (currentRow + 1));
            // if a black piece can be attacked on the main diagonal
            if (mainBoardSquare != null && mainBoardSquare.hasChildNodes()) {
                if (mainBoardSquare.firstChild.id.charAt(mainBoardSquare.firstChild.id.length - 1) != pieceColor) {
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
    if (pieceType == "knight") {
        let evaluatingRow = currentRow + 2;
        let posVerticalDirSquareR = document.getElementById(String.fromCharCode(currentColumn + 1) + evaluatingRow);
        if (posVerticalDirSquareR != null) {
            if (posVerticalDirSquareR.hasChildNodes()) {
                if (posVerticalDirSquareR.firstChild.id.charAt(posVerticalDirSquareR.firstChild.id.length - 1) != pieceColor) {
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
                if (posVerticalDirSquareL.firstChild.id.charAt(posVerticalDirSquareL.firstChild.id.length - 1) != pieceColor) {
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
                if (negVerticalDirSquareR.firstChild.id.charAt(negVerticalDirSquareR.firstChild.id.length - 1) != pieceColor) {
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
                if (negVerticalDirSquareL.firstChild.id.charAt(negVerticalDirSquareL.firstChild.id.length - 1) != pieceColor) {
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
                if (posHorizontalDirSquareT.firstChild.id.charAt(posHorizontalDirSquareT.firstChild.id.length - 1) != pieceColor) {
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
                if (posHorizontalDirSquareB.firstChild.id.charAt(posHorizontalDirSquareB.firstChild.id.length - 1) != pieceColor) {
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
                if (negHorizontalDirSquareT.firstChild.id.charAt(negHorizontalDirSquareT.firstChild.id.length - 1) != pieceColor) {
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
                if (negHorizontalDirSquareB.firstChild.id.charAt(negHorizontalDirSquareB.firstChild.id.length - 1) != pieceColor) {
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
                if (topSquare.firstChild.id.charAt(topSquare.firstChild.id.length - 1) != pieceColor) {
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
                if (topRightSquare.firstChild.id.charAt(topRightSquare.firstChild.id.length - 1) != pieceColor) {
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
                if (topLeftSquare.firstChild.id.charAt(topLeftSquare.firstChild.id.length - 1) != pieceColor) {
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
                if (leftSquare.firstChild.id.charAt(leftSquare.firstChild.id.length - 1) != pieceColor) {
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
                if (rightSquare.firstChild.id.charAt(rightSquare.firstChild.id.length - 1) != pieceColor) {
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
                if (bottomSquare.firstChild.id.charAt(bottomSquare.firstChild.id.length - 1) != pieceColor) {
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
                if (bottomRightSquare.firstChild.id.charAt(bottomRightSquare.firstChild.id.length - 1) != pieceColor) {
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
                if (bottomLeftSquare.firstChild.id.charAt(bottomLeftSquare.firstChild.id.length - 1) != pieceColor) {
                    possibleMoves.push(bottomLeftSquare.id);
                }
            }
            else { // boardSquare does not contain a piece
                possibleMoves.push(bottomLeftSquare.id);
            }
        }
    }

    return possibleMoves;
}