import { Component } from "react";

class Mail extends Component{
    constructor(){
        super()
        this.state={
            email : "hkkjjj@gmail.com",
            adress: "abkoh9"
        }
    }
    render(){
        return(
           <div>
             <div>{this.state.email}</div>
             <div>{this.state.adress}</div>
           </div>
        )
    }
}
export default Mail