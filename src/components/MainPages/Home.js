import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import nathan_img from "../../images/nathan_square.jpg";

function Home() {
  return (
    <div className="container">
      <div className="intro-section">
        <img src={nathan_img} alt="Nathan" />
        <div>
          <h1>Nathan James</h1>
          <p>nathan@nathanjms.co.uk</p>
          <div style={{ paddingTop: "10px" }}>
            <a className="button-logos" href="https://github.com/Nathanjms/">
              <FaGithub />
            </a>
            <a
              className="button-logos"
              href="https://www.linkedin.com/in/nathan-jms/"
            >
              <FaLinkedin id="linkedin" color="#0077B5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
