import React from 'react';
import './Experience.css'


const Experience: React.FC = () => {
  return (
    <section className="experience" id="experience">
        <h1 className="heading">My <span>Experience</span></h1>
        <div id="experience-container">
            <p className='experience-date'>August 2024 - November 2024</p>
            <h1>Software Engineer Intern</h1>
            <p className="experience-company">Bloomrix</p>
            <p className="experience-detail">As a Software Engineer Frontend Intern at Bloomrix, I have gained hands-on experience in building and optimizing user interfaces using React and TypeScript. I actively contributed to enhancing the frontend performance and ensuring responsive design across multiple devices. I collaborated closely with the development team to implement new features and resolve bugs, improving the overall user experience. My internship helped me refine my problem-solving skills while working on real-world projects.</p>
        </div>
    </section>
  );
};

export default Experience;
