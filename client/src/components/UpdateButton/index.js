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
    firstName: "",
    lastName: "",
    phone: "",
    email: ""
  };
}

// function to listen for first name, last name, phone, and email inputs for updating
onChangeState(e, key) {
  this.setState({ [key]: e.target.value })
}

// creates the userObjectLead variable to take in the stateful values defined above. The api call takes in the id of the row and this userObjectLead variable and updates the mySQL database. 
updateLead(e) {
  e.preventDefault()

  var userObjectLead = {
    firstName: this.state.firstName,
    lastName: this.state.lastName,
    phone: this.state.phone,
    email: this.state.email
  };

  API.updateLead(this.props.id, userObjectLead).then(res => {
    console.log(res.data)
  })
    .catch(err => console.log(err));
};

  render() {
    return (
      // Modal that appears when updating the lead's information upon clicking update button. It contains input for first name, last name, phone, and email. Once the save changes button is clicked, the updateLead function will run. 
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
                <button type="button" className="btn3 btn-primary badge-pill float-right" value={this.props.id} data-toggle="modal" data-target="#updateLeads">
                  Update
                 </button>
              </div>
            </div>
        </div>
      </div>
    )
  }
}