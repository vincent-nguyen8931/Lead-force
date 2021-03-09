import Header from "../../components/Header";
import Nav from "../../components/Navbar";
import Footer from "../../components/Footer";
import Description from "../../components/Description";
import React from "react";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Description />
      <Footer />
    </div>
  )
}