import React from "react";
// import filip from "../assets/filipErakovic.jpg";
// import francisco from "../assets/fu-3000x3000.jpg"
import dataFoto from "../data/dataFoto.json"

export default function Home(){

    console.log(dataFoto);
    return(
        <article>
            {dataFoto.map((e, i)=>(
                <div className="participants" key={i}>
                    <img src={e.url} alt={e.name}></img>
                    <p className="bio">{e.bio}</p>
                </div>
            ))}
            
        </article>
        
    )
}