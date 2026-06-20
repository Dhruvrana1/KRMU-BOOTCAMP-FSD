import React from 'react'
import Child from "./Child.jsx"
const parent = () => {
    const name = "Dhruv";
    const property = "Preet"
  return (
    <div>
      <h1>{name}</h1>
      <Child property={property}/>
    </div>
  )
}

export default parent
