import React, { Component } from "react";

class Member extends Component {

  constructor() {
    super();
    this.state = {
      username: "",
      password: "",
      email: ""
    };
  }

signUp = (e) => {

var {username, password, email}=this.state;
 fetch("/api/reigsterUser", {
   method: "post",
   body: JSON.stringify({
    username: username,
    password: password,
    email: email
   })
 }).then (response=>response.json()).then(data => {
   window.alert(data)
 })
}

handleInputChange = event => {
  var fieldName = event.target.name;
  var fieldValue = event.target.value;
  this.setState({
    [fieldName]: fieldValue
  }); 
}

  render() {
    return(
      <div>
 <input onChange={this.handleInputChange} name="username" value={this.state.username}/>
 <input onChange={this.handleInputChange} name="password" value={this.state.password}/>
 <input onChange={this.handleInputChange} name="email" value={this.state.email}/>

 <button onClick={this.signUp}>Sign Up</button>
 </div>
    )
  }
}

export default Member;