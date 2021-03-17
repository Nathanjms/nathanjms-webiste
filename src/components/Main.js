import React from "react";
import "../css/App.css";
import App from "./App";
import Notes from "./Notes";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

function Main() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/notes">
            <Notes />
          </Route>
          <Route path="*">
            <Redirect to="/" />
            <App />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default Main;
