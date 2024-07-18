import React from 'react'
import "./Display.css"

const Display = ({ value }) => {
  return (
      <div className="display">
        <input type="text" readOnly value={value}/>
      </div>
  )
}

export default Display

