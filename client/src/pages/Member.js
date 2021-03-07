import React, { Component, useState } from "react";
import axios from "axios";
import API from "../utils/API"

class Member extends Component {


/*
  var [username, setUsername] = useState("");
  var [password, setPassword] = useState("");
  var [email, setEmail] = useState("");
  */
  constructor(props) {
    super(props)

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onClick = this.onClick.bind(this);
  
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }
    

  onChangeUsername(e) {
    this.setState({username: e.target.value})
  }

  onChangePassword(e) {
    this.setState({password: e.target.value})
  }

  onChangeEmail(e) {
    this.setState({email: e.target.value})
  }

onClick(e) {
  e.preventDefault()

var userObject = {
  username: this.state.username,
  password: this.state.password,
  email: this.state.email
};

  axios.post("/api/registerUser", userObject).then(res => {
   console.log(res.data)
    })
    .catch(err => console.log(err));

    this.setState({username: "", password: "", email: ""})
    
  };


// handleInputChange = event => {
//   var fieldName = event.target.name;
//   var fieldValue = event.target.value;
//   this.setState({
//     [fieldName]: fieldValue
//   }); 
// }

  // var handleInputChange = e => {
  //   e.preventDefault();
  //   console.log("username is " + username);
  //   console.log("password is " + password);
  //   console.log("email is " + email);
  //   API.signUp().then(data => console.log(data))
  //     .catch(err => console.log(err));

  // }

render() {
  return (
    <div>
      <input onChange={this.onChangeUsername} name="username" value={this.state.username} />
      <input onChange={this.onChangePassword} name="password" value={this.state.password} />
      <input onChange={this.onChangeEmail} name="email" value={this.state.email} />

      <button onClick={this.onClick}>Sign Up</button>
    </div>
  )

}
}

export default Member;