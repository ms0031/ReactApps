import React, { useState } from 'react'

function Square({ value, onSquareClick }) {
    const [isClicked, setIsClicked] = useState(false);
    
    const handleClick = () => {
        setIsClicked(true);
        onSquareClick();
    };
    
    return (
        <button 
            className={`rounded-3xl w-20 h-20 cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-110 border-2 border-zinc-950/75 ${isClicked ? 'bg-indigo-500' : 'bg-amber-300'} ${isClicked ? 'hover:bg-indigo-600' : 'hover:bg-indigo-500'} text-white text-3xl`} 
            onClick={handleClick}
        >
            {value}
        </button>
    );
}

export default Square