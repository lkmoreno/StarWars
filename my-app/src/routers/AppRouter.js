import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import Navbar from "../components/Navbar";

export default function AppRouter() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/home">
          <h1> home</h1>
        </Route>
        <Route path="*">
          <h1> 404 Not found</h1>
        </Route>
      </Switch>
    </Router>
  );
}
