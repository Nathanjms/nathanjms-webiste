import React from "react";
import "../css/App.css";
import App from "./MainPages/App";
import Notes from "./Extras/Notes";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";

function Main() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route path="/notes" component={Notes} />
          <Route path="*" component={App} redirectTo="/" />
        </Switch>
      </AuthProvider>
    </Router>
  );
}
export default Main;
