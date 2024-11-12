import React, { useState } from 'react';
import { FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../Store/Store';
import { toggleTheme } from '../../Features/ThemeSlice';
import './Header.css';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useSelector((state: RootState) => state.section.activeSection);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);
  const dispatch = useDispatch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  // Function to handle link click and close the menu
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${window.scrollY > 100 ? 'sticky' : ''}`}>
      <div id="header-left">
        <Link to="/" className="logo">QZ</Link>
      </div>
      <div id="header-right">
        <div className="theme-toggle" onClick={handleThemeToggle}>
          {isDarkMode ? <FaSun className='theme-icon' /> : <FaMoon className='theme-icon' />}
        </div>
        <div
          id="menu-icon"
          onClick={toggleMenu}
          className={`menu-icon ${isMenuOpen ? 'fa-xmark' : ''}`}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/?scrollTo=home" className={activeSection === 'home' ? 'active' : ''} onClick={handleLinkClick}>Home</Link>
          <Link to="/?scrollTo=about" className={activeSection === 'about' ? 'active' : ''} onClick={handleLinkClick}>About</Link>
          <Link to="/?scrollTo=services" className={activeSection === 'services' ? 'active' : ''} onClick={handleLinkClick}>Services</Link>
          <Link to="/?scrollTo=skills" className={activeSection === 'skills' ? 'active' : ''} onClick={handleLinkClick}>Skills</Link>
          <Link to="/?scrollTo=experience" className={activeSection === 'experience' ? 'active' : ''} onClick={handleLinkClick}>Experience</Link>
          <Link to="/?scrollTo=education" className={activeSection === 'education' ? 'active' : ''} onClick={handleLinkClick}>Education</Link>
          <Link to="/?scrollTo=blog" className={activeSection === 'blog' ? 'active' : ''} onClick={handleLinkClick}>Blogs</Link>
          <Link to="/?scrollTo=portfolio" className={activeSection === 'portfolio' ? 'active' : ''} onClick={handleLinkClick}>Portfolio</Link>
          <Link to="/?scrollTo=contact" className={activeSection === 'contact' ? 'active' : ''} onClick={handleLinkClick}>Contact</Link>
        </nav>
      </div>



    </header>
  );
};

export default Header;
