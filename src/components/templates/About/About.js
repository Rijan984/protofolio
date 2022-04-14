import React, { useEffect } from "react";
import reactImg from "../../images/reactPic.png";
import "./about.css";
import { Link } from "react-router-dom";
import file from "../../files/RijanCV.pdf";
function About() {
  let s = document.getElementsByClassName("navs");

  return (
    <div className="about">
      <div className="top">
        <div className="photo">
          <img src={reactImg} alt="" />
        </div>
        <div className="intro">
          <h2>About Me</h2>
          <div className="head">
            <p>
              Hello, I am highly intrested and passionate about Frontend
              Development and Web Designing. I am a person who is always seeking
              for learnig new things and i am a disciplined and hardworking
              person.
            </p>
            <p>
              I love to sing a song and playing a guitar. I would love to go for
              hiking on holidays and hanging with friends.
            </p>
          </div>

          <div className="skills">
            <p>Skills</p>
            <span>HTML5</span>
            <span>CSS</span>
            <span>JS</span>
            <span>Bootstrap</span>
            <span>ReactJs</span>
          </div>
          <div className="cv">
            {/* <p> */}
            {/* <span> */}
            <Link
              className="btn btn-primary"
              to={file}
              target="_blank"
              download
            >
              Download CV
            </Link>
            {/* </span> */}
            {/* </p> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
