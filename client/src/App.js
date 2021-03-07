import React from 'react';
import Member from "./pages/Member"
// import Main from "./pages/main";
// import Jumbotron from "./components/jumbotron"
import Header from "./components/Header";
import Nav from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact"
import Footer from "./components/Footer";
import Description from "./components/Description";
function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      <Description />
      <Contact />
      <Member />
      <Footer />

      {/* <Jumbotron />
      <Main /> */}
    </>
  );
}

export default App;
