import React from 'react';
import Home from "./pages/Home"
import Members from "./pages/Members"
import Login from "./pages/Login";
import Members from "./pages/Members";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
          <Route exact path="/members" component={Members} />
        </Switch>
      </div>

    </BrowserRouter>
  );
}

export default App;
