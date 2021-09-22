import React from "react";
import { Route, Switch } from "react-router-dom";
import "../../assets/stylesheets/app.scss";
import Home from "./Home";
import Login from "./Login";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {/* <Route exact path="/login" component={Login} /> */}
    </Switch>
  );
}
