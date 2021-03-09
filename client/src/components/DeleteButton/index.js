import React, { Component } from "react";
import API from "../../utils/API";

export default class DeleteButton extends Component {
// create constructor that takes in props
constructor(props) {
  super(props)

  // will read the delete lead button click
  this.deleteLead = this.deleteLead.bind(this);
}

deleteLead(e) {
  e.preventDefault()

  API.deleteLead(this.props.id).then(res => {
    console.log(res.data)
  })
    .catch(err => console.log(err));
};

  render() {
    return (
     <div>
       <button className="btn3 btn-danger badge-pill float-right" value={this.props.id} onClick={this.deleteLead}>Delete</button>
     </div>
    )
  }
}