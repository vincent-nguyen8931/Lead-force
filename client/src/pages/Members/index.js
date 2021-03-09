import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import LeadHeader from "../../components/LeadHeader";
import Table from "../../components/Table";
import Footer from "../../components/Footer";

// import style from "./member.css"
class Members extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <About />
        <LeadHeader />
        <Table />
        <Footer />

      </div>
    )
  }
}

export default Members;