import React from "react";
import style from "./style.css";
import picture from "./_Logo.png";

function About() {
    return (
        <div className="container-1">
            <div id="about"></div>
            <div className="about">
                <img src={picture} className="profile-pic"></img>
                <h1 class="about-Name">Lead Force</h1>
                <div className="line-break"></div>
                <h2>| Lead Management System |</h2>
                <p>We are Lead Force!</p>
            </div>


        </div>
    )
}

export default About