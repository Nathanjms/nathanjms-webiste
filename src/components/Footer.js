import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-left">
          <h4 style={{ paddingBottom: "20px" }}>Contact</h4>
          <div className="contact">
            <ul className="footerList list-unstyled">
              <li>Nathan James</li>
              <li>nathan@nathanjms.co.uk</li>
              <li>
                <a className="footerLogos" href="https://github.com/Nathanjms/">
                  <FaGithub />
                </a>
                <a className="footerLogos" href="https://www.youtube.com/channel/UCWL6DjV5c8oMBhOSzpvilmw">
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 text-right">
          <h4 style={{ paddingBottom: "20px" }}>Links</h4>
          <div className="contact">
            <ul className="footerList list-unstyled">
              <li><Link to="/notes">Notes</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

