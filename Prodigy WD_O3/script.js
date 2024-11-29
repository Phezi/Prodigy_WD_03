 const boardElement = document.getElementById('board');
    const messageElement = document.getElementById('message');
    let board = ['', '', '', '', '', '', '', '', ''];
    let currentPlayer = 'X';
    let gameOver = false;

    // Create the game board
    function createBoard() {
      boardElement.innerHTML = '';
      board.forEach((cell, index) => {
        const cellElement = document.createElement('div');
        cellElement.classList.add('cell');
        cellElement.textContent = cell;
        cellElement.addEventListener('click', () => handleMove(index));
        boardElement.appendChild(cellElement);
      });
    }

    // Handle player move
    function handleMove(index) {
      if (board[index] || gameOver) return;

      board[index] = currentPlayer;
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      checkWinner();
      createBoard();
    }

    // Check for a winner
    function checkWinner() {
      const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
      ];

      winningCombinations.forEach(combination => {
        const [a, b, c] = combination;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
          messageElement.textContent = `${board[a]} wins!`;
          gameOver = true;
        }
      });

      if (!board.includes('') && !gameOver) {
        messageElement.textContent = 'It\'s a draw!';
        gameOver = true;
      }
    }

    // Reset the game
    function resetGame() {
      board = ['', '', '', '', '', '', '', '', ''];
      currentPlayer = 'X';
      gameOver = false;
      messageElement.textContent = '';
      createBoard();
    }

    // Initialize the game
    createBoard();