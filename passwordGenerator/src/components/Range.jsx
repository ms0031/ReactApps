import React from 'react'
function Range(props) {
    return (
        <div id="slider" className='flex gap-3'>
            <input className='cursor-pointer accent-pink-500'
                type="range"
                value={props.value}
                min={props.min}
                max={props.max}
                list="markers"
                onChange={props.onChange}
            />
            <label className='font-bold'>{props.name}: {props.value}</label>
            <datalist id="markers">
                <option value="8"></option>
                <option value="10"></option>
                <option value="12"></option>
                <option value="14"></option>
                <option value="16"></option>
                <option value="18"></option>
                <option value="20"></option>
                <option value="22"></option>
                <option value="24"></option>
                <option value="26"></option>
                <option value="28"></option>
                <option value="30"></option>
                <option value="32"></option>
                <option value="34"></option>
            </datalist>
        </div>
    )
}

export default Range