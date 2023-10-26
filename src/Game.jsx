import React, { createContext, useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Bootprac from "./Bootstrap/Bootprac";
// import Accordian from "./component/according/According";
import "./note.css";
// import ConA from "./Content_context/ContentA"
// import ConB from "./Content_context/ContentB"
// import ConC from "./Content_context/ContentC"
// import "./game.css";
// import Nc from "./Ncurrentdate";
// import Event from "./Event"
// import Form from "./Form";
// import Multinputform from "./Multinputform"
// import Listapp from "./Listapp";
// import Counter from "./Counter";
// import Gamee from "./Gamcomp";
// import Ch8incdec from "./Ch8incdec";
// import "./component/according/According.css";
// import Accordian from "./component/according/According";
// import Header from "./Header";
// import Note from "./Note"
// import CreateNote from "./CreateNote";
// import Foot from "./Footer";
        //CreateNte and NOte render
const Game=()=>{
// const [item, setItem]=useState([])
// const Gameclik=(input)=>{
// setItem((Myoldata)=>{
//  return [...Myoldata,input];
// })}
// const ItemDelete=(id)=>{
//   setItem((oldata)=>{
//    return oldata.filter((val,index)=>{
//    return index!==id;})
//   })
// }
return(
    <>
    <Bootprac/>
        {/* <h1 className="heading__style">
        Wellcome to<span style={{fontweight:'bold'}}> Slote Machine</span></h1>
        <Gamee x="SMILE" y="SMILE" Z="SMILE"/>
        <Gamee x="ANGREE" y="ANGREE" z="ANGERR"/>
        <Gamee x="GOOD" y="GOOD" z="GOOD"/>
        <Gamee  x="DOWN" y="DOWN" Z="DOWN"/> 
        <Counter/>
        <Nc/>
        <Event/>
        <Form/>
        <Multinputform/>
        <Ch8incdec/>
        <Listapp/>
        <h1>touseeq</h1>
        <button className="btn">Touseeq</button>
        <Accordian/>*/}
        {/* <Header/>
        <CreateNote passNote={Gameclik}/>
        { item.map((val,index)=>{
         return (<Note 
                 key={index}
                 id={index}
                 title={val.title}
                 content={val.content}
                 select={ItemDelete}
        />)})}
        <Foot/> */}
        {/* <h1>Touseeq Haider</h1>
 <div className="container">
  <div className="row">
    <div className="col-sm">
    <div class="card">
  <img class="card-img-top" src="https://media.gettyimages.com/photos/sunset-over-bay-connel-argyll-bute-scotland-picture-id478616665?s=2048x2048" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div class="card" >
  <img class="card-img-top" src="https://media.gettyimages.com/photos/pod-of-dolphins-picture-id143210851?s=2048x2048" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col-sm">
    <div class="card" >
  <img class="card-img-top" src="https://media.gettyimages.com/photos/argyll-and-bute-scotland-uk-picture-id590865358?s=2048x2048" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div>
</div>   
)}*/}
</>);}
export default Game;