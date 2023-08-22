import React from 'react';
import { techs } from './data';
import './skills.scss';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills__text">
        <h2>Skills</h2>
        <h3>Be unique</h3>
      </div>

      <div className="skills__layout">
        {techs.map((tech) => (
          <div className="skills__technos" key={tech.title}>
            <img src={tech.src} alt={tech.alt}></img>
            <h3>{tech.title}</h3>
            <p>{tech.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;