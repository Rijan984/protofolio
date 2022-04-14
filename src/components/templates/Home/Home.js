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
      </div>
    </div>
  );
}

export default Home;
