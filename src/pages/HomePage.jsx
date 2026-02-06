import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // เพิ่มตัวเลือกการ Link
import { tokens } from '../styles/theme';
import { Button, Menubar } from '../components/DesignSystem';
import bgImage from '../assets/background.jpg';
import web from '../assets/web.png';
import mobile from '../assets/mobile.png';

const HomePage = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1240);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1240;
      setIsMobile(mobile);
      document.body.style.overflow = mobile ? 'auto' : 'hidden';
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const containerStyle = {
    backgroundImage: `url(${bgImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: isMobile ? 'scroll' : 'fixed',
    minHeight: '100vh',
    height: isMobile ? 'auto' : '100vh', 
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: isMobile ? 'flex-start' : 'center',
    paddingTop: isMobile ? '60px' : '60px', 
    paddingLeft: isMobile ? '20px' : '56px',
    paddingRight: isMobile ? '20px' : '56px',
    paddingBottom: isMobile ? '100px' : '0px', 
    boxSizing: 'border-box',
    position: 'relative',
    overflowX: 'hidden',
    overflowY: isMobile ? 'auto' : 'hidden'
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
    gap: '32px',
    width: '100%',
    maxWidth: '1200px',
    zIndex: 2,
    marginBottom: isMobile ? '20px' : '0'
  };

  return (
    <div style={containerStyle}>
      <Menubar variant="primary" />

      <div style={gridStyle}>
        <ProjectCard 
          title="Student Portal"
          subtitle="Designing a Student Portal Under System Constraints"
          image={web}
          link="/student-portal"
          isMobile={isMobile}
        />
        <ProjectCard 
          title="LookMix App"
          subtitle="AI-Integrated Digital Wardrobe & Styling Platform"
          image={mobile}
          link="/lookmix-app"
          isMobile={isMobile}
        />
      </div>
    </div>
  );
};

const ProjectCard = ({ title, subtitle, image, link, isMobile }) => {
  const [isHover, setIsHover] = useState(false);
  const navigate = useNavigate(); // ใช้ navigate สำหรับ react-router-dom

  const cardStyle = {
    backgroundColor: tokens.colors.background.secondary,
    border: `1px solid ${tokens.colors.background.primary}`,
    borderRadius: '48px',
    padding: isMobile ? '24px' : '32px',
    display: 'flex',
    flexDirection: 'column',
    cursor: 'pointer',
    transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)', 
    ...tokens.effects.glass,
    height: isMobile ? 'auto' : 'fit-content', 
  };

  const imageContainerStyle = {
    width: '100%',
    height: isMobile ? '220px' : '280px', 
    borderRadius: '24px',
    overflow: 'hidden',
    position: 'relative',
    marginTop: '20px'
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      // แก้ไขลิงก์ให้ถูกต้องตามระบบ Router
      onClick={() => navigate(link)}
    >
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1 style={{ 
          ...tokens.typography.heading.h1, 
          color: tokens.colors.background.primary, 
          //fontSize: isMobile ? '28px' : '40px',
          margin: 0 
        }}>
          {title}
        </h1>
        <p style={{ 
          ...tokens.typography.body.normal, 
          color: tokens.colors.background.primary,
          margin: '4px 0 12px 0',
          opacity: 0.9 
        }}>
          {subtitle}
        </p>
      </div>

      <div>
        {/* ส่ง onClick ของปุ่มให้ navigate ไปยังหน้าลิงก์ด้วย */}
        <Button variant="secondary" onClick={(e) => { e.stopPropagation(); navigate(link); }}>
          View Case Study
        </Button>
      </div>

      <div style={imageContainerStyle}>
        <img 
          src={image} 
          alt={title} 
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: (!isMobile && isHover) ? 'scale(1.2)' : 'scale(1.0)',
          }} 
        />
      </div>
    </div>
  );
};

export default HomePage;