import React, { useState } from "react";
import home from './home'
import Form_handling from "./form_handling";
const App= ()=>{

  const[count,setCount] = useState(0)

  const handleClick = ()=>{
     setCount(count+1)     
  }
  const decrement = ()=>{
    setCount(count -1)
  }
  const resetButton = ()=>{
    setCount(0)
  }

  return(
    <>
    <div> App</div>
    <h1> {count}</h1>
    <button onClick={handleClick}>Increment</button><br></br>
    <button onClick={decrement}>Decrement</button><br></br>
    <button onClick={resetButton}>Reset</button>
    <Form_handling></Form_handling>
    </>
  )


}

export default App