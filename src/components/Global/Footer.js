import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="container text-left">
      <div className="row">
        <div className="col-md-6">
          <h4 style={{ paddingBottom: "20px" }}>Contact</h4>
          <div className="contact">
            <ul className="footerList list-unstyled">
              <li>Nathan James</li>
              <li>nathan@nathanjms.co.uk</li>
              <li>
                <a className="footerLogos" href="https://github.com/Nathanjms/">
                  <FaGithub />
                </a>
                <a
                  className="footerLogos"
                  href="https://www.linkedin.com/in/nathan-jms/"
                >
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <h4 style={{ paddingBottom: "20px" }}>Extras</h4>
          <div className="contact">
            <ul className="footerList list-unstyled">
              <li>
                <Link to="/notes">Notes</Link>
              </li>
              <li>
                <a href="https://movies.nathanjms.co.uk">Movies</a>
              </li>
              <li>Last updated: 19th November 2021</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
