import React, { Component } from "react";
// import style from "./member.css"
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

    var { username, password, email } = this.state;
    fetch("/api/reigsterUser", {
      method: "post",
      body: JSON.stringify({
        username: username,
        password: password,
        email: email
      })
    }).then(response => response.json()).then(data => {
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

  // render() {
  //   return (
  //     <div className="row">
  //       <div className="col-6" >
  //         <div className="div-login">
  //           <h2 className="signup">SignUp</h2>
  //           <div className="linebreak"></div>
  //           <input onChange={this.handleInputChange} placeholder="Username" name="username" value={this.state.username} />
  //           <input onChange={this.handleInputChange} placeholder=" Password" name="password" value={this.state.password} />
  //           <input onChange={this.handleInputChange} placeholder=" Email Address" name="email" value={this.state.email} />
  //           <button onClick={this.signUp}>Sign Up</button>
  //         </div >

  //       </div>
  //       <div className="col-6" >
  //         <div className="div-login1">
  //           <h2 className="signup">Login</h2>
  //           <div className="linebreak"></div>

  //           <input onChange={this.handleInputChange} placeholder="Email Address" name="email" value={this.state.email} />
  //           <input onChange={this.handleInputChange} placeholder="Password" name="password" value={this.state.password} />
  //           <button onClick={this.signUp}>Login</button>
  //         </div >
  //       </div>
  //     </div>

  //   )
  // }
}

export default Member;