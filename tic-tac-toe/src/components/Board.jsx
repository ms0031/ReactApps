import React from 'react'
import Square from './Square';
function Board({ squares, xIsNext, onPlay }) {
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
                return squares[a];
            }
        }
        return null;
    }
    function handleClick(i) {
        if (calculateWinner(squares) || squares[i]) return;

        const nextSquares = squares.slice();
        nextSquares[i] = xIsNext ? 'X' : 'O';
        onPlay(nextSquares);
    }

    const winner = calculateWinner(squares);
    const status = winner
        ? `Winner: ${winner}`
        : `Current player: ${xIsNext ? 'X' : 'O'}`;

    return (
        <> <div>
            <div className="text-3xl text-black/75">{status}</div>
            <div className="board">
                {[...Array(9)].map((_, i) => (
                    <Square
                        key={i}
                        value={squares[i]}
                        onSquareClick={() => handleClick(i)}
                    />
                ))}
            </div>
            </div>
        </>
    );
}

export default Board