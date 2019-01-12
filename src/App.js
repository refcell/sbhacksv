import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import LoginForm from "./components/loginForm";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Redirect from="/" exact to="/login" />
      </Switch>
    );
  }
}

export default App;
