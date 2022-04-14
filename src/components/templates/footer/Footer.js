import React from "react";
import "./footer.css";
function Footer() {
  return (
    <div className="footer">
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
  );
}

export default Footer;
