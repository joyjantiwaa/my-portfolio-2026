import React, { useState, useEffect } from 'react';
import { tokens } from '../styles/theme';
import { Link, useLocation } from 'react-router-dom';
import bgImage from '../assets/background.jpg';
import logoImg from '../assets/logo_jp.svg'; 
import '../styles/logo-animation.css';

// --- BUTTON COMPONENT ---
export const Button = ({ variant = 'primary', size = 'md', children, onClick }) => {
  const [isHover, setIsHover] = useState(false);
  const [isPressed, setIsPressed] = useState(false); // สำหรับ Neumorphism effect ตอนคลิก

  // 1. Primary Style (Fancy Gradient)
  const fancyButtonStyle = {
    appearance: 'none',
    border: 'none',
    cursor: 'pointer',
    borderRadius: '25px',
    color: tokens.colors.background.primary,
    backgroundImage: 'linear-gradient(to bottom, #8d49fd, #7f56f3, #5691f3)',
    boxShadow: '0px 4px 12px rgba(9,12,60,0.15), inset 0px 1px 1px rgba(233,209,255,0.2)',
    ...tokens.typography.body.normal,
    transition: '0.3s',
    padding: size === 'sm' ? '6px 16px' : '8px 24px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // 2. Secondary Style (Text Button)
  const textButtonStyle = {
    appearance: 'none',
    border: 'none',
    background: 'none',
    cursor: 'pointer',
    color: tokens.colors.background.primary,
    ...tokens.typography.body.large,
    transition: '0.3s',
    padding: '12px 0',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
  };

  // 3. Tertiary Style (Neumorphism)
  const tertiaryButtonStyle = {
    appearance: 'none',
    cursor: 'pointer',
    backgroundColor: '#e0e0e0',
    borderRadius: '50px',
    color: '#4d4d4d',
    border: '2px solid rgb(206, 206, 206)',
    ...tokens.typography.body.normal, // ใช้ขนาดตัวอักษรเล็กสำหรับ sm
    padding: size === 'sm' ? '8px 20px' : '15px 40px',
    transition: 'all 0.2s ease-in-out',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    outline: 'none',
    // Neumorphism Shadows Logic
    boxShadow: isHover || isPressed
      ? 'inset 2px 2px 5px #bcbcbc, inset -2px -2px 5px #ffffff, 2px 2px 5px #bcbcbc, -2px -2px 5px #ffffff'
      : 'inset 4px 4px 10px #bcbcbc, inset -4px -4px 10px #ffffff',
  };

  const getStyle = () => {
    if (variant === 'primary') return fancyButtonStyle;
    if (variant === 'secondary') return textButtonStyle;
    if (variant === 'tertiary') return tertiaryButtonStyle;
    return fancyButtonStyle;
  };

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => { setIsHover(false); setIsPressed(false); }}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      style={getStyle()}
    >
      <span>{children}</span>
      {variant === 'secondary' && (
        <span 
          className="material-symbols-outlined" 
          style={{
            fontSize: '24px',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            opacity: isHover ? 1 : 0,
            transform: isHover ? 'translateX(0)' : 'translateX(-15px)',
            width: isHover ? '24px' : '0px',
            overflow: 'hidden',
          }}
        >
          arrow_forward
        </span>
      )}
    </button>
  );
};

// --- MENUBAR COMPONENT ---
export const Menubar = ({ variant = 'primary' }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1240);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1240);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navStyle = {
    position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 3000,
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    height: isMobile && isOpen ? '100vh' : '70px',
    padding: isMobile ? '16px 24px' : '0 56px',
    transition: 'all 0.4s ease',
    
    ...(isMobile && isOpen ? {
      backgroundImage: `url(${bgImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      flexDirection: 'column',
      justifyContent: 'flex-start'
    } : (variant === 'secondary' ? {
      backgroundColor: tokens.colors.background.secondary,
      ...tokens.effects.glass,
    } : {
      backgroundColor: 'transparent',
    }))
  };

  return (
    <nav style={navStyle}>
      {/* LOGO AREA - คลิกเพื่อกลับหน้าแรกได้เสมอ */}
      <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
        <div className="logo-3d-wrapper">
          <Link to="/">
            <img 
              src={logoImg} 
              alt="Logo" 
              style={{ height: '40px', width: 'auto' }} 
              className="logo-3d" 
            />
          </Link>
        </div>
      </div>

      {/* HAMBURGER FOR MOBILE */}
      {isMobile && (
        <div 
          onClick={() => setIsOpen(!isOpen)} 
          style={{ cursor: 'pointer', position: 'absolute', top: '24px', right: '24px' }}
        >
          {isOpen ? <XIcon /> : <HamburgerIcon variant={variant} />}
        </div>
      )}

      {/* MENU ITEMS - แก้ไขให้ไม่มี Home และชื่อสวยขึ้น */}
      <div style={{ 
        display: (isMobile && !isOpen) ? 'none' : 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '40px' : '60px', 
        alignItems: 'center',
        marginTop: isMobile && isOpen ? '80px' : '0'
      }}>
        {['/', '/student-portal', '/lookmix-app', '/about-me']
          .filter(path => path !== '/') // 1. กรองหน้า Home ออกจากเมนู
          .map((path) => {
            // 2. จัดการชื่อเมนูให้เป็นตัวพิมพ์ใหญ่สวยๆ
            const label = path.substring(1)
              .split('-')
              .map(word => word.charAt(0).toUpperCase() + word.slice(1))
              .join(' ');

            return (
              <NavLink 
                key={path} 
                to={path} 
                variant={variant} 
                isMenuOpen={isOpen} 
                onClick={() => setIsOpen(false)}
              >
                {label}
              </NavLink>
            );
          })}
      </div>
    </nav>
  );
};

// --- NAVLINK COMPONENT ---
const NavLink = ({ children, to, variant, isMenuOpen, onClick }) => {
  const [hover, setHover] = useState(false);
  const location = useLocation();
  const isActive = location.pathname === to;

  const getTextColor = () => {
    if (isMenuOpen) return tokens.colors.background.primary;
    if (variant === 'primary') {
      return (hover || isActive) ? tokens.colors.background.secondary : tokens.colors.background.primary;
    }
    return (hover || isActive) ? tokens.colors.text.secondary : tokens.colors.text.primary;
  };

  return (
    <Link 
      to={to} 
      onClick={onClick}
      onMouseEnter={() => setHover(true)} 
      onMouseLeave={() => setHover(false)}
      style={{
        textDecoration: 'none', 
        transition: '0.3s',
        ...tokens.typography.body.normal,
        color: getTextColor(),
      }}
    >
      {children}
    </Link>
  );
};

const HamburgerIcon = ({ variant }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" 
    stroke={variant === 'primary' ? tokens.colors.background.primary : tokens.colors.text.primary} 
    strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const XIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={tokens.colors.background.primary} strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);