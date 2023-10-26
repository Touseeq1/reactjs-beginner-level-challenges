import { useState } from "react"

const Multinputform=()=>{
    const[fullname,setFullname]=useState({fname:"",lname:"",email:"",mobile:""})
    const inputEvent=(objone)=>{
         const name=objone.target.name    //name is use to confrm name="fname" of input field  
         const value=objone.target.value  //we get input field value and stored in "value"
         setFullname((preValue)=>{
             return{
                 ...preValue, [name]:value, //[] braket is use to change value of name instead of add.
             };
                     //OR
        //     if(name==="fname"){
        //         return{
        //             fname:value,          //new value
        //             lname:preValue.lname, //previous value
        //         }
        //     }else if(name==="lname"){
        //         return{
        //             lname:value,
        //             fname:preValue.fname,
        //         }
        //     }else if(name==="email"){
        //         return{
        //             email:value,
        //             fname:preValue.fname,
        //             lname:preValue.lname,
        //             mobile:preValue.mobile
        //         }
        //     }else if(name==="mobile"){
        //         return{
        //             mobile:value,
        //             fname:preValue.fname,
        //             lname:preValue.lname,
        //             email:preValue.email
        //         }
        //     }
        //  
    })}
    const Submit=(event)=>{
        event.preventDefault()  /*it revok form to refresh automaticaly*/
    }
return( 
    <>
    <form onSubmit={Submit}>   {/*..form always refresh automaticaly */}
    <div>
        <h1>HELLO:{fullname.fname}{fullname.lname}</h1>
        <p>{fullname.email}</p>
        <p>{fullname.mobile}</p>
        <input className="input" type="text" name="fname" placeholder="Enter Your First Name" 
        onChange={inputEvent} 
        // value={fullname.fname}
        />
        <input className="input" type="text" name="lname" placeholder="Enter Your Last Name" 
        onChange={inputEvent} 
        // value={fullname.lname}
        />
        <input className="input" type="text" name="email" placeholder="Enter Your Email" 
        onChange={inputEvent} 
        />
         <input className="input" type="text" name="mobile" placeholder="Enter Your Mobile Number" 
        onChange={inputEvent} 
        />
        <button type="submit" /*onClick={Submit}*/>Click Me</button>
    </div>
    </form></>
)
}
export default Multinputform