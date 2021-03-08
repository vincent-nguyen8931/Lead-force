import React from "react";

function TableData(props) {

    return (
        <tr>
            <th scope="row">1</th>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td>{props.oppurtunity}</td>
            <td style={{ width: "9%" }}>
                <button className="btn3 btn-primary badge-pill float-right" >Update</button>
                <button className="btn3 btn-danger badge-pill float-right" >Delete</button>
            </td>
        </tr>

    )
}



export default TableData;