import React, { Component } from "react";
import API from "../../utils/API";
import { Input } from "../Form";

export default class UpdateButton extends Component {
// create constructor that takes in props
constructor(props) {
  super(props)

  // will read the changes made in each input field on this page
  this.onChangeState = this.onChangeState.bind(this);
  this.updateLead = this.updateLead.bind(this);

  // initial state to set keyname and values
  this.state = {
    id: "",
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

updateLead(e) {
  e.preventDefault()

  var userObjectLead = {
    id: this.state.id,
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    phone: this.state.phone,
    email: this.state.email
  };

  API.updateLead(userObjectLead).then(res => {
    console.log(res.data)
  })
    .catch(err => console.log(err));
};

  render() {
    return (
      <div>
        <div className="modal fade" id="updateLeads" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <h3>Update Leads</h3>
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
                <button type="button" onClick={this.updateLead} className="btn btn-primary">Save changes</button>
              </div>
            </div>
          </div>
        </div>
          <div className="col-sm-12">
            <div className="card1">
              <div className="card-body">
                <button type="button" onClick={(e) => this.onChangeState(e, "id")} className="btn3 btn-primary badge-pill float-right" value={this.state.id} data-toggle="modal" data-target="#updateLeads">
                  Update
                 </button>
              </div>
            </div>
        </div>
      </div>
    )
  }
}