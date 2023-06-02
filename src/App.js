import "./App.css"
import { useState } from 'react'

function App() {
  const [age, setAge] = useState(0)

  const increaseAge = () => {
    setAge(age + 1)
  }

  const decreaseAge = () => {
    setAge(age - 1)
  }
 
  const setToZero = () => {
    setAge(0)
  }

  return ( 
    <div className="App">
      {age}
      <button  onClick={increaseAge}> Increase Age</button>
      <button  onClick={decreaseAge}> Increase Age</button>
      <button  onClick={setToZero}> Increase Age</button>
      </div>
  )
}

// CREATE A COMPONENT FOR THE USER
export default App