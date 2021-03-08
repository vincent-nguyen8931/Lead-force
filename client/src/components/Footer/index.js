import React from "react";
import style from "./style.css"
// import styled from "styled-components"
function Footer() {
    return (
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>Lead Force</h4>
                        <h1 className="list-unstyled">

                            <li>San Francisco, CA</li>

                        </h1>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Lorem</h4>
                        <ui className="list-unstyled">
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ui>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>Lorem</h4>
                        <ui className="list-unstyled">
                            <li>Lorem</li>
                            <li>Lorem</li>
                            <li>Lorem</li>
                        </ui>
                    </div>
                </div>
                <hr />
                <div className="row1">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Lead Force | All rights reserved |
              Terms Of Service | Privacy
            </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;

// const FooterContainer = styled.footer`
// .footer-middle{
//     background: var(--mainDark);
// }

// `;