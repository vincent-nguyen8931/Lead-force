import React from "react";
import { useHistory, withRouter } from "react-router-dom";

function Redirect(props) {
  var history = useHistory();
  history.push("/members");
  return (
    <div>
    </div>
  )
}

export default withRouter(Redirect);