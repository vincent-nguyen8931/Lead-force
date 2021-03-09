import React from "react";
import { Link } from "react-router-dom";
import css from "./style.css"

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container">
        <a className="navbar-brand" href="#">Lead Force</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* <div class="w-100"> */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">Sign Up</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
