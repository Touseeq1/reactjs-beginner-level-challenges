import React, { useState } from "react";
//import Currentdate from "./Currentdate";
const Nc=()=>{
let newTime = new Date().toLocaleTimeString();
//cDate=cDate.getHour()
const[Utime,setUtime]=useState(newTime);
   const press=()=>{
    let newTime = new Date().toLocaleTimeString();
    setUtime(newTime);
   }
  // setInterval(press,1000); //to run function and display time with auto second
return(
<>
    <h1 className="head"> Date is:{Utime}</h1>
    <button className="button"  onClick={press}>Click-Me</button>
</>
);
}
export default Nc