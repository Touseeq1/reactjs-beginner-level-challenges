//import React, { createContext } from "react";
// import ConA from "./Content_context/ContentA"
// import ConB from "./Content_context/ContentB"
// import ConC from "./Content_context/ContentC"
//  const Firstname =createContext();
//  const Lastname =createContext();
// import {Router, Switch } from "react-router-dom";
// import { Routes ,Route } from 'react-router-dom';
// import About from "./React_routing/About";
// import Contact from "./React_routing/Contact";
// import Menu from "./React_routing/Menu";
// import User from './React_routing/User';
// import Body from './React_routing/Body';
import Livesea from '../src/Livesea';
 const Maincontent=()=>{
    return(
        <>
        <Livesea/>
        {/* <Body/> */}
        {/* <h1>Touseeq</h1>
         <Firstname.Provider value={'Touseeq Malik'}>
          <Lastname.Provider value={'Haider'}>
          <ConB/> 
          </Lastname.Provider>
        </Firstname.Provider> 
        <ConA/>
         <About/>
        <Contact/> */} 
                        {/* Page linking method */}
           {/*..Routes is use to show single page from followning */}       
        {/* <Routes> */}
        {/* <Route exact path="/" element= {()=> <About name='About Touseeq'/>}/>
        <Route exact path="/contact" element={<Contact/>}/>
        <Route exact path="/menu/" element= {<Menu/>}/> */}
        {/* <Route path="/User/:name" element= {<User/>}/>  */}
               {/* ":name" is params */}
        {/* <Route element={<Error/>}/> */}
        {/* </Routes> */}
        </>  
    );
}
export default Maincontent;
// export {Firstname,Lastname};