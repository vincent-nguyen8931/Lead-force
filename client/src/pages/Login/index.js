import React, { Component } from "react";

import LoginButton from "../../components/Redirect";
import style from "./Login.css";
import Redirect from "../../components/Redirect";
import Nav from "../../components/Navbar";
import Members from "../Members"
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";


class Login extends Component {
  // create constructor that takes in props
  constructor(props) {
    super(props)

    // will read the changes made in each input field on this page
    this.userSignup = this.userSignup.bind(this);
    this.userLogin = this.userLogin.bind(this);
    this.onChangeState = this.onChangeState.bind(this);

    // initial state to set keyname and values
    this.state = {
      username: "",
      passwordSignup: "",
      passwordLogin: "",
      emailSignup: "",
      emailLogin: ""
    };
  }
  // redicret true or redirect false in component
  // but redirect also has to be rendered
  // create button that is aware of state of parent
  // oncilck with redirect and perform callback
  // callback frst, change loal state
  // makes all child rerendered
  // child sees redirect and render redicrect instead of button

  // withRouter on component
  // provide component to give access to history

  // function to listen for username input, password input on signup + login, & email input on signup + login
  onChangeState(e, key) {
    this.setState({ [key]: e.target.value })
  }

  // Listen for click for user signup. Next create a userObjectSignup that contains the username, password, and email states from this page. Next send this userObjectSignup to the route setup by the backend to interact with the database. Lastly, reset the state of the input boxes to empty.
  userSignup(e) {
    e.preventDefault()

    var userObjectSignup = {
      username: this.state.username,
      password: this.state.passwordSignup,
      email: this.state.emailSignup
    };

    API.signUp(userObjectSignup).then(res => {
      console.log(res.data)
    })
      .catch(err => console.log(err));

    this.setState({ username: "", passwordSignup: "", emailSignup: "" })

  };

  // Listen for click for user login. Next create a userObjectLogin that contains the email, and password states from this page. Next send this userObjectLogin to the route setup by the backend to interact with the database. Lastly, reset the state of the input boxes to empty.
  userLogin(e) {
    e.preventDefault()
    var userObjectLogin = {
      email: this.state.emailLogin,
      password: this.state.passwordLogin
    };
    API.login(userObjectLogin).then(res => {
      console.log(res.data)
      console.log("Pulled information successfull")
      this.setState({ redirect: true })
    })
      .catch(err => console.log(err));

    this.setState({ emailLogin: "", passwordLogin: "" })
  };

  render() {
    return (
      <div>
        <Nav />

        <div className="row" >
          <div className="col-6" >
            <div className="div-login">
              <h2 className="signup">SignUp</h2>
              <div className="linebreak"></div>
              <input placeholder="Username" onChange={(e) => this.onChangeState(e, "username")} name="username" value={this.state.username} />
              <input placeholder="Password" onChange={(e) => this.onChangeState(e, "passwordSignup")} name="passwordSignup" value={this.state.passwordSignup} />
              <input placeholder="Email Address" onChange={(e) => this.onChangeState(e, "emailSignup")} name="emailSignup" value={this.state.emailSignup} />

              <button name="userSignup" onClick={this.userSignup}>Sign Up</button>
            </div >
          </div>
          <div className="col-6" >
            <div className="div-login1">
              <h2 className="login">Login</h2>
              <div className="linebreak"></div>
              <input placeholder="Email Address" onChange={(e) => this.onChangeState(e, "emailLogin")} name="emailLogin" value={this.state.emailLogin} />
              <input placeholder="Password" onChange={(e) => this.onChangeState(e, "passwordLogin")} name="passwordLogin" value={this.state.passwordLogin} />

              <button name="userLogin" onClick={this.userLogin}>Login</button>
              {/* <Link to="/members" name="userLogin" onClick={this.userLogin}>Login</Link> */}
            </div >
          </div>
          <div className="logo"></div>
        </div>
        {/* <Footer /> */}
        {this.state.redirect ? <Redirect /> : null}
      </div>

    )
  }
}

export default Login;
