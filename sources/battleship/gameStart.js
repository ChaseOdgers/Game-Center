/** Updates ship locations. Useful when resizing window or changing position of 
 *  the board.
    @post   Ship locations match board location. */
function refreshShipLocations() {
    for (ship in ships) {
        cell = document.getElementById(ship).parentNode;
        let cellBounds = cell.getBoundingClientRect();
        let image = document.getElementById(ship);
        if (ships[ship] == "horizontal")
            image.style.left = cellBounds.left + "px";
        else if (ships[ship] == "vertical")
            image.style.left = cellBounds.left + 50 + "px";
        image.style.top = cellBounds.top + "px";
    }
};
window.addEventListener("resize", refreshShipLocations);

/** Start Button clicked. Creates and displays the computer's board. Other 
 *  elements are removed. Can no longer select ships.
    @post   Both boards are displayed and game is ready to play. */
document.getElementById("btnStart").addEventListener("click", function() {
    this.remove();
    document.getElementById("ships").remove();
    document.getElementById("instructions").remove();
    document.getElementById("board").style.marginRight = "0px";
    createTable("boardCP");
    document.getElementById("boardCP").style.visibility = "visible";
    document.getElementById("boardCP").style.marginBottom = "20px";
    refreshShipLocations();
    for (ship in ships)
        document.getElementById(ship).removeEventListener("click", shipSelect);
});

/** Checks whether given cell of computer's board is a hit.
    @pre    row, col >= 0; row, col <= 9
    @param  row The row # of boardCP cell.
    @param  col The column # of boardCP cell.
    @return true if there is a ship location at [row, col]. false otherwise. */
function isHitCP(row, col) {
    for (let ship of Object.keys(cp.ships))
        for (let location of cp.ships[ship].locations)
            if (location[0] == row && location[1] == col)
                return (true);
    return (false);
};

/** Checks whether given cell of player's board is a hit.
    @pre    row, col >= 0; row, col <= 9
    @param  row The row # of board cell.
    @param  col The column # of board cell.
    @return true if there is a ship location at [row, col]. false otherwise. */
function isHitPlayer(row, col) {
    for (let ship of Object.keys(player.ships))
        for (let location of player.ships[ship].locations)
            if (location[0] == row && location[1] == col)
                return (true);
    return (false);
};

/** Adds a visual hit marker to computer's board. Displays hit ship if all
 *  locations have been hit.
    @pre    row, col >= 0; row, col <= 9
    @param  row The row # of boardCP cell.
    @param  col The column # of boardCP cell.
    @post   The ship's life that was hit at [row, col] is decreased by one. */
function hitCP(row, col) {
    for (let ship of Object.keys(cp.ships))
        for (let location of cp.ships[ship].locations)
            if (location[0] == row && location[1] == col) {
                cp.ships[ship].life--;
                if (cp.ships[ship].life == 0) {
                    let newImg = document.createElement("img");
                    newImg.src = "imgs/battleship/" + ship + ".png";
                    newImg.style.position = "absolute";
                    let orientation = "horizontal"
                    if (cp.ships[ship].locations[0][1] == cp.ships[ship].locations[1][1])
                        orientation = "vertical"
                    if (orientation == "vertical") {
                        console.log("vertical")
                        newImg.style.transform = "rotate(90deg)";
                    }
                    let origin = cp.ships[ship].locations[0];
                    for (let location of cp.ships[ship].locations) {
                        if (orientation == "horizontal" && location[1] < origin[1])
                            origin = location;
                        else if (orientation == "vertical" && location[0] < origin[0])
                            origin = location;
                    }
                    let originCell = document.getElementById("boardCP").rows[origin[0]].cells[origin[1]];
                    originCell.appendChild(newImg);
                    let cellBounds = originCell.getBoundingClientRect();
                    if (orientation == "vertical")
                        newImg.style.left = cellBounds.left + 50 + "px";
                    newImg.style.top = cellBounds.top + "px";
                }
            }
    let newImg = document.createElement("img");
    newImg.src = "imgs/battleship/hit.png";
    newImg.style.position = "relative";
    newImg.style.zIndex = "1";
    document.getElementById("boardCP").rows[row].cells[col].appendChild(newImg);
};

/** Adds a visual hit marker to player's board.
    @pre    row, col >= 0; row, col <= 9
    @param  row The row # of board cell.
    @param  col The column # of board cell.
    @post   The ship's life that was hit at [row, col] is decreased by one. */
function hitPlayer(row, col) {
    for (let ship of Object.keys(player.ships))
        for (let location of player.ships[ship].locations)
            if (location[0] == row && location[1] == col)
                player.ships[ship].life--;
    let newImg = document.createElement("img");
    newImg.src = "imgs/battleship/hit.png";
    newImg.style.position = "relative";
    newImg.style.zIndex = "1";
    document.getElementById("board").rows[row].cells[col].appendChild(newImg);
};

/** Adds a visual miss marker to computer's board.
    @pre    row, col >= 0; row, col <= 9
    @param  row The row # of boardCP cell.
    @param  col The column # of boardCP cell.
    @post   Visual miss marker placed at [row, col]. */
function missCP(row, col) {
    let newImg = document.createElement("img");
    newImg.src = "imgs/battleship/miss.png";
    newImg.style.position = "relative";
    newImg.style.zIndex = "1";
    document.getElementById("boardCP").rows[row].cells[col].appendChild(newImg);
};

/** Adds a visual miss marker to player's board.
    @pre    row, col >= 0; row, col <= 9
    @param  row The row # of board cell.
    @param  col The column # of board cell.
    @post   Visual miss marker placed at [row, col]. */
function missPlayer(row, col) {
    let newImg = document.createElement("img");
    newImg.src = "imgs/battleship/miss.png";
    newImg.style.position = "relative";
    newImg.style.zIndex = "1";
    document.getElementById("board").rows[row].cells[col].appendChild(newImg);
};

/** Checks if player has won the game.
    @return true if all of computer's ships' lives == 0. false otherwise.*/
function checkWin() {
    for (let ship of Object.keys(cp.ships))
        if (cp.ships[ship].life > 0)
                return (false);
    return (true);
};

/** Checks if player has lost the game.
    @return true if all of player's ships' lives == 0. false otherwise.*/
function checkLoss() {
    for (let ship of Object.keys(player.ships))
        if (player.ships[ship].life > 0)
                return (false);
    return (true);
};

//Generates an array of 100 unique locations 
let locationsBag = []
for (let row = 0; row < 10; row++)
    for (let col = 0; col < 10; col++)
        locationsBag.push([row, col]);

/** Generates computer's guess by removing a random location from locationsBag.
    @post   Guess is removed from locationsBag array.
    @return Random location [x,y]. */
function generateGuess() {
    if (locationsBag.length == 0)
        return (null);
    let index = randomInt(0, locationsBag.length - 1);
    return (locationsBag.splice(index, 1)[0]);
}

/** The main loop of the game.
 *  - First checks whether player's guess is a hit and updates boardCP and
 *    computer gamestate accordingly.
 *  - If hit, check for win and if win, display winner.
 *  - Next generates computer's guess.
 *  - Checks whether computer's guess is a hit and updates board and
 *    player gamestate accordingly.
 *  - If hit, check for loss and if loss, display loser.
    @pre    clickEvent is object from clicking boardCP.
    @param  clickEvent The event object created by clicking boardCP td element.
    @post   One full step of the game. */
function gameLoop(clickEvent) {
    if (clickEvent.target.tagName == "IMG" || clickEvent.target.hasChildNodes())
        return;
    let cell = clickEvent.target;
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;

    cell.style.pointerEvents = "none";
    if (isHitCP(row, col)) {
        hitCP(row, col);
        if (checkWin()) {
            document.getElementById("winner").style.visibility = "visible";
            document.getElementById("boardCP").removeEventListener("click", gameLoop);
            return;
        }
    } else
        missCP(row, col);
    let guessCP = generateGuess();
    let rowGuess = guessCP[0];
    let colGuess = guessCP[1];
    if (isHitPlayer(rowGuess, colGuess)) {
        hitPlayer(rowGuess, colGuess)
        if (checkLoss()) {
            document.getElementById("loser").style.visibility = "visible";
            document.getElementById("boardCP").removeEventListener("click", gameLoop); 
            return;
        }
    } else
        missPlayer(rowGuess, colGuess)
}
document.getElementById("boardCP").addEventListener("click", gameLoop);

document.getElementById("btnBack").addEventListener("click", function() {
    window.location.href = "index.html";
});