import React, { useEffect, useState } from "react";
import axios from 'axios';
const ConA=()=>{
    const [num, setNum]=useState()
    useEffect(()=>{
    // alert('Hi')
    async function getData(){
        const res= await axios.get(`https://pokeapi.co/api/v2/pokemon/?offset=151&limit=${num}`)
    console.log(res.data.name)
    }getData();
    });
    return(
        <>
        <h1>Now:{num}</h1>
        <select value={num} onChange={(event)=>{
            setNum(event.target.value)}}>
            <option value='1'>1</option>
            <option value='2'>25</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
        </select> 
        </>
    );}
export default ConA