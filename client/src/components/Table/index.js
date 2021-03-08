import React, { Component } from "react";
import style from "./style.css";
import TableData from "../TableData";
import API from "../../utils/API";

export default class Table extends Component {

  getEveryLead() {
    API.getAllLeads().then(res => {
      console.log(res.data)
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
              <th scope="col">Full Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Oppurtunity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.getEveryLead.map(item =>
              <TableData
                name={item.name}
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
