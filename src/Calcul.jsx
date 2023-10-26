import React from "react";

const con="kkk"
function Calcul(){
    let n="touseeq"
    return n;
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
function name4(a,b){
let div=a/b;
div=div.toFixed(3) //it mean two number after point
return div;
}
export default Calcul;
export {con,name1,name2,name3,name4}