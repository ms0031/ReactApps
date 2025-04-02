import React from 'react'

function Options({colors, onChange}) {
    return (
        <div>
            <select  
                onChange={onChange}
                className='text-black bg-gray-300 rounded-3xl'>
                <option value=''>All</option>
                {colors.map((color, index) => {
                   return <option key={index} value={color}>{color}</option>
                })}
            </select>
        </div>
    )
}

export default Options