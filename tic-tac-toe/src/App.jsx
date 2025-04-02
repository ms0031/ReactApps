import { useState } from 'react';
import './App.css';
import Board from './components/Board';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];
  const [isClicked, setIsClicked] = useState(false);
  const [winningLine, setWinningLine] = useState(null);
  const [resetKey, setResetKey] = useState(0); 
  
  const handleClick = () => {
    setIsClicked(true);
  };
  
  function handlePlay(nextSquares, winLine) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
    setWinningLine(winLine);
  }

  function resetGame() {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
    setWinningLine(null);
    setIsClicked(false);
    setResetKey(prevKey => prevKey + 1); 
  }

  return (
    <div className="flex-col justify-items-center bg-white/30 p-8 px-14 rounded-3xl">
      <div className="">
        <Board 
          squares={currentSquares} 
          xIsNext={xIsNext} 
          onPlay={handlePlay} 
          winningLine={winningLine}
          resetKey={resetKey} 
        />
      </div>
      <button className={`p-4 px-18 text-2xl rounded-3xl text-white ${isClicked?'bg-red-600/75 scale-110':'bg-zinc-900/85'}`} onClick={() => {
          handleClick();
          setTimeout(() => resetGame(), 250);
        }}>
        Reset Game
      </button>
    </div>
  );
}


