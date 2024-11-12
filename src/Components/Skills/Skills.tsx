import React from 'react';
import './Skills.css'


const Skills: React.FC = () => {
  return (
    <section className="skills" id="skills">
        <h2 className="heading">My <span>Skills</span></h2>
        <div id="skills-container">
            <div className="skill-box">
                <h2>React Js</h2>
                <p className="percent">90%</p>
            </div>
            <div className="skill-box">
                <h2>TypeScript</h2>
                <p className="percent">60%</p>
            </div>
            <div className="skill-box">
                <h2>JavaScript</h2>
                <p className="percent">90%</p>
            </div>
            <div className="skill-box">
                <h2>Strapi</h2>
                <p className="percent">90%</p>
            </div>
            <div className="skill-box">
                <h2>Bootstrap</h2>
                <p className="percent">90%</p>
            </div>
            <div className="skill-box">
                <h2>Git</h2>
                <p className="percent">80%</p>
            </div>
        </div>
    </section>
  );
};

export default Skills;
