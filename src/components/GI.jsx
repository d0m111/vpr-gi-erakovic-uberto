import React from "react";
import giLogo from "../assets/GI_Logo_vertical_black.jpg"

export default function GI(){
    return(
        <div className="logo-container">
            <p> The virtual partner residency took place online from 12/12/2022 to 23/12/22. </p>
            <img src={giLogo} alt="goethe institut logo" className="gi-logo"/>
        </div>
    )
}