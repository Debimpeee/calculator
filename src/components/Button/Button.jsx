import React from 'react'
import "./Button.css"
import { LuDivide } from "react-icons/lu";
import { LiaTimesSolid } from "react-icons/lia";
import { HiOutlineBackspace } from "react-icons/hi";
import { FiMinus } from "react-icons/fi";

const Button = ({onButtonClick}) => {

    const handleClick = (value) => {
        onButtonClick(value)
    }
  return (
    <div className="buttons">
        <div className="button action clear only" onClick={() => {handleClick("C")}}>
            <p>C</p>
        </div>

        <div className="button action operator division mains" onClick={() => {handleClick("/")}}>
            <LuDivide />
        </div>

        <div className="button action operator multiplication mains" onClick={() => {handleClick("x")}}>
            <LiaTimesSolid/>
        </div> 

        <div className="button action delete mains" onClick={() => {handleClick("<")}}>
            <HiOutlineBackspace/>
        </div>

        <div className="button number mains" onClick={() => {handleClick("7")}}>
            <p>7</p>
        </div>

        <div className="button number mains" onClick={() => {handleClick("8")}}>
            <p>8</p>
        </div>

        <div className="button number mains" onClick={() => {handleClick("9")}}>
            <p>9</p>
        </div>

        <div className="button action operator subtraction mains" onClick={() => {handleClick("-")}}>
            <FiMinus/>
        </div>

        <div className="button number mains" onClick={() => {handleClick("4")}}> 
            <p>4</p>
        </div>

        <div className="button number mains" onClick={() => {handleClick("5")}}>
            <p>5</p>
        </div>

        <div className="button number mains" onClick={() => {handleClick("6")}}>
            <p>6</p>
        </div>

        <div className="button action operator addition mains" onClick={() => {handleClick("+")}}>
            <p>+</p>
        </div>

        <div className="button number mains" onClick={() => {handleClick("1")}}>
            <p>1</p>
        </div>

        <div className="button number mains" onClick={() => {handleClick("2")}}>
            <p>2</p>
        </div>

        <div className="button number mains" onClick={() => {handleClick("3")}}>
            <p>3</p>
        </div>

        <div className="button equal operator nons" onClick={() => {handleClick("=")}}>
            <p>=</p>
        </div>

        <div className="button operator percent only" onClick={() => {handleClick("%")}}>
            <p>%</p>
        </div>

        <div className="button number mains" onClick={() => {handleClick("0")}}>
            <p>0</p>
        </div>

        <div className="button operator decimal mains" onClick={() => {handleClick(".")}}>
            <p>.</p>
        </div>
    </div>
  )
}

export default Button



