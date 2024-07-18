import React, {useState} from 'react'
import "./Main.css"
import Button from '../Button/Button'
import Display from "../Display/Display"

const Main = () => {

  const [displayValue, setDisplayValue] = useState("")
  const [operator, setOperator] = useState(null)
  const [operand, setFirstOperand] = useState(null)

  const handleButtonClick = (value) => {
    if(value === "C"){
      setDisplayValue("");
      setOperator(null);
      setFirstOperand(null);
    } else if(value === "<"){
      setDisplayValue(displayValue.slice(0, -1))
    } else if(["/", "x", "+", "-"].includes(value)){
      
    }
  }
  
  return (

    <div className='main'>
        <div className="calculator">
          <Display value={displayValue}/>
          <Button onButtonClick={handleButtonClick}/>
        </div>
    </div>
  )
}

export default Main






// add, subtract, multiply, divide
// support decimal values
// calculate percentages
// invert values
// reset functionality
// format larger numbers
// output resize based on length