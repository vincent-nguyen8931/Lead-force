import React from "react";
import style from "./style.css"

export default function Footer() {
  return (
    <div>
      <div className="container">
        <div className="card bg-primary text-white">
          <div className="row">
            <div className="col">
              <div className="col-6">
                <h5 className="card-title">Austin Woo</h5>
                <div class='footer-link-items'>
                  <a href='https://enigmatic-castle-29617.herokuapp.com/'>Portfolio</a> <br />
                  <a href='https://github.com/austinwoo123'>Github</a> <br />
                  <a href='https://www.linkedin.com/in/awoo95/'>LinkedIn</a> <br />
                  <a href='mailto: awoo004@ucr.edu'>Email</a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="col-6">
                <h5 className="card-title">Vincent Nguyen</h5>
                <div class='footer-link-items'>
                  <a href='https://vincent-nguyen8931.github.io/react-portfolio/'>Portfolio</a> <br />
                  <a href='https://github.com/vincent-nguyen8931'>Github</a> <br />
                  <a href='https://www.linkedin.com/in/vincent-nguyen-74226a107/'>LinkedIn</a> <br />
                  <a href='mailto: vincent.nguyen8931@gmail.com'>Email</a>
                </div>
              </div>
            </div>
            <small className='website-rights'> &copy;{new Date().getFullYear()} Leads Force | All rights reserved</small>
          </div>
        </div>
      </div>
    </div>
  )
}