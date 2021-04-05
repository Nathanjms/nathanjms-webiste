import React, { Component } from "react";
import FnKeys from "../../data/fnkeys.md";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "../../css/Notes.css";
import Footer from "../Global/Footer";

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
            <div className="row">
              <div className="col-lg-12 mt-4">
                <Link to="/" className="homeBtn" style={{ float: "left" }}>
                  <FaHome />
                </Link>
              </div>
              <div className="col-lg-12">
                <div className="headerContainer text-center">
                  <h1>Notes</h1>
                  <p>
                    Any technical notes that I'll for sure forget if I don't
                    write them somewhere!
                  </p>
                </div>
                <div className="note">
                  <ReactMarkdown source={markdown} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer id="footer">
          <Footer />
        </footer>
      </>
    );
  }
}

export default Notes;
