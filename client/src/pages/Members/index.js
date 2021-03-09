import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import LeadHeader from "../../components/LeadHeader";
import Table from "../../components/Table";
import Footer from "../../components/Footer";

export default class Members extends Component {

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