import React, { useState } from "react";
import { question } from "./api";
import "./According.css";
import "./Myaccodion";
import Myaccodion from "./Myaccodion";

const Accordian=()=>{
    const [data, setData]=useState(question);
    return(
        <>
        <section className="main-div">
        {
        data.map((curelemetn)=>{
            const {id,question,answer}=curelemetn //data Dstructuring
            return <Myaccodion key={id}{...curelemetn}/>
     })}
     </section>
        </>
    )
}
export default Accordian