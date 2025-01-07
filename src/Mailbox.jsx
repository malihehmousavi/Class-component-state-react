import { useState } from "react"


const Mailbox = () => {
    let [email, setEmail ]=useState("malimousavi@gmail.com")

let change = () => {
  if(email=="malimousavi@gmail.com"){
setEmail("sadeghi")

}
else{
  setEmail("malimousavi@gmail.com")
}
}


  return (
    <div>
      {email}
      <button onClick={change}>کلیک کن</button>

    </div>
  )
}

export default Mailbox
