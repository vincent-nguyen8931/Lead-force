import React from "react";
import style from "./style.css"
// import styled from "styled-components"


function Footer() {
    return (
        <div class="container" id="footer">
            <nav class="navbar navbar-expand-lg navbar-light bg-light .navbar-expand{-sm|-md|-lg|-xl} ">
                <a class="navbar-brand"> &copy;{new Date().getFullYear()} Lead Force | All rights reserved |
             Terms Of Service | Privacy</a>
            </nav>
        </div>

        //             &copy;{new Date().getFullYear()} Lead Force | All rights reserved |
        //     Terms Of Service | Privacy
        //   </div>
        // </div>


    );
}

export default Footer;