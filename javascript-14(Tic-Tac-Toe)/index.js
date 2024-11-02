var board = document.getElementById("board")
var cell = document.querySelectorAll(".cell")

var currentPlayer = "X"
var gameBoard = ['', '', '', '', '', '', '', '', '']
var gameActive = true

board.addEventListener('click', function (e) {
    console.log(e.target)
    var celldiv = e.target
    var cellIndex = celldiv.dataset.index

    if (gameBoard[cellIndex] === '' && gameActive) {
        gameBoard[cellIndex] = currentPlayer
        celldiv.innerHTML = currentPlayer

        if (checkWinner()) {
             alert(` Player ${currentPlayer} win!`)
             resetGame()
        }else if(isBoardFull()){
            alert('its tie!')
            resetGame()
        }else{
             currentPlayer = currentPlayer === "X" ? "O" : "X"
        }
    }
})

function checkWinner() {
    var winPatterns = [
        [0, 3, 6], [1, 4, 7], [2, 5, 8]
        , [0, 1, 2], [3, 4, 5], [6, 7, 8]
        , [0, 4, 8], [2, 4, 6]
    ]

    for (const pattern of winPatterns) {
        var [a, b, c] = pattern
        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]) {
             gameActive = false
            return true
        }
    }
    return false
}

function isBoardFull() {
    return !gameBoard.includes('')
}

function resetGame() {
    gameBoard = ['', '', '', '', '', '', '', '', '']
     currentPlayer = "X"
     gameActive = true

     cell.forEach(e => {
        e.textContent = ''
     });
}
