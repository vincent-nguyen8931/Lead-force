import React, { Component } from "react";
import API from "../../utils/API"
import Header from "../../components/Header";
import Nav from "../../components/Navbar";
import About from "../../components/About";
import Contact from "../../components/Contact"
import Footer from "../../components/Footer";
import Description from "../../components/Description";

class Member extends Component {

render() {
  return (
    <div>
      <Nav />
      <Footer />
    </div>
  )

}
}

export default Member;