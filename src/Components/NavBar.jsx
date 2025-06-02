import '../Css/NavBar.css';
import React, { useState, useEffect } from 'react';

function NavBar() {
  const [activeLink, setActiveLink] = useState('Home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMobileMenuOpen(false);

    const section = document.getElementById(link);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }

    console.log(`Navegando a: ${link}`);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <div className="logo">
          <span className="dot">•</span>SIRRETT
        </div>
        <button className="menu-button" onClick={toggleMobileMenu}>
          ☰
        </button>
        <ul className={`nav-links ${isMobileMenuOpen ? 'open' : ''}`}>
          {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((link) => (
            <li key={link}>
              <button
                className={activeLink === link ? 'active' : ''}
                onClick={() => handleLinkClick(link)}
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
