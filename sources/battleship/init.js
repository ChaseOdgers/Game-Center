/** Creates and initializes an object to hold the game state.
    @post   Game state is created and initialized.
    @return gameState object. */
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
            "patrolboat": {
                "life": 2,
                "locations": [] }
        }
    };
    return (gameState);
};

/** Finds a random integer between given min (inclusive) and max (inclusive)
    @pre    Valid integers.
    @param  min The mininum random number.
    @param  max The maximum random number.
    @return Random integer within range. */
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

/** Randomly generates an origin, and returns an array of locations 
 *  outward from that origin in a random direction, including the origin.
    @pre    Valid ship length: 5,4,3,2
    @param  shipLength Corresponds to length of array to generate.
    @return Array of locations: [[x,y],[x,y],...] */
function generateLocations(shipLength) {
    let row = randomInt(0,9);
    let col = randomInt(0,9);
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
        if (0 <= row && row <= 9 && 0 <= col && col <= 9)
            locations.push([row,col]);
        else {
            locations = generateLocations(shipLength);
            break;
        }
        remainingLocations--;
    }
    return (locations);
};

/** Checks whether an array of locations intersects with any ship in a given
 *  ships key.
    @pre    newLocations format: [[x,y],[x,y],...]
    @pre    ships format is given from the ships key of gameState object.
    @param  newLocations Locations to be checked for intersect.
    @param  ships Collection of ships to be compared against.
    @return True if any ship intersects with newLocations, False otherwise. */
function checkIntersect(newLocations, ships) {
    for (let ship of Object.keys(ships))
        for (let location of ships[ship].locations)
            for (let newLocation of newLocations)
                if (location[0] == newLocation[0] && location[1] == newLocation[1])
                    return (true);
    return (false);
};

/** Creates and initializes the computer's gameState object. Randomly generates
 *  ship locations for the computer and adds them to the gameState.
    @post   Computer's gameState is ready.
    @return The computer's complete gameState object. */
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

/** Creates and initializes the player's gameState object.
    @post   Player's gameState is ready.
    @return The player's complete gameState object. */
function initStatePlayer() {
    return (initGameState());
};

let player = initStatePlayer();
let cp = initStateCP();