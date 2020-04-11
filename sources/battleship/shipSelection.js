function shipSelect(clickEvent) {
    if (selectedShip)
        return;
    let image = clickEvent.target;
    selectedShip = image.id;
    document.body.appendChild(image);
    image.style.pointerEvents = "none";

    let mousePosX = 0;
    let mousePosY = 0;

    function imageToCursor(mouseEvent) {
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

    imageToCursor(clickEvent);
    document.addEventListener("mousemove", imageToCursor);
    document.addEventListener("keydown", rotateShip);

    document.getElementById("board").onclick = function(clickEvent) {
        if (clickEvent.target.tagName == "IMG")
            return;
        clickEvent.target.appendChild(image);
        let cellBounds = clickEvent.target.getBoundingClientRect();
        if (ships[selectedShip] == "horizontal")
            image.style.left = cellBounds.left + "px";
        else if (ships[selectedShip] == "vertical")
            image.style.left = cellBounds.left + 50 + "px";
        image.style.top = cellBounds.top + "px";
        image.style.pointerEvents = "auto";

        document.removeEventListener("mousemove", imageToCursor);
        document.removeEventListener("keydown", rotateShip);
        selectedShip = "";
    };
};

let ships = {"carrier": "horizontal", "battleship": "horizontal", 
    "destroyer": "horizontal", "submarine": "horizontal", "patrolboat": "horizontal"};
let selectedShip = "";

for (ship in ships)
    document.getElementById(ship).addEventListener("click", shipSelect);