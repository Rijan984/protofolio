import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
function Nav() {
  return (
    <div className="navs">
      <div className="logo">
        <h4>Rijan Shrestha</h4>
      </div>
      <div className="menu">
        <Link to="/protofolio" className="link">
          <span>Home</span>
        </Link>
        <Link to="/projects" className="link">
          <span>Projects</span>
        </Link>
        <Link to="/services" className="link">
          <span>Services</span>
        </Link>
        <Link to="/about" className="link">
          <span>About</span>
        </Link>
      </div>

      <div className="dropdown" style={{ float: "right" }}>
        <button className="dropbtn">
          <i class="fa-solid fa-bars"></i>
        </button>
        <div className="dropdown-content">
          <Link to="/protofolio" className="link">
            <p>Home</p>
          </Link>
          <Link to="/projects" className="link">
            <p>Projects</p>
          </Link>
          <Link to="/about" className="link">
            <p>About</p>
          </Link>
          <Link to="/services" className="link">
            <p>Services</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Nav;
