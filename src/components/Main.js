import React from "react";
import "../css/App.css";
import App from "./App";
import Notes from "./Notes";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

function Main() {
  return (
    <div>
      <HashRouter>
        <Switch>
          <Route path="/notes">
            <Notes />
          </Route>
          <Route path="*">
            <Redirect to="/" />
            <App />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}
export default Main;
