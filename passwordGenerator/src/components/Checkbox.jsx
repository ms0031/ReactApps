import React from 'react'
function Checkbox(props) {
  return (
    <div className='flex gap-1'>
          <input type="checkbox"
              onClick={props.onClick} />
          <label className='font-bold'>{props.name}</label>    
    </div>
  )
}

export default Checkbox