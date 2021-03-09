import React, { Component } from "react";
import style from "./style.css";
import TableData from "../TableData";
import API from "../../utils/API";

export default class Table extends Component {

  state = {
    leads: []
  }

  componentDidMount() {
    this.getEveryLead()
  }

  getEveryLead() {
    API.getAllLeads().then(res => {
      console.log(res.data)
      this.setState({ leads: res.data })
    })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="table1">
        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Oppurtunity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.leads.map(item =>
              <TableData
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                phone={item.phone}
                oppurtunity={item.oppurtunity}
              />)}

          </tbody>
        </table>
      </div >
    )
  }
}
