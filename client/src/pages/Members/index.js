import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import About from "../../components/About";
import LeadHeader from "../../components/LeadHeader";
import Input from "../../components/Form";
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

  render() {
    return (
      <div>
        <About />
        <LeadHeader />


      </div>
    )
  }
}

export default Member;