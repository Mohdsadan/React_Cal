import { useState } from "react";
import "./style.css";
function App() {
  const [inputValue, setInputValue] = useState("")
  const inputHandle = (value) =>{
    setInputValue(inputValue + value)
  }
  const Clear = () =>{
    setInputValue("")
  }
  const HandleDel = () =>{
    if(inputValue?.length){
      let val = inputValue.substring(0, inputValue?.length - 1)
    setInputValue(val)
    }
  }
  const Result = () =>{
    try{
      const finalResult = eval(inputValue)
      setInputValue(finalResult)
    }catch{
      setInputValue("Error!!")
    }
  }
  return (
    <div className="calculator-grid">
      <div className="output">
      <input readOnly value={inputValue} className="current-operand"/>
      </div>
      <button className="span-two" onClick={Clear}>AC</button>
      <button onClick={HandleDel}>DEL</button>
      <button onClick={() => inputHandle("/")}>/</button>
      <button onClick={() => inputHandle("1")}>1</button>
      <button onClick={() => inputHandle("2")}>2</button>
      <button onClick={() => inputHandle("3")}>3</button>
      <button onClick={() => inputHandle("*")}>*</button>
      <button onClick={() => inputHandle("4")}>4</button>
      <button onClick={() => inputHandle("5")}>5</button>
      <button onClick={() => inputHandle("6")}>6</button>
      <button onClick={() => inputHandle("+")}>+</button>
      <button onClick={() => inputHandle("7")}>7</button>
      <button onClick={() => inputHandle("8")}>8</button>
      <button onClick={() => inputHandle("9")}>9</button>
      <button onClick={() => inputHandle("-")}>-</button>
      <button onClick={() => inputHandle(".")}>.</button>
      <button onClick={() => inputHandle("0")}>0</button>
      <button onClick= {Result} className="span-two">=</button>
    </div>
  );
  
}

export default App;