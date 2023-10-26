import React from "react";
const Foot=()=>{
    const year=new Date().getFullYear();
    return(
    <>
  <footer>
    <p>copy right @ {year}</p>
  </footer>
    </>);
}
export default Foot