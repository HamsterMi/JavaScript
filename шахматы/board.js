let board = {
    createChessBoard() {
        var chessBoard = document.createElement("div");
        document.body.appendChild(chessBoard);
        chessBoard.setAttribute("id", "board");
        this.makeChessCells(chessBoard);
    },

    makeChessCells(chessBoard) {
        for (var i = config.rowsCount; i >= 1; i--) {
            var rowCells = document.createElement("div");
            chessBoard.appendChild(rowCells);
            for (var j = config.colsCount; j >= 1; j--) {
                var chessCell = document.createElement("div");
                rowCells.appendChild(chessCell);
                chessCell.classList.add("chessCell");

                if (i === 10 || i === 1) {
                    chessCell.innerHTML = config.arrayFrameRow[10 - j];
                } else {
                    if (j === 10 || j === 1) {
                        chessCell.innerHTML = i - 1;
                    } else {
                        var color = this.colorSelection(i, j);
                        chessCell.classList.add(color);
                        this.itIsСhessMan(i, j, chessCell);
                    }
                }
            }
        }
    },

    itIsСhessMan(i, j, chessCell) {

        chessMen.forEach(item => {
            item.beginPlace.forEach(item => {
                if (item.row === i - 1 &&
                    item.col === config.arrayFrameRow[10 - j]
                ) {
                    chessCell.innerHTML = item.picture;
                }
            })
        })
    },

    colorSelection(i, j) {
        if (i % 2) {
            if (j % 2) {
                return "white";
            } else {
                return "black";
            }
        } else {
            if (j % 2) {
                return "black";
            } else {
                return "white";
            }
        }
    }
}

board.createChessBoard();