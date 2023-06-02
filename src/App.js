import "./App.css"
import { useState } from 'react'

function App() {
  const [showText, setShowText] = useState(true)

  const hideShow = () => {
    setShowText(!showText)
  }

  return ( 
    <div className="App">
      <button onClick={hideShow}> Show / Hide</button>
      {showText && <h1> Hi my name is Brenno</h1>}
    </div>
  )
}

// CREATE A COMPONENT FOR THE USER
export default App