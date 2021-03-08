import React, { Component } from "react";
import style from "./Login.css";
import Nav from "../../components/Navbar";
import Member from "../Member"
import API from "../../utils/API";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

class Login extends Component {
  // create constructor that takes in props
  constructor(props) {
    super(props)

    // will read the changes made in each input field on this page
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePasswordSignup = this.onChangePasswordSignup.bind(this);
    this.onChangePasswordLogin = this.onChangePasswordLogin.bind(this);
    this.onChangeEmailSignup = this.onChangeEmailSignup.bind(this);
    this.onChangeEmailLogin = this.onChangeEmailLogin.bind(this);
    this.userSignup = this.userSignup.bind(this);
    this.userLogin = this.userLogin.bind(this);

    // initial state to set keyname and values
    this.state = {
      username: "",
      passwordSignup: "",
      passwordLogin: "",
      emailSignup: "",
      emailLogin: ""
    };
  }

  // function to listen for username input
  onChangeUsername(e) {
    this.setState({ username: e.target.value })
  }

  // function to listen for password input on signup box
  onChangePasswordSignup(e) {
    this.setState({ passwordSignup: e.target.value })
  }

  // function to listen for password input on login box
  onChangePasswordLogin(e) {
    this.setState({ passwordLogin: e.target.value })
  }

  // function to listen for email input on signup box
  onChangeEmailSignup(e) {
    this.setState({ emailSignup: e.target.value })
  }

  // function to listen for email input on login box
  onChangeEmailLogin(e) {
    this.setState({ emailLogin: e.target.value })
  }

  // Listen for click for user signup. Next create a userObject that contains the username, password, and email states from this page. Next send this userObject to the route setup by the backend to interact with the database. Lastly, reset the state of the input boxes to empty.
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

  // Listen for click for user login. Next create a userObject that contains the username, password, and email states from this page. Next send this userObject to the route setup by the backend to interact with the database. Lastly, reset the state of the input boxes to empty.
  userLogin(e) {
    e.preventDefault()

    var userObjectLogin = {
      email: this.state.emailLogin,
      password: this.state.passwordLogin
    };
    API.login(userObjectLogin).then(res => {
      console.log(res.data)
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
              <input placeholder="Username" onChange={this.onChangeUsername} name="username" value={this.state.username} />
              <input placeholder="Password" onChange={this.onChangePasswordSignup} name="passwordSignup" value={this.state.passwordSignup} />
              <input placeholder="Email Address" onChange={this.onChangeEmailSignup} name="emailSignup" value={this.state.emailSignup} />
              <button name="userSignup" onClick={this.userSignup}>Sign Up</button>
            </div >

          </div>
          <div className="col-6" >
            <div className="div-login1">
              <h2 className="login">Login</h2>
              <div className="linebreak"></div>
              <input placeholder="Email Address" onChange={this.onChangeEmailLogin} name="emailLogin" value={this.state.emailLogin} />
              <input placeholder="Password" onChange={this.onChangePasswordLogin} name="passwordLogin" value={this.state.passwordLogin} />
              <Link to="/member" commponent={Member}>
                <button name="userLogin" onClick={this.userLogin}>Login</button>
              </Link>
            </div >
          </div>
          <div className="logo"></div>
        </div>
        <Footer />
      </div>

    )
  }
}

export default Login;
