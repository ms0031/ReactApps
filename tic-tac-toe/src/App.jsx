import { useState } from 'react';
import './App.css';
import Board from './components/Board';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  }

  return (
    <div className="flex-col justify-items-center bg-white/50 p-8 px-14 rounded-3xl">
      <div className="">
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
      </div>
      <button className="bg-zinc-950 p-4 text-2xl rounded-3xl text-white" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
}


