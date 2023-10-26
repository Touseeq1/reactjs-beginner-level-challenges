import React, { useState } from "react";
const Myaccodion=({question,answer})=>{
    const [show, setShow]=useState(false)
    return(
        <>
       {/* <h1>{question}</h1>  
       <p>{answer}</p> */}
       {/* ...press Window and . to show emoji box */}
       <div className="main-header">
       <p onClick={()=>{setShow(!show)}}> {show?"➖":"➕"} </p>
       <h3>{question}</h3>
       </div>
       {show && <p className="answer">{answer}</p>}
        </>
    )
}
export default Myaccodion