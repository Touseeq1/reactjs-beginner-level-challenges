import React, { useState } from "react";
import "./game.css"
const Form=()=>{
    const[clone,setClone]=useState("")
    const[fulvluone,setFulvaluone]=useState("")
    const[cltwo,setCltwo]=useState("")
    const[fulvlutwo,setFulvlutwo]=useState("")
    const inputEvent=(objone)=>{
          setClone(objone.target.value) //This is use to disply input field value with header.
    }
    const inputEventwo=(objtwo)=>{
        setCltwo(objtwo.target.value)
    }
    const Submit=(event)=>{
        event.preventDefault()  /*it revok form to refresh automaticaly*/
        setFulvaluone(clone)
        setFulvlutwo(cltwo)
    }
    return(
    <>
    <form onSubmit={Submit}>   {/*..form always refresh automaticaly */}
    <div>
        <h1>HELLO{fulvluone}{fulvlutwo}</h1>
        <input className="input" type="text" placeholder="Enter Your Name" 
        onChange={inputEvent} value={clone}/>
        <input className="input" type="text" placeholder="Enter Your Password" 
        onChange={inputEventwo} value={cltwo}/>
        <button type="submit" /*onClick={Submit}*/>Click Me</button>
    </div>
    </form>
</>
    );
}
export default Form