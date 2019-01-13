import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import Home from "./components/home";
import Users from "./components/users";
import NotFound from "./components/notFound";
import Compare from "./components/compare"
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/compare" component={Compare} />
        <Route path="/users" component={Users} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default App;
