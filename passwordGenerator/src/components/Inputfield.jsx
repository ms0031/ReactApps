import React from 'react'

function Inputfield(props) {
  return (
    <div>
          <input
              type='text'
              value={props.value}
              readOnly={true}
              className={`${props.className} border w-94 border-black rounded-3xl p-2 ${props.bg}`}
          ></input>
    </div>
  )
}

export default Inputfield