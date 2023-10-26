import React from "react";
import Amzo from "./Amazon";
import Ch8incdec from "./Ch8incdec";
import Net from "./Netflix";
import Pop from "./Pop";
import Sdata from "./Sdata";
//console.log(val.sname);
// const FavSeri="Netflix";
// const FavS=()=>{
// if(FavSeri==="Netflix"){
//     return <Net/> }   
// else 
//     return <Amzo/>       
// };
 const App=()=>{  
<>
<h1> List Of Top 5 Netflex</h1>
{/* <FavS/> */}
{/* <Pop class="goodby"        //without arry access class from Pop
     imgsrc={Sdata[1].imagesrc} // with arry access class from Pop.This is Popvalue={arry}
     title={Sdata[1].title}
     sname={Sdata[1].sname}/>
<Pop imgsrc={Sdata[2].imagesrc} // This is Popvalue={arry}
     title={Sdata[2].title}
     sname={Sdata[2].sname}/> */}
     {/* {Sdata.map((val)=>
     {
     return(
    <Pop class="goodby" 
     key={val.id}      
     imgsrc={val.imagesrc}
     title={val.title}
     sname={val.sname}/> 
     );}
    )}  */}
    {/* {(FavSeri==="Netflix")? <Net/>: <Amzo/>}  //..Ternary operator */} 
);
    </>
}
export default App


