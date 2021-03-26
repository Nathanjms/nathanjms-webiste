import React from "react";
import "../css/App.css";
import App from "./App";
import Notes from "./Notes";
import Login from "./Login";
import Signup from "./Signup";
import { HashRouter, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";
import Movies from "./Movies";

function Main() {
  return (
    <HashRouter>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/movies" component={Movies} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/notes" component={Notes} />
          <Route path="*" component={App} redirectTo="/" />
        </Switch>
      </AuthProvider>
    </HashRouter>
  );
}
export default Main;
