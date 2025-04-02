import React, { useState } from 'react'

function Square({ value, onSquareClick, winner=false }) {
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = () => {
        if (winner) return;
        setIsClicked(true);
        onSquareClick();
    };
    
    return (
        <button 
            className={`rounded-3xl w-20 h-20 cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-110 border-2 border-zinc-950/75 ${isClicked ? 'bg-rose-400/80' : 'bg-rose-200/40'} ${isClicked ? 'hover:bg-rose-500' : 'hover:bg-rose-400/10'} text-white text-3xl`} 
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

export default Square