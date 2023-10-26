import React from "react";
import Images from "./Images"
function Pop(pops){
    return(<div className="cards">
    <div className="card">
        <img src={pops.img} alt="mypic" className="card__img"/>
        <div className="card__info">
        <Images title={pops.title}/>
            <span className="card__category">{pops.class}</span>
            <h1 className="card__title">{pops.title}</h1>
            <a href={pops.link} target="_blank">
             <button>watch Now</button>
            </a>
        </div>
    </div>
    </div>);
    }
    export default Pop;