import React from 'react'
import Square from './Square';

function Board({ squares, xIsNext, onPlay, winningLine: propWinningLine, resetKey }) {
    function calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        for (const [a, b, c] of lines) {
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return {
                    winner: squares[a],
                    winningLine: [a, b, c]
                };
            }
        }
        return null;
    }
    
    function handleClick(i) {
        const winnerInfo = calculateWinner(squares);
        if (winnerInfo || squares[i]) return;

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        
        // Check if this move created a winner
        const newWinnerInfo = calculateWinner(nextSquares);
        onPlay(nextSquares, newWinnerInfo ? newWinnerInfo.winningLine : null);
    }

    const winnerInfo = calculateWinner(squares);
    const winner = winnerInfo ? winnerInfo.winner : null;
    const winningLine = winnerInfo ? winnerInfo.winningLine : [];
    
    // Check for draw - all squares filled but no winner
    const isDraw = !winner && squares.every(square => square !== null);
    
    const status = winner
        ? `Winner: ${winner}`
        : isDraw
        ? "It's a Draw!"
        : `Current player: ${xIsNext ? 'X' : 'O'}`;

    return (
        <> 
            <div>
                <div className="mx-2.5 text-3xl text-black/75">{status}</div>
                <div className="board">
                    {[...Array(9)].map((_, i) => (
                        <Square
                            key={`${i}-${resetKey}`} 
                            value={squares[i]}
                            onSquareClick={() => handleClick(i)}
                            winner={winner}
                            isWinningSquare={winningLine.includes(i)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default Board