import "./App.css"
import { User } from "./User.js"

function App() {
  const planets = [
    { name: "Mars", isGasPlanet: false, mass: 1000},
    { name: "Earth", isGasPlanet: false, mass: 1500},
    { name: "Jupiter", isGasPlanet: true, mass: 500},
    { name: "Venus", isGasPlanet: false, mass: 250},
    { name: "Neptune", isGasPlanet: true, mass: 1950},
    { name: "Uranus", isGasPlanet: true, mass: 2100},
  ]

  return ( 
    <>
    <h1 style={{textAlign: "center", color: "blue"}}>Gas Planets</h1>
    <div className="App">
      {planets.map ((planet) => {
        return ( 
          planet.mass >= 2000 ?       
        <GasPlanets name={planet.name} gas={planet.isGasPlanet} key={planet.key} />        
        : ""
        )        
      })}    
    </div>
    </>   
  )
}

// CREATE A COMPONENT FOR THE USER
const GasPlanets = (props) => {  
  return(  
    <div>
      <h2 key={props.key}> Name: {props.name}</h2>      
    </div>  
  )
}


export default App