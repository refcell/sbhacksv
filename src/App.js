import React, { Component } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import LoginForm from "./components/loginForm";
import Home from "./components/home";
import NotFound from "./components/notFound";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/login" component={LoginForm} />
        <Route path="/home" component={Home} />
        <Route path="/not-found" component={NotFound} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/not-found" />
      </Switch>
    );
  }
}

export default App;
