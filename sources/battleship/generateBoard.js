/** Creates a 10x10 table from a given table id.
    @pre    Valid table id.
    @param  id The id of the HTML table element.
    @post   The HTML table element is filled with 10 tr's x 10 td's. */
function createTable(id) {
    for (let row = 0; row < 10; row++)
    {
        let board = document.getElementById(id);
        let newRow = document.createElement("tr");
        board.appendChild(newRow);
        for (let col = 0; col < 10; col++)
        {
            let newCol = document.createElement("td");
            newRow.appendChild(newCol);
        }
    }
};

createTable("board");