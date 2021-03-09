import React from "react";
import style1 from "./style1.css"

export default function Header() {
    return (
        <div className="jumbotron jumbotron-fluid" id="header">
            <div className="container">

                <h1 className="about-Name">Leads Force</h1>
                {/* <div className="line-break"></div> */}
                <h2 className="Lead-Header">| Lead Management System |</h2>
                {/* <p>We are Lead Force!</p> */}
            </div>
        </div>
    )
}