import React, { useState } from 'react'

function Square({ value, onSquareClick, winner, isWinningSquare }) {
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = () => {
        if (winner) return;
        setIsClicked(true);
        onSquareClick();
    };
    
    return (
        <button 
            className={`rounded-3xl w-20 h-20 cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-110 border-2 border-zinc-950/75 
                ${isWinningSquare ? 'bg-red-500 scale-110' : isClicked ? 'bg-rose-400' : 'bg-rose-200/40'} 
                ${isClicked ? 'hover:bg-rose-500' : 'hover:bg-rose-400/10'} 
                text-white text-3xl ${winner ? 'cursor-not-allowed opacity-80' : ''}`} 
            onClick={handleClick}
            disabled={winner}
        >
            {value}
        </button>
    );
}

export default Square