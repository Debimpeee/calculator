import React from 'react'
import "./Display.css"

const Display = ({value}) => {

  const getFontSize = (length) =>{
    if (length > 10) {
      return '2rem';
    } else if (length > 5) {
      return '2.5rem';
    } else {
      return '3rem';
    }
  }
  return (
      <div className="display">
          <input type="text" readOnly value={value} style={{fontSize: getFontSize(value.length)}}/>
      </div>
  )
}

export default Display
















// import React from 'react'
// import "./Display.css"

// const Display = ({value}) => {
//   return (
//       <div className="display">
//         <div className="expression"></div>
//         <input type="text" readOnly value={value}/>
//       </div>
//   )
// }

// export default Display















// import React from 'react'
// import "./Display.css"

// const Display = ({ value, expression }) => {
//   return (
//       <div className="display">
//         <div className="expression">{expression}</div>
//         <input type="text" readOnly value={value}/>
//       </div>
//   )
// }

// export default Display

