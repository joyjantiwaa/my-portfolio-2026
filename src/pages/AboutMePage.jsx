import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // นำเข้า useNavigate
import { tokens } from '../styles/theme';
import { Button, Menubar } from '../components/DesignSystem'; 
import bgImage1 from '../assets/background.jpg'; 
import home2 from '../assets/home_2.png';
import CV from '../assets/CV-jantiwaphron-senior-uxui_compressed.pdf';

const AboutMePage = () => {
  const navigate = useNavigate(); // ประกาศใช้งาน navigate
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1240);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1240);
    window.addEventListener('resize', handleResize);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = 'auto';
    };
  }, []);

  const containerStyle = {
    backgroundColor: tokens.colors.background.primary,
    height: '100vh',
    width: '100vw',
    display: 'flex',
    flexDirection: isMobile ? 'column' : 'row',
    overflow: 'hidden',
    position: 'relative',
    backgroundImage: `url(${bgImage1})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat'
  };

  // --- DESKTOP LAYOUT ---
  if (!isMobile) {
    return (
      <div style={containerStyle}>
        <Menubar variant="primary" />

        {/* ส่วนข้อมูลหลัก */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          paddingLeft: '80px', // ปรับให้ห่างขอบซ้าย
          alignItems: 'flex-start',
          textAlign: 'left',
          zIndex: 2
        }}>
          <h1 style={{ ...tokens.typography.heading.h1, color: tokens.colors.background.primary, margin: 0 }}>About me</h1>
          <h3 style={{ ...tokens.typography.heading.h3, color: tokens.colors.background.primary, margin: '8px 0' }}>-- UX/UI Designer</h3>
          <h6 style={{ ...tokens.typography.heading.h6, color: tokens.colors.background.primary, marginBottom: '32px' }}>Professional Product Designer</h6>
          <a href={CV} download style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="sm">
              DOWNLOAD CV
            </Button>
          </a>
        </div>

        {/* ส่วนภาพประกอบกลางหน้าจอ */}
        <div style={{ 
          flex: 1.2, 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'flex-end', 
          height: '100%',
          zIndex: 2 
        }}>
          <img 
            src={home2} 
            alt="Decoration" 
            style={{ 
              maxHeight: '90%', 
              width: 'auto', 
              objectFit: 'contain' 
            }} 
          />
        </div>

        {/* ส่วนข้อมูลติดต่อและลิงก์ผลงาน (Glass Effect) */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          flex: 1, 
          paddingRight: '80px', 
          justifyContent: 'center',
          alignItems: 'flex-end',
          zIndex: 2,
        }}>
          <div style={{ 
            maxWidth: '420px',
            padding: '40px',
            backgroundColor: tokens.colors.background.secondary, 
            ...tokens.effects.glass,
            borderRadius: '32px',
            border: `1px solid ${tokens.colors.background.primary}` 
          }}>
            <p style={{ ...tokens.typography.body.normal, color: tokens.colors.background.primary, margin: '0 0 16px 0' }}>
              I am a UX/UI Designer who bridges design and code to help teams ship real products.
            </p>
            <h6 style={{ ...tokens.typography.heading.h6, color: tokens.colors.background.primary, margin: '0 0 8px 0' }}>Contact</h6>
            <div style={{ marginBottom: '24px' }}>
              <p style={{ ...tokens.typography.body.normal, color: tokens.colors.background.primary, margin: 0 }}>Jantiwaphron Permsombat (Joy)</p>
              <p style={{ ...tokens.typography.body.normal, color: tokens.colors.background.primary, margin: 0 }}>Email: jantiwaphron@gmail.com</p>
              <p style={{ ...tokens.typography.body.normal, color: tokens.colors.background.primary, margin: 0 }}>Tel: +66 063 652 7169</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'stretch' }}>
              <Button variant="secondary" size='sm' onClick={() => navigate('/student-portal')}>
                Student Portal
              </Button>
              <Button variant="secondary" size='sm' onClick={() => navigate('/lookmix-app')}>
                LookMix App
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- MOBILE LAYOUT ---
  return (
    <div style={{...containerStyle, padding: '80px 24px', position: 'relative', height: '100dvh', justifyContent: 'center'}}>
      <Menubar variant="primary" />

      <div style={{ 
        backgroundColor: tokens.colors.background.secondary, 
        ...tokens.effects.glass, 
        padding: '32px', 
        borderRadius: '24px',
        border: `1px solid ${tokens.colors.background.primary}`,
        zIndex: 2 
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <h1 style={{ ...tokens.typography.display, color: tokens.colors.background.primary, margin: 0, fontSize: '64px' }}>About me</h1>
          <p style={{ ...tokens.typography.body?.large || {}, color: tokens.colors.background.primary, margin: 0 }}>Professional Product Designer</p>
          <a href={CV} download style={{ textDecoration: 'none' }}>
            <Button variant="primary" size="sm">
              Download CV
            </Button>
          </a>
        </div>

        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '24px', 
          width: '100%', 
          marginTop: '32px'
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', textAlign: 'left' }}>
            <h6 style={{ ...tokens.typography.heading.h6, color: tokens.colors.background.primary, margin: 0 }}>Contact</h6>
            <p style={{ ...tokens.typography.body.normal, color: tokens.colors.background.primary, margin: 0 }}>Jantiwaphron Permsombat (Joy)</p>
            <p style={{ ...tokens.typography.body.normal, color: tokens.colors.background.primary, margin: 0 }}>Email: jantiwaphron@gmail.com</p>
            <p style={{ ...tokens.typography.body.normal, color: tokens.colors.background.primary, margin: 0 }}>Tel: +66 063 652 7169</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'stretch' }}>
            <Button variant="secondary" size='sm' onClick={() => navigate('/student-portal')}>
              Student Portal
            </Button>
            <Button variant="secondary" size='sm' onClick={() => navigate('/lookmix-app')}>
              LookMix App
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
