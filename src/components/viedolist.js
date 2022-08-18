import React from "react";
import Viedoitem from "./viedoitem";


const Viedolist=({list,onviedoclick})=>{
   const rendredlist= list.map((viedo)=>{
        return <Viedoitem key={viedo.id.videoId} onviedoclick={onviedoclick} viedo={viedo}/>
    })

    return(
        <div className="ui relaxed divided list">{rendredlist}</div>
    );

}

export default Viedolist;