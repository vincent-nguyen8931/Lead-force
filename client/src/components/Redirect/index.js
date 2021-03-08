import React from "react";
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';

function Redirect(props) {
  var history = useHistory();
  history.push("/members");
  return (
    <div>
    </div>
  )
}

export default withRouter(Redirect);