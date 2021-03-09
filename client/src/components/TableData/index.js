import React from "react";
import API from "../../utils/API";
import UpdateButton from "../UpdateButton";

function TableData(props) {

    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td style={{ width: "9%" }}>
                <UpdateButton id={props.id} getEveryLead= {props.getEveryLead}/>
                <button id={props.id} className="btn3 btn-danger badge-pill float-right" >Delete</button>
            </td>
        </tr>

    )
}

export default TableData;