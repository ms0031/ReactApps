import React from 'react'

function Options({colors, onChange}) {
    return (
        <div>
            <select  
                onChange={onChange}
                className='text-black border-2 lg:my-10 lg:mx-10 my-5 bg-gray-300/80 p-4 text-xl font-bold rounded-3xl'>
                <option value=''>COLOR ---</option>
                {colors.map((color, index) => {
                   return <option key={index} value={color}>{color.toUpperCase()}</option>
                })}
            </select>
        </div>
    )
}

export default Options