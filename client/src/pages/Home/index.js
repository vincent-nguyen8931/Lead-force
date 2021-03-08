import Header from "../../components/Header";
import Nav from "../../components/Navbar";
import About from "../../components/About";
import Contact from "../../components/Contact"
import Footer from "../../components/Footer";
import Description from "../../components/Description";
import React from "react";

export default function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <About />
      <Description />
      <Contact />
      <Footer />
    </div>
  )
}
