import React from "react";
import style2 from "./style2.css"

export default function Contact() {
  return (
    <div className="container" id="contact">
      <h1>Contact Us</h1>
      <div className="line-break1"></div>
      <div className="row">
        <div className="col-6">
          <div className="social-icons">
            <a href="https://github.com/austinwoo123" target="_blank"><i className="fab fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/awoo95/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:awoo004@ucr.edu" target="_blank"><i className="fas fa-envelope"></i></a>
          </div>
          <div className="line-break2"></div>
          <h3>   Austin Woo   </h3>
        </div>
        <div className="col-6" >
          <div className="social-icons">
            <a href="https://github.com/vincent-nguyen8931" target="_blank"><i className="fab fa-github-square"></i></a>
            <a href="https://www.linkedin.com/in/vincent-nguyen-74226a107/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a href="mailto:vincent.nguyen8931@gmail.com" target="_blank"><i className="fas fa-envelope"></i></a>
          </div>
          <div className="line-break2"></div>
          <h3> Vincent Nguyen </h3>
        </div>
      </div>
    </div >
  )
}