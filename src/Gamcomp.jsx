import React from "react";
const Gamee =(pops)=>{
                         //Challlange #6
    // let x=' (SMILE)';
    // let y=' (SMILE)';
    // let z=' (SMILE)';
    // let x= pops.x;
    // let y= pops.y;
    // let z= pops.z;
           //OR
    let {x,y,z}=pops;     //Object Distructuring
    if(x===y && y===z)
    {
        return(
            <div className="slot_inner">
                <h1>{x} {y} {z}</h1>
                <h1>This is maching</h1>
                <hr/>
            </div>
        ) 
    }
    else{ 
        return(
            <div className="slot_inner">
                <h1>{x} {y} {z}</h1>
                <h1>This is not maching</h1>
                <hr/>
            </div>
        )
    }
};
export default Gamee