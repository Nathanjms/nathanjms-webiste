import React, { Component } from "react";
import FnKeys from "../data/fnkeys.md";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import {FaHome } from 'react-icons/fa';
import "../css/Notes.css";

class Notes extends Component {
  constructor() {
    super();
    this.state = { markdown: "" };
  }

  componentDidMount() {
    // Get the contents from the Markdown file and put them in the React state, so we can reference it in render() below.
    fetch(FnKeys)
      .then((res) => res.text())
      .then((text) => this.setState({ markdown: text }));
  }

  render() {
    const { markdown } = this.state;
    return (
        <>
      <div id="notes">
        <div className="container">
        <Link to="/" class="homeBtn"><FaHome /></Link>
        <div className="headerContainer text-center">
          <h1>Notes</h1>
          <p>Any technical notes that I'll for sure forget if I don't write them somewhere!</p>
        </div>
          <div className="note">
            <ReactMarkdown source={markdown} />
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Notes;
