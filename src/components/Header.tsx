
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import Logo from '../images/logo.svg';

const Header = () => {
  const { pathname } = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 const smoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId.replace('#', ''));
    
    if (targetElement) {
      const headerHeight = document.querySelector('header')?.offsetHeight || 80;
      const targetPosition = targetElement.offsetTop - headerHeight;

      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });

      // For browsers that don't support smooth scroll
      if (!('scrollBehavior' in document.documentElement.style)) {
        smoothScrollFallback(targetPosition);
      }
    }
  };

  // Fallback for older browsers
  const smoothScrollFallback = (targetPosition) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className=" header__container">
        <div className="header__logo">
          <a href="#hero">
            <img src={Logo} alt="" />
          </a>
        </div>

        <nav className={`header__nav ${isOpen ? 'active' : ''}`}>
          <ul className="header__menu">
            <li className="header__menu-item">
              <a href="#hero" className='header__menu-link' onClick={(e) => smoothScroll(e, '#hero')}>Home</a>
            </li>
            <li className="header__menu-item">
              <a href="#service" className='header__menu-link' onClick={(e) => smoothScroll(e, '#service')}>Services</a>
            </li>
            <li className="header__menu-item">
              <a href="#about" className='header__menu-link' onClick={(e) => smoothScroll(e, '#about')}>About</a>
            </li>
            <li className="header__menu-item">
              <a href="#industry" className='header__menu-link' onClick={(e) => smoothScroll(e, '#industry')}>Industry</a>
            </li>
            <li className="header__menu-item">
              <a href="#testimonial" className='header__menu-link' onClick={(e) => smoothScroll(e, '#testimonial')}>Testimonials</a>
            </li>
          </ul>
          <a href="#contact" className="btn header__cta" onClick={(e) => smoothScroll(e, '#contact')}>Contact Us</a>
        </nav>

        <div className="header__toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
