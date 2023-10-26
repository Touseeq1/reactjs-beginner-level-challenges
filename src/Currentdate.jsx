import React from "react";
const com="kklj"
function Currentdate(){
  let currentDate=new Date(2021, 1 ,25, 17);
      currentDate=currentDate.getHours();
  let greeting=""; 
  const cssstyle={}; 
  if(currentDate<=12 && currentDate>=1){
      greeting="Good Morning";
      cssstyle.color="Orange";}
  else if(currentDate>=12 && currentDate<=19){
      greeting="Goood Afternoon";
      cssstyle.color="Green";}   
  else if(currentDate>=20 && currentDate<=24){
      greeting="Good Nignt";
      cssstyle.color="Yellow";} 
      return(
        <>
             <div className="d">
             <h1 className="gr">{}Greeting</h1>
             <h1 className="he">Hello sir,<span style={cssstyle}>  {greeting}</span></h1>
             </div>
         </>
      );     
  } 
          function name1(a,b){
            let add=a+b;
            return add;
          }
          function name2(a,b){
            let sub=a-b;
            return sub;
          }
          function name3(a,b){
            let multiply=a*b;
            return multiply
          }
    export default Currentdate;
    export {com,name1,name2,name3}
