import React from 'react';
// import Main from "./pages/main";
// import Jumbotron from "./components/jumbotron"
import Header from "./components/Header";
import Nav from "./components/Navbar";
import About from "./components/About";
function App() {
  return (
    <>
      <Nav />
      <Header />
      <About />
      {/* <Jumbotron />
      <Main /> */}
    </>
  );
}

export default App;
