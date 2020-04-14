function shipSelect(clickEvent) {
    if (selectedShip)
        return;
    let mousePosX = 0;
    let mousePosY = 0;
    let image = clickEvent.target;

    selectedShip = image.id;
    player.ships[selectedShip].locations = [];
    document.body.appendChild(image);
    image.style.pointerEvents = "none";
    document.getElementById("btnStart").style.visibility = "hidden";

    shipToCursor(clickEvent);
    document.addEventListener("mousemove", shipToCursor);
    document.addEventListener("keydown", rotateShip);
    document.getElementById("board").addEventListener("click", shipToBoard);

    function shipToCursor(mouseEvent) {
        mousePosX = mouseEvent.clientX;
        mousePosY = mouseEvent.clientY;
        image.style.position = "absolute";
        if (ships[selectedShip] == "horizontal")
            image.style.left = mouseEvent.clientX - 25 + "px";
        else if (ships[selectedShip] == "vertical")
            image.style.left = mouseEvent.clientX + 25 + "px";
        image.style.top = mouseEvent.clientY - 25 + 'px';
    };

    function rotateShip(keyEvent) {
        if (keyEvent.keyCode === 82) {
            if (ships[selectedShip] == "horizontal") {
                image.style.transform = "rotate(90deg)";
                image.style.left = mousePosX + 25 + "px";
                ships[selectedShip] = "vertical";
            }
            else if (ships[selectedShip] == "vertical") {
                image.style.transform = "rotate(0deg)";
                image.style.left = mousePosX - 25 + "px";
                ships[selectedShip] = "horizontal";
            }
        }
    }

    function shipToBoard(boardClick) {
        if (boardClick.target.tagName == "IMG")
            return;
        //check if anything other than TD and if so get proper TD ?
        if (!validPlacement(boardClick.target))
            return;

            boardClick.target.appendChild(image);
        let cellBounds = boardClick.target.getBoundingClientRect();
        if (ships[selectedShip] == "horizontal")
            image.style.left = cellBounds.left + "px";
        else if (ships[selectedShip] == "vertical")
            image.style.left = cellBounds.left + 50 + "px";
        image.style.top = cellBounds.top + "px";
        image.style.pointerEvents = "auto";

        document.removeEventListener("mousemove", shipToCursor);
        document.removeEventListener("keydown", rotateShip);
        document.getElementById("board").removeEventListener("click", shipToBoard)
        selectedShip = "";
        if (readyToStart())
            document.getElementById("btnStart").style.visibility = "visible";
    }

    function validPlacement(cell) {
        let row = cell.parentNode.rowIndex;
        let col = cell.cellIndex;
        let locations = []

        locations.push([row,col]);
        let remainingLocations = player.ships[selectedShip].life - 1;
        while (remainingLocations > 0) {
            if (ships[selectedShip] == "horizontal")
                col++;
            else if (ships[selectedShip] == "vertical")
                row++;
            if (!(0 <= row && row <= 9 && 0 <= col && col <= 9))
                return (false);
            locations.push([row,col]);
            remainingLocations--;
        }
        if (checkIntersect(locations, player.ships))
            return (false);
        player.ships[selectedShip].locations = locations;
        return (true);
    }

    function readyToStart() {
        for (ship in ships)
            if (!player.ships[ship].locations[0])
                return (false);
        return (true);
    }
};

let ships = {"carrier": "horizontal", "battleship": "horizontal", 
    "destroyer": "horizontal", "submarine": "horizontal", "patrolboat": "horizontal"};
let selectedShip = "";

for (ship in ships)
    document.getElementById(ship).addEventListener("click", shipSelect);