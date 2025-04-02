import { useState } from 'react';
import './App.css';
import Board from './components/Board';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
  };
  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    window.location.reload();
  }

  return (
    <div className="flex-col justify-items-center bg-white/50 p-8 px-14 rounded-3xl">
      <div className="">
        <Board squares={currentSquares} xIsNext={xIsNext} onPlay={handlePlay} />
      </div>
      <button className={`p-4 px-18 text-2xl rounded-3xl text-white ${isClicked?'bg-red-600/75 scale-105':'bg-zinc-950'}`} onClick={() => {
          handleClick();
          setTimeout(() => resetGame(),500);
        }}>
        Reset Game
      </button>
    </div>
  );
}


