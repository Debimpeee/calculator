// import React, { useState } from 'react';
// import './Main.css';
// import { LuDivide } from 'react-icons/lu';
// import { LiaTimesSolid } from 'react-icons/lia';
// import { HiOutlineBackspace } from 'react-icons/hi';
// import { FiMinus } from 'react-icons/fi';

// const Main = () => {
//   const [screen, setScreen] = useState('');

//   const handleButtonClick = (value) => {
//     if (value === 'C') {
//       setScreen('');
//     } else if (value === '<') {
//       setScreen(screen.slice(0, -1));
//     } else if (value === '=') {
//       try {
//         setScreen(eval(screen).toString());
//       } catch {
//         setScreen('Error');
//       }
//     } else {
//       setScreen(screen + value);
//     }
//   };

//   return (
//     <div className='main'>
//       <div className='calculator'>
//         <div className='display'>
//           <input type='text' value={screen} readOnly />
//         </div>
//         <div className='keys'>
//           <div className='key action clear only' onClick={() => handleButtonClick('C')}>
//             <p>C</p>
//           </div>
//           <div className='key action operator division mains' onClick={() => handleButtonClick('/')}>
//             <LuDivide />
//           </div>
//           <div className='key action operator multiplication mains' onClick={() => handleButtonClick('*')}>
//             <LiaTimesSolid />
//           </div>
//           <div className='key action delete mains' onClick={() => handleButtonClick('<')}>
//             <HiOutlineBackspace />
//           </div>
//           <div className='key number mains' onClick={() => handleButtonClick('7')}>
//             <p>7</p>
//           </div>
//           <div className='key number mains' onClick={() => handleButtonClick('8')}>
//             <p>8</p>
//           </div>
//           <div className='key number mains' onClick={() => handleButtonClick('9')}>
//             <p>9</p>
//           </div>
//           <div className='key action operator subtraction mains' onClick={() => handleButtonClick('-')}>
//             <FiMinus />
//           </div>
//           <div className='key number mains' onClick={() => handleButtonClick('4')}>
//             <p>4</p>
//           </div>
//           <div className='key number mains' onClick={() => handleButtonClick('5')}>
//             <p>5</p>
//           </div>
//           <div className='key number mains' onClick={() => handleButtonClick('6')}>
//             <p>6</p>
//           </div>
//           <div className='key action operator addition mains' onClick={() => handleButtonClick('+')}>
//             <p>+</p>
//           </div>
//           <div className='key number mains' onClick={() => handleButtonClick('1')}>
//             <p>1</p>
//           </div>
//           <div className='key number mains' onClick={() => handleButtonClick('2')}>
//             <p>2</p>
//           </div>
//           <div className='key number mains' onClick={() => handleButtonClick('3')}>
//             <p>3</p>
//           </div>
//           <div className='key equal operator nons' onClick={() => handleButtonClick('=')}>
//             <p>=</p>
//           </div>
//           <div className='key operator percent only' onClick={() => handleButtonClick('%')}>
//             <p>%</p>
//           </div>
//           <div className='key number mains' onClick={() => handleButtonClick('0')}>
//             <p>0</p>
//           </div>
//           <div className='key operator decimal mains' onClick={() => handleButtonClick('.')}>
//             <p>.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;





























// import React, { useState } from 'react';
// import './Main.css';
// import Button from '../Button/Button';
// import Display from '../Display/Display';

// const Main = () => {
//   const [displayValue, setDisplayValue] = useState("");
//   const [operator, setOperator] = useState(null);
//   const [firstOperand, setFirstOperand] = useState(null);

//   const handleButtonClick = (value) => {
//     if (value === "C") {
//       setDisplayValue("");
//       setOperator(null);
//       setFirstOperand(null);
//     } else if (value === "<") {
//       setDisplayValue(displayValue.slice(0, -1));
//     } else if (["/", "x", "-", "+"].includes(value)) {
//       setFirstOperand(parseFloat(displayValue));
//       setOperator(value);
//       setDisplayValue("");
//     } else if (value === "=") {
//       const secondOperand = parseFloat(displayValue);
//       let result;
//       switch (operator) {
//         case "/":
//           result = firstOperand / secondOperand;
//           break;
//         case "x":
//           result = firstOperand * secondOperand;
//           break;
//         case "-":
//           result = firstOperand - secondOperand;
//           break;
//         case "+":
//           result = firstOperand + secondOperand;
//           break;
//         default:
//           break;
//       }
//       setDisplayValue(result.toString());
//       setOperator(null);
//       setFirstOperand(null);
//     } else {
//       setDisplayValue(displayValue + value);
//     }
//   };

//   return (
//     <div className='main'>
//       <div className="calculator">
//         <Display value={displayValue}/>
//         <Button onButtonClick={handleButtonClick}/>
//       </div>
//     </div>
//   );
// };

// export default Main;
