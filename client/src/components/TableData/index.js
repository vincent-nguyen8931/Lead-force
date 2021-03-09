import React from "react";
import API from "../../utils/API";
import UpdateButton from "../UpdateButton";
import DeleteButton from "../DeleteButton";

function TableData(props) {

    return (
        <tr>
            <td>{props.firstName}</td>
            <td>{props.lastName}</td>
            <td>{props.email}</td>
            <td>{props.phone}</td>
            <td style={{ width: "9%" }}>
                <UpdateButton id={props.id} />
                <DeleteButton id={props.id} />
            </td>
        </tr>
    )
}

export default TableData;