/** Runs every time a ship is clicked before the game is started.
 *  - Removes the ship from its selected position.
 *  - Adds a mousemove event listener so that the ship always follows the
 *    location of the mouse.
 *  - Adds a keydown event listener to rotate the selected ship.
 *  - Adds a click event listener to the board to place the ship at the
 *    clicked location on the board, if the location doesn't intersect anything.
 *  - Makes the start button visible if a placed ship is the final one.
    @param  clickEvent the event object created by clicking.
    @post   Selected ship follows cursor and event listeners are ready to rotate
            and place ship. */
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
    //EVENT LISTENERS
    document.addEventListener("mousemove", shipToCursor);
    document.addEventListener("keydown", rotateShip);
    document.getElementById("board").addEventListener("click", shipToBoard);

    /** Moves the ship's first location to be centered at the mouseEvent's 
     *  location.
        @pre    mouseEvent is a click event or mousemove event.
        @param  mouseEvent The event object created by clicking or moving mouse.
        @post   Ship's first location matches the mouseEvent's location. */
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

    /** Rotates the ship to either horizontal or vertical orientation.
        @pre    keyEvent is a keydown event.
        @param  keyEvent .keyCode 82 is 'R' key. Rotate when pressed.
        @post   Ship rotated. Ship's orientation in ship object is updated. */
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

    /** Places the ship at the clicked location on the board, if the location
     *  doesn't intersect other ships and ship is within bounds.
     *  - Removes shipToCursor and rotateShip event listeners if ship is placed.
        @pre    boardClick is a click event on the board element.
        @param  boardClick The event object created by clicking board element.
        @post   Ship placed at clicked board location. Event listeners updated.
                Start game button made visible if final ship placed. */
    function shipToBoard(boardClick) {
        if (boardClick.target.tagName == "IMG")
            return;
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

    /** Checks whether the ship can be placed at the clicked cell on the board.
        @pre    cell is a valid TD object and a child of board element.
        @param  cell TD element object.
        @return true if valid placement. false otherwise. */
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

    /** Checks whether the game is ready to start, i.e. all ships are placed.
        @return true if all player's ships have a location. false otherwise. */
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
document.getElementById("boardCP").style.visibility = "collapse";

for (ship in ships)
    document.getElementById(ship).addEventListener("click", shipSelect);