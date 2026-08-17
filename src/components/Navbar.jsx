import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css'; 
import logo from '../assets/LOGO.png'; 
import PricingModal from '../pages/PricingModal';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPricingOpen, setIsPricingOpen] = useState(false); // 2. Modal ki state banayi
  
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
    setIsMobileMenuOpen(false); 
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll Listener sirf Home page par chale ga
  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const sections = ['home', 'programs', 'preview', 'success', 'testimonials'];
      const scrollPosition = window.scrollY + 120; 

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveTab(id);
            break; 
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo-container">
          <Link to="/">
            <img src={logo} alt="EdTech 4D Logo" className="navbar-logo-img" />
          </Link>
        </div>
        
        <ul className={`navbar-links ${isMobileMenuOpen ? 'active' : ''}`}>
          <li>
            {isHome ? (
              <a 
                href="#home" 
                className={activeTab === 'home' ? 'nav-link active' : 'nav-link'} 
                onClick={() => handleTabClick('home')}
              >
                Home
              </a>
            ) : (
              <Link to="/" className="nav-link" onClick={() => handleTabClick('home')}>
                Home
              </Link>
            )}
          </li>
          <li>
            {isHome ? (
              <a 
                href="#programs" 
                className={activeTab === 'programs' ? 'nav-link active' : 'nav-link'} 
                onClick={() => handleTabClick('programs')}
              >
                Programs
              </a>
            ) : (
              <Link to="/#programs" className="nav-link" onClick={() => handleTabClick('programs')}>
                Programs
              </Link>
            )}
          </li>
          <li>
            {isHome ? (
              <a 
                href="#preview" 
                className={activeTab === 'preview' ? 'nav-link active' : 'nav-link'} 
                onClick={() => handleTabClick('preview')}
              >
                Preview
              </a>
            ) : (
              <Link to="/#preview" className="nav-link" onClick={() => handleTabClick('preview')}>
                Preview
              </Link>
            )}
          </li>
          <li>
            {isHome ? (
              <a 
                href="#success" 
                className={activeTab === 'success' ? 'nav-link active' : 'nav-link'} 
                onClick={() => handleTabClick('success')}
              >
                Success Stories
              </a>
            ) : (
              <Link to="/#success" className="nav-link" onClick={() => handleTabClick('success')}>
                Success Stories
              </Link>
            )}
          </li> 
          
          <li className="mobile-auth-links">
            <div className="mobile-divider"></div>
            <Link to="/login" className="btn-login-mobile" onClick={() => setIsMobileMenuOpen(false)}>
              Login
            </Link>
            {/* Mobile Get Started Button - Isse bhi modal khulega */}
            <button 
              className="btn-get-started-mobile" 
              onClick={() => {
                setIsMobileMenuOpen(false);
                setIsPricingOpen(true);
              }}
            >
              Get Started
            </button>
          </li>
        </ul>

        <div className="navbar-auth">
          <Link to="/login" className="btn-login">Login</Link>
          
          {/* Desktop Get Started Button - Click karne par Pricing Modal khulega */}
          <button 
            className="btn-get-started" 
            onClick={() => setIsPricingOpen(true)}
          >
            Get Started
          </button>
        </div>

        <div className={`hamburger-menu ${isMobileMenuOpen ? 'open' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>

      {/* 3. Pricing Modal yahan render hoga */}
      <PricingModal 
        isOpen={isPricingOpen} 
        onClose={() => setIsPricingOpen(false)} 
      />
    </>
  );
};

export default Navbar;