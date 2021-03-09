import React, { Component } from "react";
import style from "./Login.css";
import Redirect from "../../components/Redirect";
import Nav from "../../components/Navbar";
import API from "../../utils/API";
import Footer from "../../components/Footer";

export default class Login extends Component {
  // create constructor that takes in props
  constructor(props) {
    super(props)

    // will read the changes made in each input field on this page and onChangeState function
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

  // Listen for click for user login. Next create a userObjectLogin that contains the email, and password states from this page. Next, send this userObjectLogin to the route setup by the backend to interact with the database. Then, the user will be rerouted to the members page. Lastly, reset the state of the input boxes to empty.
  userLogin(e) {
    e.preventDefault()
    var userObjectLogin = {
      email: this.state.emailLogin,
      password: this.state.passwordLogin
    };
    API.login(userObjectLogin).then(res => {
      console.log(res.data)
      this.setState({ redirect: true })
    })
      .catch(err => console.log(err));

    this.setState({ emailLogin: "", passwordLogin: "" })
  };

  render() {
    return (
      <div className="loginstyle">
        <Nav />
        <div className="row" >
          <div className="col-6" >
            <div className="div-login">
              <h2 className="signup">Signup</h2>
              <input placeholder="Username" onChange={(e) => this.onChangeState(e, "username")} name="username" value={this.state.username} />
              <input placeholder="Password" onChange={(e) => this.onChangeState(e, "passwordSignup")} name="passwordSignup" value={this.state.passwordSignup} />
              <input placeholder="Email Address" onChange={(e) => this.onChangeState(e, "emailSignup")} name="emailSignup" value={this.state.emailSignup} />
              <button name="userSignup" onClick={this.userSignup}>Sign Up</button>
            </div >
          </div>
          <div className="col-6" >
            <div className="div-login1">
              <h2 className="login">Login</h2>
              <input placeholder="Email Address" onChange={(e) => this.onChangeState(e, "emailLogin")} name="emailLogin" value={this.state.emailLogin} />
              <input placeholder="Password" onChange={(e) => this.onChangeState(e, "passwordLogin")} name="passwordLogin" value={this.state.passwordLogin} />
              <button name="userLogin" onClick={this.userLogin}>Login</button>
            </div>
          </div>
        </div>
        <Footer />
        {this.state.redirect ? <Redirect /> : null}
      </div>

    )
  }
}