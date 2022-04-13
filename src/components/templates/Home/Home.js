import React from "react";
import "./home.css";
import pic from "../../images/rijan.png";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="home">
      <div className="photo">
        <img src={pic} alt="logo" />
      </div>
      <div className="content">
        <h1>Frontend Developer</h1>
      </div>
      <div className="icons">
        <div className="hire">HIRE ME</div>
        <div>
          <a
            href="https://www.facebook.com/Bathashee/"
            target="_blank"
            style={{ color: "black" }}
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://github.com/Rijan984"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/rijan-stha-69913520b/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "black" }}
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
