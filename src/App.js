// MAKING YOUR OWN 'HOOK'
import "./App.css";
import { useToggle } from "./useToggle";
import { useCounter } from "./useCounter";


function App() {  
  const { state: isVisible, toggle} = useToggle()
  const { valueCounter, sum, subtract } = useCounter()  

  return(
    <div className="App"> 
      <button onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>    
      {isVisible && <h1>Hidden text</h1>}      
      
      <button onClick={sum}>
      {"+"}
      </button>
      <h1>{valueCounter}</h1>
      <button onClick={subtract}>
      {"-"}
      </button>

    </div>
  );  
}

export default App;
