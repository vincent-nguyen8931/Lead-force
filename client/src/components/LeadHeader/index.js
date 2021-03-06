import React, { Component } from "react";
import style from "./style.css"
import API from "../../utils/API";
import { Input } from "../Form";

export default class LeadHeader extends Component {
  // create constructor that takes in props
  constructor(props) {
    super(props)

    // will read the changes made in each input field on this page
    this.onChangeState = this.onChangeState.bind(this);
    this.addLead = this.addLead.bind(this);

    // initial state to set keyname and values
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: ""
    };
  }

  // function to listen for username input, password input on signup + login, & email input on signup + login
  onChangeState(e, key) {
    this.setState({ [key]: e.target.value })
  }

  addLead(e) {
    e.preventDefault()

    var userObjectLead = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email
    };

    API.addLead(userObjectLead).then(res => {
      console.log(res.data)
    })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className="jumbotron3">
        <div className="modal fade" id="addLeads" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <h3>Add Leads</h3>
                <p>First name: </p>
                <Input onChange={(e) => this.onChangeState(e, "firstName")} value={this.state.firstName} />
                <p>Last name: </p>
                <Input onChange={(e) => this.onChangeState(e, "lastName")} value={this.state.lastName} />
                <p>Phone Number: </p>
                <Input onChange={(e) => this.onChangeState(e, "phone")} value={this.state.phone} />
                <p>Email Address: </p>
                <Input onChange={(e) => this.onChangeState(e, "email")} value={this.state.email} />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" onClick={this.addLead} className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
        <div className="row1">
          <div className="col-sm-12">
            <div className="card1">
              <div className="card-body">
                <h2 className="Leadheader">Leads</h2>
                <button type="button" class="btn1 btn-primary" data-toggle="modal" data-target="#addLeads">
                  Add Leads
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}