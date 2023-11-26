import React from "react"
import './index.css'
import SlotM from "./SlotM"
import Matching from "./Matching";


function App() {
  return (
    <>
    <div className="wrapper">
    <h1 className="heading"> 🎰 <span style={{fontWeight:'bold'}}>Slot machine Game</span> 🎰 </h1>
     <SlotM x={"😄"} y={"😄"} z={"😄"} />
     <hr/>
     <SlotM x={" 👍 "} y={" 🍊 "} z={" 🍇 "} />
     <hr/>
     <SlotM x={" 👶 "} y={" 👶 "} z={" 👶 "} />
     <hr/>
     <SlotM x={" 🍎 "} y={" 👶 "} z={" 🌴 "} />
     <hr/>
     <SlotM x={" 🥭 "} y={" 🥭 "} z={" 🥭 "} />
     </div>
     </>
    );
}

export default App;
