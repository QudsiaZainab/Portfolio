import React from 'react';
import './Education.css';

const Education: React.FC = () => {
    return (
        <section className="education" id="education">
            <h1 className="heading">My <span>Education</span></h1>
            <div id="education-container">
                    <img id="education-left" src='images/images__7_-removebg-preview.png'></img>
                
                <div id="education-right">
                    <p className='experience-date'>2020 - 2024</p>
                    <h1>BS Software Engineering</h1>
                    <p className="experience-company">Air University, Islamabad</p>
                </div>

            </div>
        </section>
    );
};

export default Education;
