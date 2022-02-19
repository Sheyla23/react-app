import React from 'react'
import { useSelector } from 'react-redux'

const App = () => {
    const {value}=useSelector((state)=> state.greet);
  return (
    <div>
        <h3>redux toolkit</h3>
        <h1>{value}</h1>
    </div>
  )
}

export default App