import React, { Component } from "react";

class Signup extends Component {
// create constructor that takes in props
constructor(props) {
  super(props)

// will read the changes made in each input field on this page
  this.onChangeUsername = this.onChangeUsername.bind(this);
  this.onChangePassword = this.onChangePassword.bind(this);
  this.onChangeEmail = this.onChangeEmail.bind(this);
  this.onClick = this.onClick.bind(this);

  // initial state to set keyname and values
  this.state = {
    username: "",
    password: "",
    email: ""
  };
}

// function to listen for username input
onChangeUsername(e) {
  this.setState({username: e.target.value})
}

// function to listen for password input
onChangePassword(e) {
  this.setState({password: e.target.value})
}

// function to listen for email input
onChangeEmail(e) {
  this.setState({email: e.target.value})
}

// Listen for click. Next create a userObject that contains the username, password, and email states from this page. Next send this userObject to the route setup by the backend to interact with the database. Lastly, reset the state of the input boxes to empty.
onClick(e) {
e.preventDefault()

var userObject = {
username: this.state.username,
password: this.state.password,
email: this.state.email
};

API.signUp(userObject).then(res => {
 console.log(res.data)
  })
  .catch(err => console.log(err));

  this.setState({username: "", password: "", email: ""})
  
};

}

export default Signup;