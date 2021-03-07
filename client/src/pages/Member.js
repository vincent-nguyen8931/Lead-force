import React, { Component } from "react";
import API from "../utils/API"

class Member extends Component {
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
    this.setState({username: e.target.value})
  }


  // function to listen for password input
  onChangePasswordSignup(e) {
    this.setState({passwordSignup: e.target.value})
  }

  onChangePasswordLogin(e) {
    this.setState({passwordLogin: e.target.value})
  }

  // function to listen for email input
  onChangeEmailSignup(e) {
    this.setState({emailSignup: e.target.value})
  }

  onChangeEmailLogin(e) {
    this.setState({emailLogin: e.target.value})
  }

  // Listen for click. Next create a userObject that contains the username, password, and email states from this page. Next send this userObject to the route setup by the backend to interact with the database. Lastly, reset the state of the input boxes to empty.
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

    this.setState({username: "", passwordSignup: "", emailSignup: ""})
    
  };

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

    this.setState({emailLogin: "", passwordLogin: ""})
    
  };

render() {
  return (
    <div>
      <input onChange={this.onChangeUsername} name="username" value={this.state.username} />
      <input onChange={this.onChangePasswordSignup} name="passwordSignup" value={this.state.passwordSignup} />
      <input onChange={this.onChangeEmailSignup} name="emailSignup" value={this.state.emailSignup} />

      <button name="userSignup" onClick={this.userSignup}>Sign Up</button>

      <input onChange={this.onChangeEmailLogin} name="emailLogin" value={this.state.emailLogin} />
      <input onChange={this.onChangePasswordLogin} name="passwordLogin" value={this.state.passwordLogin} />

      <button name="userLogin" onClick={this.userLogin}>Login</button>
    </div>
  )

}
}

export default Member;