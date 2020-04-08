function initGameState() {
    let gameState = {
        "board": [...Array(10)].map(() => Array(10).fill(0)),
        "ships": {
            "carrier": {
                "life": 5,
                "locations": [] },
            "battleship": {
                "life": 4,
                "locations": [] },
            "destroyer": {
                "life": 3,
                "locations": [] },
            "submarine": {
                "life": 3,
                "locations": [] },
            "patrolBoat": {
                "life": 2,
                "locations": [] }
        }
    };
    return (gameState);
};

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function generateLocations(shipLength) {
    let row = randomInt(1,10);
    let col = randomInt(1,10);
    let direction = randomInt(1,4);
    let locations = [];

    locations.push([row,col]);
    let remainingLocations = shipLength - 1;
    while (remainingLocations > 0) {
        switch (direction) {
            case 1: //NORTH
                row--;
                break;
            case 2: //EAST
                col++;
                break;
            case 3: //SOUTH
                row++;
                break;
            case 4: //WEST
                col--;
                break;
        }
        if (1 <= row && row <= 10 && 1 <= col && col <= 10)
            locations.push([row,col]);
        else {
            locations = generateLocations(shipLength);
            break;
        }
        remainingLocations--;
    }
    return (locations);
};

function checkIntersect(newLocations, ships) {
    for (let ship of Object.keys(ships))
        for (let location of ships[ship].locations)
            for (let newLocation of newLocations)
                if (location[0] == newLocation[0] && location[1] == newLocation[1])
                    return (true);
    return (false);
};

function initStateCP() {
    let gameState = initGameState();
    let ships = gameState.ships;
    let newLocations = [];

    for (let ship of Object.keys(ships)) {
        do {
            newLocations = generateLocations(ships[ship].life);
        }
        while (checkIntersect(newLocations, ships))
        ships[ship].locations = newLocations;
    }
    return (gameState);
};

function initStatePlayer() {
    return (initGameState());
};