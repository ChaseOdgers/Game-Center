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

function isHitCP(row, col) {
    for (let ship of Object.keys(cp.ships))
        for (let location of cp.ships[ship].locations)
            if (location[0] == row && location[1] == col)
                return (true);
    return (false);
};

function isHitPlayer(row, col) {
    for (let ship of Object.keys(player.ships))
        for (let location of player.ships[ship].locations)
            if (location[0] == row && location[1] == col)
                return (true);
    return (false);
};

function hitCP(row, col) {
    for (let ship of Object.keys(cp.ships))
        for (let location of cp.ships[ship].locations)
            if (location[0] == row && location[1] == col)
                cp.ships[ship].life--;
    let newImg = document.createElement("img");
    newImg.src = "imgs/battleship/hit.png";
    document.getElementById("boardCP").rows[row].cells[col].appendChild(newImg);
};

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

function missCP(row, col) {
    let newImg = document.createElement("img");
    newImg.src = "imgs/battleship/miss.png";
    document.getElementById("boardCP").rows[row].cells[col].appendChild(newImg);
};

function missPlayer(row, col) {
    let newImg = document.createElement("img");
    newImg.src = "imgs/battleship/miss.png";
    newImg.style.position = "relative";
    newImg.style.zIndex = "1";
    document.getElementById("board").rows[row].cells[col].appendChild(newImg);
};

function checkWin() {
    for (let ship of Object.keys(cp.ships))
        if (cp.ships[ship].life > 0)
                return (false);
    return (true);
};

function checkLoss() {
    for (let ship of Object.keys(player.ships))
        if (player.ships[ship].life > 0)
                return (false);
    return (true);
};

let locationsBag = []
for (let row = 0; row < 10; row++)
    for (let col = 0; col < 10; col++)
        locationsBag.push([row, col]);
function generateGuess() {
    if (locationsBag.length == 0)
        return (null);
    let index = randomInt(0, locationsBag.length - 1);
    return (locationsBag.splice(index, 1)[0]);
}

function gameLoop(clickEvent) {
    if (clickEvent.target.tagName == "IMG" || clickEvent.target.hasChildNodes())
        return;
    let cell = clickEvent.target;
    let row = cell.parentNode.rowIndex;
    let col = cell.cellIndex;

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