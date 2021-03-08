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
import Login from "./pages/Login/Login";
import { BrowserRouter as Route, Router } from "react-router-dom";

function App() {
  return (
    // <Router>
    <div >

      <Nav />
      {/* <Header /> */}
      {/* <About /> */}
      {/* <Description /> */}
      {/* <Contact /> */}
      {/* <Member /> */}
      <Footer />
      <Login />
      {/* <Route exact path="/login" component={Login} /> */}

      {/* <Jumbotron />
      <Main /> */}
    </div>

  );
}

export default App;
