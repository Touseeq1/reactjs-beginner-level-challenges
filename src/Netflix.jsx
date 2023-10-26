import React from "react";
import Pop from "./Pop";
import Sdata from "./Sdata";
const Net=()=>{
    return(
<Pop class="goodby" 
         key={Sdata[1].id}      
         imgsrc={Sdata[1].imagesrc}
         title={Sdata[1].title}
         sname={Sdata[1].sname}/> 
         )}
export default Net;