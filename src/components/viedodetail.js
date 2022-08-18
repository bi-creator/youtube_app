import React from "react";


const Viedodetail=({viedo})=>{
    if(!viedo){
        return <div>loading</div>
    }
    const viedosrc='https://www.youtube.com/embed/'+viedo.id.videoId
    return(
        <div>
            <div className="ui embed">
                <iframe src={viedosrc} title="viedo player"/>
            </div>
            <div className="ui segment">
            <h4 className="ui header">{viedo.snippet.title}</h4>
            <p>{viedo.snippet.description}</p>
            </div>
        </div>
    )
};



export default Viedodetail;