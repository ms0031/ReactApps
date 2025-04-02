import React from 'react'

function ButtonCmp(props) {
  return (
    <div>
        <button className={props.className} onClick={props.onClick}>{props.name}</button>
    </div>
  )
}

export default ButtonCmp