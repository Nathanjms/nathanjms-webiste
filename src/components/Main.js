import React from "react";
import "../css/App.css";
import App from "./MainPages/App";
import NotFound from "./Global/NotFound";
import Notes from "./Extras/Notes";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import ReactGA from 'react-ga';

function initializeReactGA() {
  ReactGA.initialize('G-6H7MJ5M02G');
  ReactGA.pageview('/');
}

function Main() {
  initializeReactGA();
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/notes" component={Notes} />
      <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
export default Main;
