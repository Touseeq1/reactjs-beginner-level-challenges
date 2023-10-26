import React, { useState } from "react";
import g1 from "./images/g1.png"
const Header=()=>{
    const [note1, setNote1]=useState()
return(
    <>
    <div className="header">
      <img src={g1} alt="g1" width='110' height='90' /> 
      <h1>Touseeq</h1>
      </div>
    </>
)
}
export default Header