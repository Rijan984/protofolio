import React, { useEffect, useState } from "react";
import "./work.css";
import { Link } from "react-router-dom";
import data from "./data";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import himalayan from "../../images/himalayanJavaCoffee.JPG";
function Work() {
  const [projects, setProjects] = useState(data);
  const [index, setIndex] = useState(0);

  const increase = (e) => {
    e.preventDefault();
    setIndex(index + 1);
  };
  const decrease = (e) => {
    e.preventDefault();
    setIndex(index - 1);
  };
  useEffect(() => {
    const lastIndex = projects.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, projects]);
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 6000);
    return () => clearInterval(slider);
  }, [index]);
  return (
    <section className="work-section">
      <div className="title">
        <h2>
          <span>/</span> Projects
        </h2>
      </div>
      <div className="section-center">
        {projects.map((person, personIndex) => {
          const { id, image, title, description, link, github } = person;
          let position = "nextSlide";
          if (personIndex === index) {
            position = "activeSlide";
          }
          if (
            personIndex === index - 1 ||
            (index === 0 && personIndex === projects.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt="pics" className="person-img" />

              <p className="title">{title}</p>
              <p className="text">{description}</p>
              {link !== "" && (
                <a href={link} target="_blank" className="btn btn-primary">
                  Demo
                </a>
              )}
              {github !== "" && (
                <a
                  href={github}
                  target="_blank"
                  style={{ marginLeft: "20px" }}
                  className="btn btn-primary"
                >
                  Github link
                </a>
              )}
            </article>
          );
        })}
        <button className="prev" onClick={decrease}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={increase}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default Work;
