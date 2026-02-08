import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react'; 
import { tokens } from '../styles/theme';
import { Button, Menubar } from '../components/DesignSystem';
import { useNavigate } from 'react-router-dom';
import LookMix from '../assets/LookMix.jpg'
import CoverLookMix from '../assets/CoverLookMix.png';
import LookMixVideo from '../assets/Si-Application3.mp4'; 
import LookMixUI from '../assets/LookMixUI.jpg';
import Token from '../assets/Token.mp4';
import BitClound from '../assets/Bit_Clound.mp4'
import Npm from '../assets/Npm.mp4'
import TestApp from '../assets/Testapp.mp4'

const LookMixApp = () => {
  const t = tokens;
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrolled, setScrolled] = useState(false);
  const [activeImage, setActiveImage] = useState(null);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const sectionWrap = { 
    padding: isMobile ? '80px 5%' : '140px 10%', 
    maxWidth: '1440px', 
    margin: '0 auto' 
  };
  

  return (
    <div style={{ backgroundColor: t.colors.background.primary, color: t.colors.text.primary, minHeight: '100vh', overflowX: 'hidden' }}>
      
      {/* --- แถบเลื่อน (CUSTOM SCROLLBAR) --- */}
      <style>
        {`
          ::-webkit-scrollbar { width: 8px; }
          ::-webkit-scrollbar-track { background: ${t.colors.background.primary}; }
          ::-webkit-scrollbar-thumb { background: ${t.colors.text.tertiary}; border-radius: 10px; }
          ::-webkit-scrollbar-thumb:hover { background: ${t.colors.text.secondary}; }
          html { scroll-behavior: smooth; }
        `}
      </style>

      {/* --- TOP IMAGE SECTION (OPTIMIZED) --- */}
      <section 
        style={{ 
          width: '100%', 
          // ในมือถือให้สูงตามภาพ (auto) ใน Desktop อาจจะคุมความสูงไว้
          height: isMobile ? 'auto' : '450px', 
          overflow: 'hidden', 
          backgroundColor: t.colors.background.primary, // ใช้สีจาก theme แทนดำล้วนจะดูเนียนกว่า
          cursor: 'zoom-in',
          position: 'relative'
        }}
      >
        <motion.img 
          src={LookMix}
          alt="LookMix Cover"
          onClick={() => setActiveImage(LookMix)} // ใช้ฟังก์ชันขยายรูปที่คุณสร้างไว้
          whileHover={{ scale: isMobile ? 1 : 1.02 }} // มือถือไม่ต้อง Hover ก็ได้ครับ เดี๋ยวจะกดยาก
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            height: '100%',
            // สำคัญมาก: 'cover' จะทำให้ภาพเต็มพื้นที่ 'contain' จะเห็นภาพครบทั้งใบ
            objectFit: isMobile ? 'contain' : 'cover', 
            display: 'block',
          }}
        />
      </section>
    

      {/* --- FIXED NAVBAR --- */}
       <div style={{ 
         position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000, 
         transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
         backgroundColor: scrolled ? 'rgba(10, 10, 10, 0.8)' : 'transparent',
         backdropFilter: scrolled ? 'blur(20px)' : 'none',
         borderBottom: scrolled ? `1px solid ${t.colors.text.tertiary}22` : 'none'
       }}>
        <Menubar variant="secondary" />
      </div>

      {/* --- 01. ส่วนนำ (INTRO SECTION) --- */}
      <motion.section initial="hidden" animate="visible" style={{ ...sectionWrap, paddingTop: '80px' }}>
        <motion.span variants={fUp} style={{ ...t.typography.label.normal, color: t.colors.hilight.normal, letterSpacing: '2px', display: 'block', marginBottom: '16px' }}>
          CASE STUDY: LOOKMIX AI-Wardrobe
        </motion.span>
        <motion.h1 variants={fUp} style={{ ...t.typography.heading.h1, marginBottom: '40px' }}>
          Designing a Personal AI Stylist App with Cost-Optimized AI Infrastructure
        </motion.h1>

        <motion.div variants={fUp} style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
          gap: '40px', 
          borderTop: `1px solid ${t.colors.text.tertiary}44`, 
          paddingTop: '40px', 
          marginBottom: '60px' 
        }}>
          <div>
            <p style={{ ...t.typography.label.large, color: t.colors.text.secondary }}>Role & Scope</p>
            <p style={{ ...t.typography.body.large }}>UX/UI Designer · Design System · System Architecture</p>
          </div>
          <div>
            <p style={{ ...t.typography.label.large, color: t.colors.text.secondary }}>Outcome</p>
            <p style={{ ...t.typography.body.large}}>Comprehensive Design-to-Code implementation for both JavaScript (React) and Flutter ecosystems</p>
          </div>
          <div>
              <p style={{ ...t.typography.label.normal, color: t.colors.text.secondary, marginBottom: '12px' }}>Tech Stack</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {[
                  { name: "Figma", icon: "logos:figma" },
                  { name: "Bit.cloud", icon: "simple-icons:bit" },
                  { name: "ChatGPT", icon: "logos:openai-icon" },
                  { name: "Gemini", icon: "logos:google-gemini" },
                  { name: "VS Code", icon: "vscode-icons:file-type-vscode" },
                  { name: "Iconify", icon: "simple-icons:iconify" },
                  { name: "Flutter", icon: "logos:flutter" },
                  { name: "React", icon: "logos:react" },
                  { name: "Photopea", icon: "simple-icons:photopea" }
                ].map((tool, idx) => (
                  <div 
                    key={idx} 
                    title={tool.name} // แสดงชื่อเมื่อเอาเมาส์ไปวาง
                    style={{ 
                      padding: '10px', 
                      backgroundColor: t.colors.background.secondary, 
                      borderRadius: '12px', 
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: `1px solid ${t.colors.text.tertiary}22`,
                      transition: 'transform 0.2s ease',
                      cursor: 'help',
                      ...t.effects.glass 
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <Icon icon={tool.icon} width="24" height="24" />
                  </div>
                ))}
              </div>
            </div>
        </motion.div>

        <motion.div 
          variants={fUp} 
          style={{ 
            display: 'flex', 
            // ถ้าเป็นมือถือให้ขึ้นบรรทัดใหม่ (wrap) และจัดกึ่งกลาง
            flexWrap: 'wrap', 
            gap: '16px', 
            justifyContent: isMobile ? 'center' : 'flex-start',
            width: '100%'
          }}
        >
          {[
            { label: "Marketing Website", link: "https://my-web-project-virid.vercel.app/" },
            { label: "LookMix App", link: "https://joyjantiwaa.github.io/lookmix_app/" },
            { label: "Flutter Library", link: "https://pub.dev/packages/lookmix_design_system" },
            { label: "React Library", link: "https://www.npmjs.com/package/@jpjoy-lookmix/lookmix-design-system" },
            { label: "UX & Interaction", link: "https://www.figma.com/proto/ynYlFClGk7xVlGqImtzzj3/LookMix-Library?node-id=149-399&p=f&t=WzurYWYYoKugG1XJ-1&scaling=min-zoom&content-scaling=fixed&page-id=21%3A1712&starting-point-node-id=149%3A399" }
          ].map((btn, idx) => (
            <Button 
              key={idx}
              variant="primary" 
              size="sm" 
              onClick={() => window.open(btn.link, '_blank')}
              style={{ 
                flex: isMobile ? '1 1 calc(45% - 10px)' : '0 1 auto',
                minWidth: isMobile ? '140px' : 'auto',
                textAlign: 'center',
                justifyContent: 'center'
              }}
            >
              {btn.label}
            </Button>
          ))}
        </motion.div>
      </motion.section>

      {/* --- 02. ภาพกระบวนการออกแบบ --- */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp} style={{ ...sectionWrap, paddingBottom: 0 }}>
        <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: t.effects.glass.boxShadow }}>
          <img src={CoverLookMix} alt="กระบวนการออกแบบ" onClick={() => setActiveImage(CoverLookMix)} 
           style={{ width: '100%', display: 'block', cursor: 'zoom-in' }} />
        </div>
      </motion.section>
      
      {/* --- 01. THE PROBLEM SECTION --- */}
      <section style={{ ...sectionWrap, backgroundColor: t.colors.background.primary, color: t.colors.text.primary }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp}>
          
          {/* 1. Label Top */}
          <span style={{ 
            ...t.typography.label.normal, 
            color: t.colors.hilight.normal,
            display: 'block', 
            marginBottom: '24px',
            letterSpacing: '2px',
            textTransform: 'uppercase'
          }}>
            01 / overview
          </span>

          {/* 2. Display Quote */}
          <h2 style={{ 
            ...t.typography.display, 
            color: t.colors.text.primary, 
            margin: '0 0 40px 0' 
          }}>
            “I have nothing<br/>to wear.”
          </h2>

          {/* 3. Intro Text */}
          <p style={{ 
            ...t.typography.heading.h6, 
            color: t.colors.text.primary, 
            marginBottom: '60px',
            fontWeight: '400',
            lineHeight: '1.6',
            maxWidth: '800px' // จำกัดความกว้างให้อ่านง่ายขึ้น
          }}>
            The starting point was not technology, but a common human frustration. 
            Despite full wardrobes, users lack <strong style={{ color: '#9747FF' }}>visibility</strong> and <strong style={{ color: '#9747FF' }}>systemization</strong>.
          </p>

          {/* 4. Sub-Problem Boxes (2 Columns) */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: '40px',
            borderTop: `1px solid ${t.colors.text.primary}33`,
            paddingTop: '60px'
          }}>
            {/* Lack of Visibility */}
            <div>
              <h4 style={{ ...t.typography.heading.h6, color: t.colors.hilight.normal,marginBottom: '16px' }}>
                Lack of Visibility
              </h4>
              <p style={{ ...t.typography.body.normal, color: t.colors.text.primary }}>
                Users repurchase items they already own because they can't "see" their inventory.
              </p>
            </div>

            {/* Cognitive Load */}
            <div>
              <h4 style={{ ...t.typography.heading.h6, color: t.colors.hilight.normal,marginBottom: '16px' }}>
                Cognitive Load
              </h4>
              <p style={{ ...t.typography.body.normal, color: t.colors.text.primary }}>
                Mix-and-match requires high mental effort without a digital planning tool.
              </p>
            </div>
          </div>

        </motion.div>
      </section>
      
      {/* --- 04. กลยุทธ์การออกแบบ (COST-AWARE STRATEGY) --- */}
      <section style={{ backgroundColor: t.colors.background.primary, color: t.colors.text.primary, ...sectionWrap }}>
        <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', gap: '60px', alignItems: 'center' }}>
          <div>
            <span style={{ ...t.typography.label.normal, color: t.colors.hilight.normal }}>02 / AI stretegy</span>
            <h2 style={{ ...t.typography.heading.h2, color: t.colors.text.primary, marginTop: '12px', marginBottom: '32px' }}>Cost-Efficiency Driven UX Architecture</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div style={{ borderLeft: `3px solid ${t.colors.hilight.normal}`, paddingLeft: '24px' }}>
                <h4 style={t.typography.heading.h6}>Designing Backward</h4>
                <p style={{ ...t.typography.body.normal, color: '#888' }}>UX workflows engineered around cloud-based AI inference costs to ensure long-term business model sustainability.</p>
              </div>
              <div style={{ borderLeft: `3px solid ${t.colors.hilight.normal}`, paddingLeft: '24px' }}>
                <h4 style={t.typography.heading.h6}>Systemized Components</h4>
                <p style={{ ...t.typography.body.normal, color: '#888' }}>Utilized "Paper Doll" logic to simplify clothing layering, optimizing the processing load for the AI engine.</p>
              </div>
            </div>
          </div>
          <div style={{ 
            padding: '60px', 
            backgroundColor: 'rgba(255,255,255,0.05)', 
            borderRadius: '32px', 
            textAlign: 'center',
            border: '1px solid rgba(255,255,255,0.1)'
          }}>
            <h2 style={{ fontSize: '72px', fontWeight: 800, color: t.colors.hilight.normal,margin: 0 }}>70%</h2>
            <p style={{ ...t.typography.label.normal, opacity: 0.6 }}>Minimized AI processing latency</p>
          </div>
        </div>
      </section>

      {/* --- 08. DESIGN LIBRARY SECTION (NEW) --- */}
      <section style={{ ...sectionWrap, backgroundColor: t.colors.background.primary, color: t.colors.text.primary, borderTop: '1px solid #eee' }}>
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={fUp}
          style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
            gap: isMobile ? '40px' : '100px', 
            alignItems: 'start' 
          }}
        >
          {/* ฝั่งซ้าย: Text Content */}
          <div>
            <span style={{ 
              ...t.typography.label.normal, 
              color: t.colors.hilight.normal,
              display: 'block', 
              marginBottom: '24px',
              letterSpacing: '2px',
              fontWeight: '500'
            }}>
              03 / DESIGN SYSTEM
            </span>
            
            <h2 style={{ 
              ...t.typography.display, 
              marginBottom: '40px',
              color: t.colors.text.primary
            }}>
              Build once<br/>
              Deploy <span style={{ color: t.colors.hilight.normal }}>everywhere</span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              <div>
                <h4 style={{ ...t.typography.heading.h5, marginBottom: '12px' }}>LookMix Design Library</h4>
                <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary, lineHeight: '1.7' }}>
                  Architected and developed a highly flexible Shared Library supporting both the<strong>Web Ecosystem (React)</strong> และ <strong>Mobile Apps (Flutter)</strong> for iOS and Android, ensuring consistent UI/UX standards from a single source of truth.
                </p>
              </div>

          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            {/* Tech Badges with Real Links */}
            {[
              { name: 'Flutter', url: 'https://pub.dev/packages/lookmix_design_system' },
              { name: 'React', url: 'https://www.npmjs.com/package/@jpjoy-lookmix/lookmix-design-system' },
            ].map((tech) => (
              <a
                key={tech.name}
                href={tech.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ 
                  padding: '8px 16px', 
                  borderRadius: '100px', 
                  border: '1px solid #ddd', 
                  fontSize: '12px', 
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: t.colors.text.primary,
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = t.colors.hilight.normal;
                  e.currentTarget.style.color = t.colors.hilight.normal;
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.05)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = '#ddd';
                  e.currentTarget.style.color = t.colors.text.primary;
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {tech.name}
              </a>
            ))}
        </div>
      </div> 
    </div>

          {/* ฝั่งขวา: Visual Image */}
          <div style={{ position: 'relative' }}>
            <div style={{ 
              borderRadius: '32px', 
              overflow: 'hidden', 
              boxShadow: '0 40px 80px rgba(0,0,0,0.1)',
              backgroundColor: '#f8f9fa',
              border: '1px solid #eee'
            }}>
              <img 
                src={LookMixUI} 
                alt="Library Infrastructure" 
                onClick={() => setActiveImage(LookMixUI)} 
                style={{ width: '100%', display: 'block', cursor: 'zoom-in' }}
              />
            </div>
            
            {/* ตกแต่งด้วย Floating Label เล็กๆ ให้ดูมีความเป็น Tech */}
            {!isMobile && (
              <div style={{ 
                position: 'absolute', 
                bottom: '-20px', 
                right: '40px', 
                backgroundColor: t.colors.text.primary, 
                color: t.colors.background.primary, 
                padding: '20px 32px', 
                borderRadius: '16px',
                boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
              }}>
                <p style={{ margin: 0, fontSize: '12px', opacity: 0.6 }}>SYSTEM STATUS</p>
                <p style={{ margin: 0, fontSize: '18px', fontWeight: 'bold', color: '#4ADE80' }}>● Production Ready</p>
              </div>
            )}
          </div>
        </motion.div>
      </section>
      

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px' }}>
  
      {/* --- FIGMA PROTOTYPE FRAME --- */}
      <div style={{ 
        width: isMobile ? '300px' : '375px', 
        aspectRatio: '9/19', 
        borderRadius: '40px', 
        overflow: 'hidden', 
        border: '12px solid #1a1a1a', 
        boxShadow: `0 40px 100px rgba(0,0,0,0.2)`,
        backgroundColor: '#000',
        position: 'relative',
      }}>
        <iframe 
          title="Figma Prototype"
          style={{ border: 'none', width: '100%', height: '100%' }} 
          src="https://embed.figma.com/proto/ynYlFClGk7xVlGqImtzzj3/LookMix-Library?node-id=145-2317&scaling=scale-down-width&content-scaling=fixed&page-id=21%3A1712&starting-point-node-id=149%3A399&embed-host=share" 
          allowFullScreen
        />
      </div>

      {/* --- CALL TO ACTION BUTTONS --- */}
      <div style={{ 
        display: 'flex', 
        gap: '12px', 
        marginTop: '8px', // ปรับระยะห่างจากตัวเครื่องเล็กน้อย
        flexWrap: isMobile ? 'wrap' : 'nowrap',
        justifyContent: 'center',
        marginBottom: '100px',
      }}>
        <Button 
          variant="primary" 
          size="sm" 
          onClick={() => window.open('https://joyjantiwaa.github.io/lookmix_app/', '_blank')}
        >
          Try App Demo
        </Button>
        
        <Button 
          variant="tertiary" 
          size="sm" 
          onClick={() => window.open('https://www.figma.com/proto/ynYlFClGk7xVlGqImtzzj3/LookMix-Library?node-id=149-399&p=f&t=WzurYWYYoKugG1XJ-1&scaling=min-zoom&content-scaling=fixed&page-id=21%3A1712&starting-point-node-id=149%3A399', '_blank')}
        >
          Figma file
        </Button>
      </div>

    </div>

      {/* --- 04. DESIGN SYSTEM ARCHITECTURE (ENGINEERING FOUNDATION) --- */}
      <section style={{ ...sectionWrap }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp}>
          <span style={{ ...t.typography.label.normal, color: t.colors.hilight.normal, display: 'block', marginBottom: '16px' }}>04 / ENGINEERING FOUNDATION</span>
          <h2 style={{ ...t.typography.heading.h2, marginBottom: '24px' }}>Designing a Production-Ready Design System</h2>
          <p style={{ ...t.typography.body.large, color: t.colors.text.secondary, maxWidth: '900px', marginBottom: '60px' }}>
            This project was intentionally used to validate how a design system should be built when a company needs a long-term product foundation, not just a UI kit.
          </p>

          {/* Design Question Box */}
          <div style={{ 
            backgroundColor: t.colors.background.primary, padding: '40px', borderRadius: '24px', borderLeft: `6px solid ${t.colors.hilight.normal}`,
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)', marginBottom: '120px'
          }}>
            <p style={{ ...t.typography.label.normal, color: t.colors.hilight.normal, marginBottom: '8px' }}>DESIGN QUESTION</p>
            <h3 style={{ ...t.typography.heading.h4, margin: 0 }}>
              If a product requires a dedicated design system tailored to its specific workflow, how should it be designed, engineered, and maintained?
            </h3>
          </div>

          {/* --- Steps Container --- */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '140px' }}>
            
            {[
              {
                step: "Step 1: System Definition",
                video: Token, // ใช้ Video ตัวเดียวกับข้างบนหรือตัวที่เหมาะสม
                link: "https://joyjantiwaa.github.io/lookmix-design-system/",
                content: (
                  <ul style={{ ...t.typography.body.normal, color: t.colors.text.secondary, paddingLeft: '20px', margin: 0 }}>
                    <li>Design tokens (color, typography, spacing)</li>
                    <li>Component hierarchy and boundaries</li>
                    <li>Opinionated constraints to prevent uncontrolled variation</li>
                  </ul>
                )
              },
              {
                step: "Step 2: Design-to-Code Foundation",
                video: BitClound,
                link: "https://joyjantiwaa.github.io/lookmix-design-system/",
                content: (
                  <>
                    <p style={{ ...t.typography.body.small, fontWeight: 'bold', marginBottom: '12px' }}>Tech Stack: Bit.cloud, JS, Flutter, Storybook</p>
                    <ul style={{ ...t.typography.body.normal, color: t.colors.text.secondary, paddingLeft: '20px', margin: 0 }}>
                      <li>Token consistency & Component API clarity</li>
                      <li>Visual parity between design and code</li>
                      <li>Validated cross-platform feasibility (2-month focus)</li>
                    </ul>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                      <Button variant="primary" size="sm" onClick={() => window.open('https://g1lvpsgb.preview.v2.bit.cloud/api/bitdev.react/react-env@4.1.36/~aspect/env-template/compositions/?compId=jpjoy.design/jpjoy-theme@e120604183278ef6ae56b04c9b082470bae9868d#jpjoy.design/jpjoy-theme@e120604183278ef6ae56b04c9b082470bae9868d?preview=compositions&name=LightTheme', '_blank')}>Bit.clound Docs</Button>
                      <Button variant="tertiary" size="sm" onClick={() => window.open('https://joyjantiwaa.github.io/lookmix-design-system/', '_blank')}>Storybook Docs</Button>
                    </div>
                  </>
                )
              },
              {
                step: "Step 3: Real Usage Validation",
                video: TestApp,
                link: "https://joyjantiwaa.github.io/lookmix_app/",
                content: (
                  <>
                    <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary }}>
                      Tested through application screens and functional interfaces to surface:
                    </p>
                    <ul style={{ ...t.typography.body.small, color: t.colors.text.secondary, paddingLeft: '20px', margin: 0 }}>
                      <li>Missing interaction states & Edge cases</li>
                      <li>Versioning and backward compatibility challenges</li>
                    </ul>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                      <Button variant="primary" size="sm" onClick={() => window.open('https://joyjantiwaa.github.io/lookmix_app/', '_blank')}>App Demo</Button>
                      <Button variant="tertiary" size="sm" onClick={() => window.open('https://my-web-project-virid.vercel.app/', '_blank')}>Marketing Website</Button>
                    </div>
                  </>
                )
              },
              {
                step: "Step 4: Public Distribution",
                video: Npm,
                link: "https://pub.dev/packages/lookmix_design_system",
                isLast: true,
                content: (
                  <>
                    <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary }}>
                      Published on <strong>npm</strong> and <strong>pub.dev</strong> to validate:
                    </p>
                    <div style={{ display: 'flex', gap: '20px', margin: '16px 0' }}>
                      <div><span style={{ fontSize: '20px', fontWeight: 'bold', color: t.colors.hilight.normal }}>125/ 160</span><br/><small>Quality Score</small></div>
                      <div><span style={{ fontSize: '20px', fontWeight: 'bold', color: t.colors.hilight.normal }}>Scalable</span><br/><small>Infrastructure</small></div>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', marginTop: '24px' }}>
                      <Button variant="primary" size="sm" onClick={() => window.open('https://www.npmjs.com/package/@jpjoy-lookmix/lookmix-design-system', '_blank')}>Javascript Docs</Button>
                      <Button variant="tertiary" size="sm" onClick={() => window.open('https://pub.dev/packages/lookmix_design_system', '_blank')}>Flutter Docs</Button>
                    </div>
                  </>
                )
              }
            ].map((item, idx) => (
              <div key={idx} style={{ 
                display: 'grid', 
                gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr', 
                gap: '48px', 
                alignItems: 'center' 
              }}>
                {/* Left: Video 4:3 */}
                <div 
                  onClick={() => window.open(item.link, '_blank')}
                  style={{ 
                    aspectRatio: '16/9', 
                    borderRadius: '24px', 
                    overflow: 'hidden', 
                    cursor: 'pointer',
                    position: 'relative',
                  }}
                >
                  <video src={item.video} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ 
                    position: 'absolute', top: '16px', right: '16px', 
                  }}>
                    <Icon icon="mdi:link-variant" style={{ color: '#fff' }} />
                  </div>
                </div>

                {/* Right: Text Content */}
                <div>
                  <h4 style={{ ...t.typography.heading.h4, color: t.colors.hilight.normal, marginBottom: '20px' }}>{item.step}</h4>
                  <div>
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
            
          </div>
        </motion.div>
      </section>

      {/* --- 07. MONETIZATION STRATEGY --- */}
      <section style={{ ...sectionWrap, color: t.colors.text.primary }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ ...t.typography.label.normal, color: t.colors.hilight.normal }}>05 / BUSINESS STRATEGY</span>
            <h2 style={{ ...t.typography.heading.h2, color: t.colors.text.primary, marginTop: '16px' }}>Monetization Strategy (UX-Driven)</h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '60px' }}>
            {/* Left: User Value */}
            <div>
              <h3 style={{ ...t.typography.heading.h4, color: t.colors.hilight.normal,marginBottom: '32px' }}>User Revenue Model</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                  <h5 style={{ margin: '0 0 8px 0' }}>Subscription & Marketplace</h5>
                  <p style={{ ...t.typography.body.normal, color: '#aaa', marginBottom: '40px' }}>Low-cost monthly models with affiliate integration.</p>
                </div>
                <div style={{ backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: '16px' }}>
                  <h5 style={{ margin: '0 0 8px 0' }}>Wardrobe Context</h5>
                  <p style={{ ...t.typography.body.normal, color: '#aaa', margin: 0 }}>Try outfits virtually before purchasing, using real personal inventory.</p>
                </div>
              </div>
            </div>

            {/* Right: Brand Value */}
            <div style={{ borderLeft: isMobile ? 'none' : '1px solid rgba(255,255,255,0.1)', paddingLeft: isMobile ? 0 : '60px' }}>
              <h3 style={{ ...t.typography.heading.h4, color: t.colors.background.primary, marginBottom: '32px' }}>Brand Benefits</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <div style={{ padding: '16px', backgroundColor: t.colors.hilight.normal,borderRadius: '12px' }}>
                    <Icon icon="mdi:trending-up" width="32" color="#ffffff" />
                  </div>
                  <div>
                    <h5 style={{ margin: '0 0 4px 0' }}>Higher Conversion Rates</h5>
                    <p style={{ ...t.typography.body.small, color: '#888' }}>Confidence in fit and style leads to faster purchase decisions.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
                  <div style={{ padding: '16px', backgroundColor: '#333', borderRadius: '12px' }}>
                    <Icon icon="mdi:package-variant-minus" width="32" color="#ffffff" />
                  </div>
                  <div>
                    <h5 style={{ margin: '0 0 4px 0' }}>Lower Return Rates</h5>
                    <p style={{ ...t.typography.body.small, color: '#888' }}>Virtual visualization reduces mismatch between expectation and reality.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
      

      {/* --- 09. REFLECTION & GROWTH --- */}
      <section style={{ ...sectionWrap, backgroundColor: t.colors.background.primary, color: t.colors.text.primary }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp}>
          <div>
            <span style={{ 
              ...t.typography.label.normal, 
              color: t.colors.hilight.normal,
              display: 'block', 
              marginBottom: '24px',
              letterSpacing: '2px'
            }}>
              06 / REFLECTION
            </span>
            
            <h2 style={{ 
              ...t.typography.display, 
              marginBottom: '48px'
            }}>
              Beyond the screen,<br/>
              it’s about <span style={{ color: t.colors.hilight.normal }}>System Thinking</span>
            </h2>

            <p style={{ ...t.typography.heading.h6, fontWeight: '400', color: t.colors.text.secondary, marginBottom: '60px', lineHeight: '1.6' }}>
              This project fundamentally reshaped my perspective on UX. It reinforced that great design isn't just about aesthetics, but the perfect equilibrium between:
            </p>

            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)', 
              gap: '40px',
              borderTop: '1px solid #eee',
              paddingTop: '60px'
            }}>
              <div>
                <h5 style={{ fontWeight: '700', marginBottom: '12px' }}>Real Constraints</h5>
                <p style={{ ...t.typography.body.small, color: t.colors.text.secondary }}>Technical feasibility within budget and infrastructure constraints.</p>
              </div>
              <div>
                <h5 style={{ fontWeight: '700', marginBottom: '12px' }}>Maintainability</h5>
                <p style={{ ...t.typography.body.small, color: t.colors.text.secondary }}>Long-term system maintainability and scalability.</p>
              </div>
              <div>
                <h5 style={{ fontWeight: '700', marginBottom: '12px' }}>Alignment</h5>
                <p style={{ ...t.typography.body.small, color: t.colors.text.secondary }}>Alignment between Design, Engineering, and Business Objectives.</p>
              </div>
            </div>

            <blockquote style={{ 
              marginTop: '80px', 
              paddingLeft: '32px', 
              borderLeft: `4px solid ${t.colors.hilight.normal}`,
              fontSize: '24px',
              fontWeight: '500',
              fontStyle: 'italic',
              color: t.colors.text.primary
            }}>
              "LookMix was a pivotal turning point, evolving my expertise from screen-level design to comprehensive, system-level product thinking."
            </blockquote>
          </div>
        </motion.div>
      </section>

      {/* --- ส่วนท้าย: การนำทาง (FOOTER) --- */}
      <footer style={{ ...sectionWrap, backgroundColor: t.colors.background.primary }}>
        <div style={{ 
          borderTop: `1px solid ${t.colors.text.tertiary}22`, 
          paddingTop: isMobile ? '60px' : '100px', 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', // มือถือเอาวิดีโอไว้ล่างหรือบนตามความเหมาะสม
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: isMobile ? 'center' : 'left',
          gap: isMobile ? '40px' : '80px'
        }}>
          
          {/* Left Side: Content */}
          <div style={{ flex: 1, maxWidth: isMobile ? '100%' : '500px' }}>
            <p style={{ ...t.typography.label.normal, color: t.colors.hilight.normal, letterSpacing: '2px', marginBottom: '12px' }}>
              PREVIOUS PROJECT
            </p>
            <h2 style={{ ...t.typography.heading.h1, marginBottom: '20px' }}>
              STUDENT PORTAL
            </h2>
            <p style={{ ...t.typography.body.normal, marginBottom: '40px', color: t.colors.text.secondary, opacity: 0.8 }}>
              A comprehensive learning management system designed for seamless knowledge distribution and tracking.
            </p>
            <Button variant="primary" size='sm' onClick={() => navigate('/student-portal')}>
              View Project Details
            </Button>
          </div>

          {/* Right Side: Video Preview */}
          <motion.div 
            whileHover={{ y: -10 }} // เปลี่ยนจาก Scale เป็นลอยขึ้นเบาๆ จะดูแพงกว่า
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            style={{ 
              flex: 1.2, 
              width: '100%',
              display: 'flex', 
              justifyContent: isMobile ? 'center' : 'flex-start', 
              alignItems: 'center', 
              cursor: 'pointer',
              perspective: '1000px' // เพิ่มมิติสำหรับแอนิเมชัน
            }} 
            onClick={() => navigate('/next-project')}
          >
            <div style={{ 
              width: '100%',
              maxWidth: isMobile ? '100%' : '640px', // คุมขนาดในคอมไม่ให้ใหญ่ล้น
              aspectRatio: '16/9', 
              borderRadius: isMobile ? '16px' : '32px', 
              overflow: 'hidden', 
              boxShadow: `0 40px 80px rgba(0,0,0,0.15)`, 
              border: `1px solid ${t.colors.text.tertiary}33`, // ขอบบางๆ แบบ Glassmorphism
              backgroundColor: '#000',
              position: 'relative'
            }}>
              {/* แผ่นสะท้อนแสงบนกระจก (Overlay) เพื่อความสมจริง */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                background: 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%)',
                pointerEvents: 'none',
                zIndex: 1
              }} />
              
              <video 
                src={LookMixVideo} 
                autoPlay 
                loop 
                muted 
                playsInline 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  display: 'block', 
                  pointerEvents: 'none' 
                }} 
              />
            </div>
          </motion.div>
        </div>
      </footer>

      {/* --- IMAGE LIGHTBOX OVERLAY --- */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)} // คลิกพื้นที่ว่างเพื่อปิด
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0,0,0,0.9)', // พื้นหลังดำโปร่งแสง
              zIndex: 5000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'zoom-out',
              padding: isMobile ? '20px' : '40px',
              backdropFilter: 'blur(10px)'
            }}
          >
            <motion.img
              src={activeImage}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                borderRadius: '12px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                objectFit: 'contain'
              }}
            />
            
            {/* ปุ่มปิดมุมขวาบน */}
            <div style={{ position: 'absolute', top: '30px', right: '30px', color: '#fff', cursor: 'pointer' }}>
              <Icon icon="mdi:close" width="32" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    
  );
};

export default LookMixApp;
