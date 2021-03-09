import React from 'react';
import Home from "./pages/Home";
import Login from "./pages/Login";
import Members from "./pages/Members";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
      <Route exact path="/members" component={Members} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/" component={Home} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
