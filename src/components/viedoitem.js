import React from "react";
import './viedoitem.css'


const Viedoitem=({viedo,onviedoclick})=>{
    return(
        <div onClick={()=>onviedoclick(viedo)} className=" viedo-item item">
            <img className="ui image" src={viedo.snippet.thumbnails.high.url} alt={viedo.snippet.title}/>
           <div className="content">
          
           <div className="header"> {viedo.snippet.title}</div>
           </div>
            </div>
    );
}

export default Viedoitem