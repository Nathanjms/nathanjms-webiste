import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <div className="container text-start">
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
          <h4 style={{ paddingBottom: "20px" }}>More</h4>
          <div className="contact">
            <ul className="footerList list-unstyled">
              <li>
                <a href="https://movies.nathanjms.co.uk">Movies</a>
              </li>
              <li>
                <a href="https://tools.nathanjms.co.uk">Tools</a>
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
