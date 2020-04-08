function createTable() {
    for (let row = 0; row < 10; row++)
    {
        let board = document.getElementById("board");
        let newRow = document.createElement("tr");
        board.appendChild(newRow);
        for (let col = 0; col < 10; col++)
        {
            let newCol = document.createElement("td");
            newRow.appendChild(newCol);
        }
    }
};

createTable();