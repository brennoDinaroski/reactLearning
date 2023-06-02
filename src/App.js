import "./App.css"
import { useState } from 'react'

function App() {
  const [textColor, setTextColor] = useState("black")

  return ( 
    <div className="App">
      <button onClick={() => 
        {setTextColor(textColor ==="black" ? "red" : "black")}}
        
        > change Color</button>
      <h1 style={{color: textColor}}> Hi my name is Brenno</h1>
    </div>
  )
}

// CREATE A COMPONENT FOR THE USER
export default App