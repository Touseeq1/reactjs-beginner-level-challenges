import React from "react";
import Pop from "./Pop";
import Sdata from "./Sdata";
const Amzo=()=>{
    return(
<Pop class="goodby" 
         key={Sdata[2].id}      
         imgsrc={Sdata[2].imagesrc}
         title={Sdata[2].title}
         sname={Sdata[2].sname}/> 
         )}
export default Amzo