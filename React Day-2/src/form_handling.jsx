import React, { useState } from 'react'

const Form_handling = () => {

    const [name,setName] = useState("");
    const handleChange = (e)=>{
        setName(e)
    }   
  return (
    <form>
    <div>
      <input type='text' placeholder='Enter Name' onChange={e => handleChange(e.target.value)}></input>
      <button onClick={Submit}>Submit</button>
    </div>
    </form>
  )
}

export default Form_handling
