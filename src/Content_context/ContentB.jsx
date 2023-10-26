// import React,{ useContext, useEffect, useState } from "react";
// import { Firstname,Lastname} from "../Main_content";
import React,{useEffect, useState} from "react"
const ContentB=()=>{   //useContext method
// const fname=useContext(Firstname)
// const lname=useContext(Lastname)
// return <h1>My name is {fname}{lname}</h1>
const [click,setClik]= useState(0)
const Title=()=>{
    setClik(click+1)
}
useEffect(()=>{
    document.title=`You click ${click}`//To show result in title
})
return(
<button onClick={Title}>{click}</button>
)
}
export default ContentB
