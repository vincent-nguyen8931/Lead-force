import React, { Component } from "react";
import API from "../utils/API"

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

 API.signUp().then(data => {
   this.setState({
     username: data.username,
     password: data.password,
     email: data.email
   })
   
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