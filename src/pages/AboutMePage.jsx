import React, { useState, useEffect } from 'react';
import { tokens } from '../styles/theme';
import { Button, Menubar } from '../components/DesignSystem'; 
import bgImage1 from '../assets/background.jpg'; // ใช้ภาพนี้ทั้งคู่
import home2 from '../assets/home_2.png'

const AboutMePage = () => {
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
    // แก้ไข: ใช้ bgImage1 (เหมือนมือถือ) ทั้งหมด
    backgroundImage: `url(${bgImage1})`, 
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  // --- DESKTOP LAYOUT ---
  if (!isMobile) {
    return (
      <div style={containerStyle}>
        <Menubar variant="primary" />

        {/* กล่องขวา: About Me */}
        <div style={{ 
          flex: 1, 
          display: 'flex', 
          flexDirection: 'column', 
          justifyContent: 'center', 
          paddingRight: '56px',
          alignItems: 'flex-start',
          textAlign: 'left',
          marginLeft: '48px',
          zIndex: 2
        }}>
          <h1 style={{ ...tokens.typography.heading.h1, color: tokens.colors.background.primary, margin: 0 }}>About me</h1>
          <h3 style={{ ...tokens.typography.heading.h3, color: tokens.colors.background.primary, margin: '8px 0' }}>-- UX/UI Designer</h3>
          <h6 style={{ ...tokens.typography.heading.h6, color: tokens.colors.background.primary, marginBottom: '32px' }}>Professional Product Designer</h6>
          <a href="/files/handbook.pdf" download>
            <Button type="primary">
              ดาวน์โหลด PDF
            </Button>
          </a>
        </div>

        {/* --- กล่องกลาง: เพิ่มภาพ home2 --- */}
        <div style={{ 
          flex: 1.2, // ให้พื้นที่ตรงกลางกว้างกว่านิดหน่อย
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'flex-end', // ให้ภาพวางอยู่ฐานล่างเหมือนหน้า Home
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

        {/* กล่องซ้าย: Effect Glass */}
        <div style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          flex: 1, 
          paddingLeft: '56px', 
          justifyContent: 'center',
          alignItems: 'flex-start',
          zIndex: 2,
          marginRight: '24px',
        }}>
          <div style={{ 
            maxWidth: '420px',
            padding: '40px',
            backgroundColor: tokens.colors.background.secondary, 
            ...tokens.effects.glass,
            borderRadius: '32px',
            border: `1px solid ${tokens.colors.background.primary}` 
          }}>
            <p style={{ ...tokens.typography.body.normal, color: tokens.colors.background.primary, margin: '0 0 8px 0' }}>
              I am a UX/UI Designer who bridges design and code to help teams ship real products.
            </p>
            <h6 style={{ ...tokens.typography.heading.h6, color: tokens.colors.background.primary, margin: 0 }}>Contact</h6>
            <p style={{ ...tokens.typography.body.normal, color: tokens.colors.background.primary }}>
              Jantiwaphron Permsombat (Joy)
            </p>
            <p style={{ ...tokens.typography.body.normal, color: tokens.colors.background.primary, margin: 0 }}>
              Email: jantiwaphron@gmail.com
            </p>
            <p style={{ ...tokens.typography.body.normal, color: tokens.colors.background.primary, margin: '0 0 24px 0' }}>
              Tel: +66 063 652 7169
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'flex-start' }}>
              <Button variant="secondary" size='sm'>Student Portal</Button>
              <Button variant="secondary" size='sm'>LookMix App</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --- MOBILE LAYOUT (คงเดิม) ---
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
          <h6 style={{ ...tokens.typography.heading.h6, color: tokens.colors.background.primary, margin: 0 }}>Professional Product Designer</h6>
          <Button variant="primary" size="sm">Download CV</Button>
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
            <p style={{ ...tokens.typography.body.normal, color: tokens.colors.background.primary, margin: 0 }}>
              Jantiwaphron Permsombat (Joy)
            </p>
            <p style={{ ...tokens.typography.body.normal, color: tokens.colors.background.primary, margin: 0 }}>
              Email: jantiwaphron@gmail.com
            </p>
            <p style={{ ...tokens.typography.body.normal, color: tokens.colors.background.primary, margin: 0 }}>
              Tel: +66 063 652 7169
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
            <Button variant="secondary" size='sm'>Student Portal</Button>
            <Button variant="secondary" size='sm'>LookMix App</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMePage;
