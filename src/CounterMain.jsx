import { useState } from "react"


function CounterMain() {
    let [count ,setCount]=useState(0)
    let increase =()=>{
setCount(++count)
    }
  return (
    <div>
      {count}
      <button onClick={increase}> chang number</button>
    </div>
  )
}

export default CounterMain
