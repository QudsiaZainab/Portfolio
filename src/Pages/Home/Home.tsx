import { useEffect, useState } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { Services } from '../../Components/Services/Services';
import {  useDispatch } from 'react-redux';
import { setActiveSection } from '../../Features/SectionSlice';
import { useScrollReveal } from '../../Hook/useScrollReveal';
import './Home.css';
import Skills from '../../Components/Skills/Skills';
import Experience from '../../Components/Experience/Experience';
import { Projects } from '../../Components/Projects/Projects';
import { useLocation, useNavigate } from 'react-router-dom';
import Education from '../../Components/Education/Education';
import { Blogs } from '../../Components/Blogs/Blogs';
import Contact  from '../Contact/Contact';



const Home = () => {
    const dispatch = useDispatch();
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = ["Software Engineer", "Web Developer", "Android Developer"];
    const period = 2000;
    useScrollReveal();

    const location = useLocation();
    const navigate = useNavigate();


    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        } else {
        }
    }

    useEffect(() => {
        const sections = document.querySelectorAll('section');

        const handleScroll = () => {
            const scrollPosition = window.scrollY;

            sections.forEach((section) => {
                const offsetTop = section.offsetTop - 150;
                const height = section.offsetHeight;
                const sectionId = section.getAttribute('id');

                if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
                    dispatch(setActiveSection(sectionId));
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        let ticker = setInterval(() => {
            tick();
        }, delta);

        const params = new URLSearchParams(location.search);
    const scrollTo = params.get('scrollTo');
    
    if (scrollTo) {
      const element = document.getElementById(scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }

      // Clear the query parameter after the scroll
      params.delete('scrollTo');
      navigate(`${location.pathname}?${params.toString()}`, { replace: true });
    }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearInterval(ticker);
        };



    }, [dispatch, text, location, delta, navigate, tick]);



    return (
        <div>
            <section className="home" id="home">
                <div className="home-content">
                    <h3>Hi! Myself</h3>
                    <h1>Qudsia Zainab</h1>
                    <h3>And I'm a <span className="txt-rotate" data-period="1000" data-rotate='[ "Software Engineer", "Web Developer", "Android Developer" ]'><span className="wrap">{text}</span></span></h3>
                    <p>Eager to enhance and diversify my software engineering skills in a dynamic professional environment.</p>
                    <div className="social-media">
                        <a href="https://drive.google.com/file/d/1zFP8iJnI0y5YEsJ_FSElWX-oAM_Gfgw-/view" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a href="https://drive.google.com/file/d/1zFP8iJnI0y5YEsJ_FSElWX-oAM_Gfgw-/view" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                        <a href="https://drive.google.com/file/d/1zFP8iJnI0y5YEsJ_FSElWX-oAM_Gfgw-/view" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a href="https://drive.google.com/file/d/1zFP8iJnI0y5YEsJ_FSElWX-oAM_Gfgw-/view" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
                    </div>
                    <a href="CV/Qudsia Zainab Resume.pdf" download="Qudsia_Zainab_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn">Download CV</a>
                </div>
                <div className="home-img">
                    <img src="images/WhatsApp_Image_2024-10-02_at_10.19.19_PM....__1_-removebg-preview.png" alt="Profile" />
                </div>
            </section>

            <section className="about" id="about">
                <div className="about-img">
                    <img src="images/WhatsApp_Image_2024-10-02_at_10.19.19_PM....__1_-removebg-preview.png" alt="About" />
                </div>
                <div className="about-content">
                    <h2 className="heading">About <span>Me</span></h2>
                    <h3>Software Engineer</h3>
                    <p>Greetings! I'm Qudsia, a professional Software Engineer with a knack for software development. Proficient in developing web applications, and android applications. I also have experience in some other fields that I have studied in my degree like software designing and documentation, networking, and big data analytics. I'm your go-to for turning your visions into reality. My commitment? Your contentment. I thrive on delivering top-notch outcomes that exceed your expectations. Let's collaborate and bring your ideas to life!</p>
                    <a href="https://www.linkedin.com/in/qudsia-zainab-7a2022204/" className="btn">Read more</a>
                </div>
            </section>

            <Services />
            <Skills />
            <Experience />
            <Education/>
            <Blogs/>
            <Projects />
            <Contact/>

        </div>
    );
};

export default Home;
