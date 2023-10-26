import React from "react";
import ReactDOM from "react-dom";

// import Game from "./Game"
//import "./game.css"
//console.log(val.sname);
import Maincontent from "./Main_content"
import {BrowserRouter} from "react-router-dom"; 
import App from "./App";
ReactDOM.render( 
    <BrowserRouter>  
  <App/>   
    </BrowserRouter>   
,document.getElementById("root")
);
                 //...Spread Operator
// const fullname =['touseeq','Haider',26, 'male'];
// const get =['malik', ...fullname, 'age'];
// console.log(get)

