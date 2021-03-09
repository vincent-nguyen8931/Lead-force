import React from 'react';
import Home from "./pages/Home";
import Members from "./pages/Members";
import Login from "./pages/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// using BrowserRouter, route the user to following pages when they reach the specific paths listed in each route. 
export default function App() {
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