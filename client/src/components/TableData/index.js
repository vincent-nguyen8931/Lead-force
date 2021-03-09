import React from "react";
import API from "../../utils/API";
import UpdateButton from "../UpdateButton";
import DeleteButton from "../DeleteButton";

function TableData(props) {
// returns the table information listed per prop. Each button component is given an id to know which row in the database they are interacting with.
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