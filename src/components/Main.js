import React from "react";
import "../css/App.css";
import App from "./App";
import Notes from "./Notes";
import Login from "./Login";
import Signup from "./Signup";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

function Main() {
  return (
    <HashRouter>
      <AuthProvider>
        <Switch>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="*">
            <Redirect to="/" />
            <App />
          </Route>
        </Switch>
      </AuthProvider>
    </HashRouter>
  );
}
export default Main;
