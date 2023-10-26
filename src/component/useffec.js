import React, {useEffect, useState} from 'react';
const Us= ()=>{
    const [num, setNum]= useState(0);
    const [num1, setNum1]= useState(1);
useEffect(()=>{
    alert('i am click');
    console.log('I am allert after alert');
  },[num]  //..empity arry for allert 1st time.
);  
return(
    <><h1>Hi Touseeq</h1>
     <button onClick={()=>{setNum(num+1);}}>ClickMe{num} </button>
     <br/>
     <button onClick={ ()=>{setNum1(num1+1);}}> ClickMe{num1} </button>  
</>);};
export default Us;