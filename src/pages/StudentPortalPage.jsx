import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { tokens } from '../styles/theme';
import { Button, Menubar } from '../components/DesignSystem';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';
import Problems from '../assets/problems.svg';
import SiApp from '../assets/Si-Application3.mp4';
import LookMix from '../assets/LookMix.mp4';
import cover1 from '../assets/cover1.jpg';
import DesignProcess1 from'../assets/DesignProcess1.jpg';
import SiteMap from'../assets/Site_map.jpg';
import Competitor from'../assets/Competitor_Analysis.jpg';
import Persona from'../assets/Persona.jpg';
import UserFlow from '../assets/UserFlow.jpg'


const CaseStudyPortal = () => {
  const t = tokens;
  const navigate = useNavigate();

  const [isZoomed, setIsZoomed] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const fUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const sectionWrap = { padding: '100px 10%', maxWidth: '1440px', margin: '0 auto' };
  const labelStyle = { ...t.typography.label.normal, color: t.colors.text.reverse, marginBottom: '12px', display: 'block' };

  return (
    <div style={{ backgroundColor: t.colors.background.primary, color: t.colors.text.primary, minHeight: '100vh' }}>
      
      {/* --- CSS FOR CUSTOM SCROLLBAR --- */}
      <style>
        {`
          ::-webkit-scrollbar { width: 10px; }
          ::-webkit-scrollbar-track { background: #fff; }
          ::-webkit-scrollbar-thumb { background: #444; border-radius: 10px; border: 2px solid #121212; }
          ::-webkit-scrollbar-thumb:hover { background: #666; }
          html { scrollbar-width: thin; scrollbar-color: #444 #121212; }
        `}
      </style>

      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveImage(null)}
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.95)',
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: 'zoom-out',
              padding: '24px'
            }}
          >
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={activeImage}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '16px'
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>

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
      
      {/* --- ZOOM OVERLAY (MODAL) --- */}
      <AnimatePresence>
        {isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsZoomed(false)} // คลิกตรงไหนก็ได้เพื่อปิด
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              backgroundColor: 'rgba(0,0,0,0.95)',
              zIndex: 5000,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'zoom-out',
              padding: '20px'
            }}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              src={cover1}
              style={{
                maxWidth: '100%',
                maxHeight: '100%',
                objectFit: 'contain',
                borderRadius: '12px',
                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
              }}
            />
            {/* ปุ่มปิดมุมขวา */}
            <div style={{ position: 'absolute', top: '30px', right: '30px', color: '#fff', cursor: 'pointer' }}>
              <Icon icon="mdi:close" style={{ fontSize: '32px' }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- TOP IMAGE SECTION (MODIFIED) --- */}
      <section 
        onClick={() => setIsZoomed(true)} // คลิกเพื่อซูม
        style={{ 
          width: '100%', 
          height: isMobile ? 'auto' : '450px', 
          overflow: 'hidden', 
          backgroundColor: '#000',
          cursor: 'zoom-in', // เปลี่ยน cursor เป็นรูปแว่นขยาย
          position: 'relative'
        }}
      >
        <motion.img 
                  src={cover1}
                  alt="Si-application Cover"
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

      {/* --- HERO SECTION --- */}
      <motion.section initial="hidden" animate="visible" style={{ ...sectionWrap, paddingTop: '100px' }}>
        <motion.span variants={fUp} style={{ ...t.typography.label.normal, color: t.colors.hilight.normal }}>CASE STUDY: STUDENT PORTAL</motion.span>
        <motion.h1 variants={fUp} style={{ ...t.typography.heading.h1, marginBottom: '40px' }}>
          <span style={{ ...t.typography.heading.h1, display: 'block' }}>Designing an Overseas Application System</span>
          <span style={{ fontSize: isMobile ? '24px' : '32px', fontWeight: 300, opacity: 0.8 }}>Under Technical and Engineering Constraints</span>
        </motion.h1>

        <motion.div variants={fUp} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', borderTop: `1px solid ${t.colors.text.tertiary}44`, paddingTop: '40px', marginBottom: '60px' }}>
          <div>
            <p style={{ ...t.typography.body.large, color: t.colors.text.tertiary }}>Role & Scope</p>
            <p style={t.typography.body.large}>UX/UI Designer · Design System · System UX Flows</p>
          </div>
          <div>
            <p style={{ ...t.typography.body.large, color: t.colors.text.tertiary }}>Outcome</p>
            <p style={t.typography.body.large}>70% reused as core template, accelerating new team onboarding</p>
          </div>
          <div>
          <p style={{ ...t.typography.label.large, color: t.colors.text.tertiary, marginBottom: '16px' }}>Tech Stack</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            {[
              { name: "Figma", icon: "logos:figma" },
              { name: "Photoshop", icon: "logos:adobe-photoshop" },
              { name: "Illustrator", icon: "logos:adobe-illustrator" },
              { name: "VS Code", icon: "vscode-icons:file-type-vscode" },
              { name: "ChatGPT", icon: "logos:openai-icon" },
              { name: "Gemini", icon: "logos:google-gemini" },
              { name: "Material UI", icon: "logos:material-ui" }, 
              { name: "Ant Design", icon: "logos:ant-design" }
            ].map((tool, idx) => (
              <div 
                key={idx} 
                title={tool.name}
                style={{ 
                  width: '42px', 
                  height: '42px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  backgroundColor: t.colors.background.secondary, 
                  ...t.effects.glass,
                  borderRadius: '12px',
                  border: `1px solid ${t.colors.text.tertiary}22`,
                  transition: 'transform 0.2s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <Icon 
                  icon={tool.icon} 
                  style={{ fontSize: '24px' }} 
                />
              </div>
            ))}
          </div>
        </div>
        </motion.div>

        <motion.div variants={fUp} style={{ display: 'flex', gap: '16px' }}>
          <Button variant="primary" size="sm" iconName="computer" onClick={() => window.open('https://github.com', '_blank')}>Code-to-design</Button>
          <Button variant="primary" size="sm" iconName="palette" onClick={() => window.open('https://figma.com', '_blank')}>View Figma</Button>
        </motion.div>
      </motion.section>

      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp} style={sectionWrap}>
        <div style={{ width: '100%', minHeight: '300px',}}>
          <img 
          src={DesignProcess1} 
          alt="Design Process" 
          onClick={() => setActiveImage(DesignProcess1)}
          style={{ width: '100%', cursor: 'zoom-in' }}
        />
        </div>
      </motion.section>
      
      {/* --- CONTEXT & CHALLENGE REDESIGN --- */}
      <section style={{ ...sectionWrap, backgroundColor: '#ffffff', color: '#191919' }}>
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
            01 / context & challenge
          </span>

          {/* 2. Display Quote / Impact Statement */}
          <h2 style={{ 
            ...t.typography.display, 
            color: '#191919', 
            lineHeight: '1.1',
            margin: '0 0 40px 0',
            maxWidth: '1000px'
          }}>
            <span style={{ display: 'block' }}>From fragmented tracking</span>
            to a <span style={{ color: t.colors.hilight.normal }}>unified foundation</span>
          </h2>

          {/* 3. Intro Text: เล่าถึงปัญหาในภาพกว้าง */}
          <p style={{ 
            ...t.typography.heading.h6, 
            color: t.colors.text.secondary, 
            marginBottom: '80px',
            fontWeight: '400',
            lineHeight: '1.6',
            maxWidth: '850px' 
          }}>
            The Student Portal wasn't just a new feature; it was a mission to bridge the gap between students and their futures. 
            We faced a legacy of <strong style={{ color: '#000' }}>manual tracking</strong> and <strong style={{ color: '#000' }}>technical debt</strong> that hindered global education opportunities.
          </p>

          {/* 4. Challenge Grid: แบ่งเป็น 2 ฝั่งเหมือนตัวอย่างที่คุณให้มา */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : '1.2fr 0.8fr', 
            gap: '80px',
            borderTop: `1px solid ${t.colors.text.secondary}33`,
            paddingTop: '60px'
          }}>
            
            {/* ฝั่งซ้าย: ลงรายละเอียดปัญหา */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              <div>
                <h4 style={{ ...t.typography.heading.h6, color: t.colors.hilight.normal, marginBottom: '16px', textTransform: 'uppercase', fontSize: '14px' }}>
                  The Operational Chaos
                </h4>
                <p style={{ ...t.typography.body.large, color: '#191919', marginBottom: '12px' }}>
                  <span style={{ ...t.typography.display, fontSize: '20px', display: 'inline' }}>Counselors were drowning</span> in manual data entry.
                </p>
                <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary }}>
                  Without a centralized system, tracking application statuses across multiple institutions was a game of spreadsheets and emails, leading to high error rates and delayed offers.
                </p>
              </div>

              <div>
                <h4 style={{ ...t.typography.heading.h6, color: t.colors.hilight.normal, marginBottom: '16px', textTransform: 'uppercase', fontSize: '14px' }}>
                  The Technical Debt
                </h4>
                <p style={{ ...t.typography.body.large, color: '#191919', marginBottom: '12px' }}>
                  <span style={{ ...t.typography.display, fontSize: '20px', display: 'inline' }}>Fragmented development</span> by freelance teams.
                </p>
                <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary }}>
                  The absence of a design system led to a "Frankenstein UI"—inconsistent components that were difficult to scale, maintain, or trust for production-level stability.
                </p>
              </div>
            </div>

            {/* ฝั่งขวา: แสดง Image/Visual ของ Problems */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'center', 
              alignItems: 'flex-start',
              backgroundColor: '#f8f9fa', // ใส่พื้นหลังอ่อนๆ ให้ภาพดูเด่นขึ้น
              borderRadius: '24px',
              padding: '40px'
            }}>
              <img 
                src={Problems} 
                alt="Core Problems Analysis" 
                style={{ 
                  width: '100%', 
                  height: 'auto', 
                  maxWidth: '300px', // คุมขนาดไม่ให้ใหญ่เกินไปในจอ Desktop
                  display: 'block' 
                }} 
              />
            </div>

          </div>
        </motion.div>
      </section>

      {/* --- MY ROLE & RESPONSIBILITIES --- */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp} style={{ ...sectionWrap, backgroundColor: '#ffffff' }}>
        <h2 style={{ ...t.typography.heading.h2, marginBottom: '40px' }}>My Role & Responsibilities</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
          {[
            { title: "UX Strategy", desc: "Defined high-level UX strategies and established information architecture." },
            { title: "Workflow Design", desc: "Redesigned end-to-end user workflows from scratch." },
            { title: "Standards", desc: "Created reusable component standards aligned with engineering constraints." },
            { title: "Engineering Alignment", desc: "Collaborated closely with the CTO to evaluate technical feasibility and trade-offs." },
            { title: "Implementation", desc: "Ensured design decisions were accurately translated into Front-end code." }
          ].map((item, idx) => (
            <div key={idx} style={{ 
              padding: '32px', 
              backgroundColor: t.colors.background.secondary, 
              ...t.effects.glass,
              borderRadius: '24px'
            }}>
              <h4 style={{ 
                ...t.typography.heading.h6, 
                color: t.colors.text.primary,
                marginBottom: '12px'
              }}>
                {item.title}
              </h4>
              <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* --- UX/UI RESEARCH --- */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp} style={sectionWrap}>
        <div>
          <motion.span variants={fUp} style={{ ...t.typography.label.normal, color: t.colors.hilight.normal }}>RESEARCH METHODOLOGY</motion.span>
          <h2 style={{ ...t.typography.heading.h2, marginBottom: '60px'}}>Understanding Student Needs Before System Architecture</h2>
          <div style={{ width: '100%', minHeight: '300px' }}>
          <img 
            src={Persona} 
            alt="User Persona" 
            onClick={() => setActiveImage(Persona)}
            style={{ width: '100%', cursor: 'zoom-in' }}
          />
          </div>
          <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary, marginTop: '60px' }}>
            <span style={{ ...t.typography.display, fontSize: '24px', display: 'inline', color: t.colors.text.primary }}>Our analysis revealed a critical need</span> for a continuous communication channel with counselors. Many students were confused by the multi-step process and required close guidance to ensure their applications weren't rejected.
          </p>
        </div>  
      </motion.section>

      {/* ---COMPETITOR ANALYSIS --- */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp} style={sectionWrap}>
        <div>
          <h2 style={{ ...t.typography.heading.h2, marginBottom: '60px' }}>Competitor Analysis</h2>
          <div style={{ width: '100%', minHeight: '300px' }}>
          <img 
            src={Competitor} 
            alt="Competitor Analysis" 
            onClick={() => setActiveImage(Competitor)}
            style={{ width: '100%', cursor: 'zoom-in' }}
          />
          </div>
          <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary, marginTop: '60px' }}>
            <span style={{ ...t.typography.display, fontSize: '24px', display: 'inline', color: t.colors.text.primary }}>Competitors lacked detailed</span> application tracking systems, with the exception of ApplyBoard, which provides a comprehensive self-service tracking portal for students.
          </p>
        </div>
        
      </motion.section>

      {/* --- USER FLOW & SITE MAP --- */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp} style={sectionWrap}>
        <div>
          <h2 style={{ ...t.typography.heading.h2, marginBottom: '60px' }}>User Flow</h2>
          <div style={{ width: '100%', minHeight: '300px' }}>
          <img 
            src={UserFlow} 
            alt="User Flow" 
            onClick={() => setActiveImage(UserFlow)}
            style={{ width: '100%', cursor: 'zoom-in' }}
          />
          </div>
          <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary, marginTop: '60px' }}>
            <span style={{ ...t.typography.display, fontSize: '24px', display: 'inline', color: t.colors.text.primary }}>Designed for ease of use</span>, allowing students to save courses in a wishlist. Based on CTO briefs, we found counselors couldn't close deals because of missing documents. Thus, the flow was designed to mandate complete documentation before an application could be submitted.
          </p>
        </div>
      </motion.section>

      {/* --- SITE MAP --- */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp} style={sectionWrap}>
        <div>
          <h2 style={{ ...t.typography.heading.h2, marginBottom: '60px' }}>Site Map</h2>
          <div style={{ width: '100%', minHeight: '300px' }}>
          <img 
            src={SiteMap} 
            alt="Site Map" 
            onClick={() => setActiveImage(SiteMap)}
            style={{ width: '100%', cursor: 'zoom-in' }}
          />
          </div>
          <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary, marginTop: '60px' }}>
            Organized to let students easily browse courses, universities, or events of interest while tracking their applications systematically.
          </p>
        </div>
      </motion.section>

      {/* --- DIAGNOSIS & KEY INSIGHTS --- */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp} style={sectionWrap}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <motion.span variants={fUp} style={{ ...t.typography.label.normal, color: t.colors.hilight.normal, letterSpacing: '2px' }}>ROOT CAUSE ANALYSIS</motion.span>
            <h2 style={{ ...t.typography.heading.h2, marginTop: '16px' }}>The 3-Month Challenge</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr 1fr', gap: '24px' }}>
            {[
              { id: '01', title: 'Data Misalignment', desc: 'UX flows did not match actual data complexity, leading to frequent user errors.' },
              { id: '02', title: 'System Debt', desc: 'Inconsistent components caused exponential growth in development and maintenance costs.' },
              { id: '03', title: 'Technical Friction', desc: 'Legacy Material UI implementation hindered performance for data-heavy views.' }
            ].map((item) => (
              <motion.div 
                key={item.id} 
                whileHover={{ y: -10 }} 
                style={{ 
                  padding: '40px 32px', 
                  backgroundColor: t.colors.background.secondary, 
                  ...t.effects.glass,
                  borderRadius: '24px', 
                  border: `1px solid ${t.colors.text.tertiary}22`, 
                  position: 'relative', 
                  overflow: 'hidden' 
                }}
              >
                <div style={{ fontSize: '48px', fontWeight: 'bold', color: `${t.colors.text.reverse}11`, position: 'absolute', top: '20px', right: '20px' }}>{item.id}</div>
                <h4 style={{ ...t.typography.heading.h6, color: t.colors.text.primary, marginBottom: '16px', position: 'relative' }}>{item.title}</h4>
                <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary, lineHeight: '1.6' }}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* --- STRATEGIC DECISION: THE PIVOT --- */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp} style={{ ...sectionWrap, backgroundColor: '#ffffff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '60px' }}>
            <motion.span variants={fUp} style={{ ...t.typography.label.normal, color: t.colors.text.reverse, letterSpacing: '2px' }}>STRATEGIC PIVOT</motion.span>
            <h2 style={{ ...t.typography.heading.h2, marginTop: '16px' }}>Strategic Adjustments</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', gap: '60px', alignItems: 'stretch' }}>
            <div style={{ 
              flex: 1, 
              backgroundColor: t.colors.background.secondary, 
              ...t.effects.glass,
              padding: '40px', 
              borderRadius: '24px', 
              borderLeft: `4px solid #E63946` 
            }}>
              <h4 style={{ ...t.typography.heading.h6, color: '#E63946', marginBottom: '20px' }}>Initial Challenges</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#E63946', fontWeight: 'bold' }}>✕</span>
                  <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary, margin: 0 }}>Actual production screens deviated significantly from design goals.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#E63946', fontWeight: 'bold' }}>✕</span>
                  <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary, margin: 0 }}>Over-customization of MUI slowed development and made the system fragile.</p>
                </div>
              </div>
            </div>
            <div style={{ 
              flex: 1, 
              backgroundColor: t.colors.background.secondary, 
              ...t.effects.glass,
              padding: '40px', 
              borderRadius: '24px', 
              borderLeft: `4px solid #2A9D8F` 
            }}>
              <h4 style={{ ...t.typography.heading.h6, color: '#2A9D8F', marginBottom: '20px' }}>Strategic Solution</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#2A9D8F', fontWeight: 'bold' }}>✓</span>
                  <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary, margin: 0 }}>Restructured pages and implemented Ant Design to enforce standards across freelance teams.</p>
                </div>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#2A9D8F', fontWeight: 'bold' }}>✓</span>
                  <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary, margin: 0 }}>Consulted with CTO to switch libraries instead of fighting legacy components.</p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: '40px', textAlign: 'center', padding: '32px', border: `1px dashed ${t.colors.text.secondary}44`, borderRadius: '16px' }}>
            <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary }}>
              <span style={{ color: t.colors.text.secondary }}>Note:</span> Used high-fidelity prototypes to align this direction with the CTO and CEO, ensuring decisions were based on "Scalability".
            </p>
          </div>
        </div>
      </motion.section>

      {/* --- DESIGN ARTIFACT (Figma Embed) --- */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fUp} 
        style={{ ...sectionWrap, backgroundColor: '#ffffff' }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <motion.span variants={fUp} style={{ ...t.typography.label.normal, color: t.colors.text.reverse, letterSpacing: '2px' }}>
              DESIGN ARTIFACT
            </motion.span>
            <h2 style={{ ...t.typography.heading.h2, marginTop: '16px' }}>
              High-Fidelity Design System
            </h2>
          </div>

          <div style={{ 
            width: '100%', 
            borderRadius: '24px', 
            overflow: 'hidden', 
          }}>
            <iframe 
              style={{ border: 'none', display: 'block' }} 
              width="100%" 
              height={isMobile ? "400" : "600"}
              src="https://embed.figma.com/design/xv8aaA7LfzkzJC3OWyuqer/si-applications.com?node-id=180545-216134&embed-host=share" 
              allowFullScreen
            ></iframe>
          </div>

          <p style={{ ...t.typography.body.small, color: t.colors.text.tertiary, marginTop: '16px', textAlign: 'center' }}>
            💡 You can zoom and pan to explore details directly within this Figma file.
          </p>

        </div>
      </motion.section>

      {/* --- INTERACTIVE PROTOTYPE SECTION --- */}
      <motion.section 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true }} 
        variants={fUp} 
        style={{ ...sectionWrap, backgroundColor: '#ffffff', borderTop: `1px solid ${t.colors.text.tertiary}22` }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '40px' }}>
            <motion.span variants={fUp} style={{ ...t.typography.label.normal, color: t.colors.text.reverse, letterSpacing: '2px' }}>
              USER INTERACTION
            </motion.span>
            <h2 style={{ ...t.typography.heading.h2, marginTop: '16px' }}>
              Interactive Prototype
            </h2>
            <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary, marginTop: '12px' }}>
              Test the end-to-end application flow, including the university search, course selection, and document upload system.
            </p>
          </div>

          <div style={{ 
            width: '100%', 
            borderRadius: '24px', 
            overflow: 'hidden', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
            border: `1px solid ${t.colors.text.tertiary}22`,
            backgroundColor: '#f8f9fa'
          }}>
            <iframe 
              style={{ border: 'none', display: 'block' }} 
              width="100%" 
              height={isMobile ? "500" : "700"}
              src="https://embed.figma.com/proto/xv8aaA7LfzkzJC3OWyuqer/si-applications.com?node-id=181006-231684&scaling=scale-down&content-scaling=fixed&page-id=180553%3A299721&starting-point-node-id=181006%3A231684&embed-host=share" 
              allowFullScreen
            ></iframe>
          </div>

          <div style={{ 
            marginTop: '24px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '8px',
            color: t.colors.text.tertiary 
          }}>
            <Icon icon="mdi:mouse-left-click" style={{ fontSize: '20px' }} />
            <p style={{ ...t.typography.body.small, margin: 0 }}>
              Click anywhere on the prototype to see blue hotspots for navigation.
            </p>
          </div>
        </div>
      </motion.section>

      {/* --- FEASIBILITY VIDEO SECTION --- */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp} style={{ ...sectionWrap, backgroundColor: t.colors.background.primary }}>
        <h2 style={{ ...t.typography.heading.h2, marginBottom: '40px', color: t.colors.text.primary }}>From Design to Production Code</h2>
        <div style={{ width: '100%', overflow: 'hidden'}}>
          <video src={SiApp} autoPlay loop muted playsInline style={{ width: '100%', display: 'block', pointerEvents: 'none' }} />
        </div>
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginTop: '40px'
        }}>
          <Button 
            variant="primary" 
            iconName="computer" 
            onClick={() => window.open('https://github.com', '_blank')}
          >
            Design-to-code
          </Button>
        </div>
      </motion.section>

      {/* --- RESULTS & IMPACT --- */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp} style={sectionWrap}>
        <h2 style={{ ...t.typography.heading.h2, textAlign: 'center', marginBottom: '60px' }}>Results & Impact</h2>
        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', gap: '40px' }}>
          
          {/* Impact 01: Reusability */}
          <div style={{ textAlign: 'center', flex: '1 1 300px' }}>
            <h1 style={{ ...t.typography.display, color: t.colors.hilight.normal, fontSize: isMobile ? '60px' : '100px' }}>~70%</h1>
            <p style={{ ...t.typography.body.large, fontWeight: 600 }}>System Reusability</p>
            <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary, maxWidth: '300px', margin: '12px auto 0' }}>
              Standardized core components to eliminate redundant engineering and design debt.
            </p>
          </div>

          {/* Impact 02: Velocity (The 3X leap you felt) */}
          <div style={{ textAlign: 'center', flex: '1 1 300px' }}>
            <h1 style={{ ...t.typography.display, color: t.colors.hilight.normal, fontSize: isMobile ? '60px' : '100px' }}>3X</h1>
            <p style={{ ...t.typography.body.large, fontWeight: 600 }}>Iteration Velocity</p>
            <p style={{ ...t.typography.body.normal, color: t.colors.text.secondary, maxWidth: '300px', margin: '12px auto 0' }}>
              Accelerated production speed by leveraging a stable design system and architecture.
            </p>
          </div>

        </div>
      </motion.section>
      

      {/* --- REFLECTION & NEXT PROJECT --- */}
      <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fUp} style={{ ...sectionWrap, textAlign: 'center', paddingBottom: '120px' }}>
        <div style={{ marginBottom: '100px' }}>
          <p style={{ ...t.typography.body.large, maxWidth: '800px', margin: '0 auto', fontStyle: 'italic' }}>
            <span style={{ ...t.typography.display, fontSize: isMobile ? '20px' : '28px', color: t.colors.text.primary }}>
            "This project reinforced my belief that great UX is not measured by visual beauty alone, but by operational efficiency under real-world constraints."
            </span>
          </p>
        </div>

        <div style={{ 
          borderTop: `1px solid ${t.colors.text.tertiary}33`, 
          paddingTop: '80px', 
          display: 'flex', 
          flexDirection: isMobile ? 'column' : 'row', 
          alignItems: 'center',
          justifyContent: 'space-between',
          textAlign: isMobile ? 'center' : 'left',
          gap: '60px'
        }}>
          <div style={{ flex: 1 }}>
            <p style={{ ...t.typography.label.normal, color: t.colors.hilight.normal, letterSpacing: '2px' }}>NEXT PROJECT</p>
            <h2 style={{ ...t.typography.heading.h2, marginBottom: '20px' }}>LOOKMIX APP</h2>
            <p style={{ ...t.typography.body.normal, marginBottom: '40px', color: t.colors.text.secondary }}>
              A digital wardrobe and styling platform integrated with AI systems.
            </p>
            <Button variant="primary" size='sm' iconName="computer" onClick={() => navigate('/lookmix-app')}>
              View LookMix Details
            </Button>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} style={{ flex: 1, width: '346px', height: '714px', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }} onClick={() => navigate('/lookmix-app')}>
            <div style={{ height: isMobile ? '380px' : '420px', aspectRatio: '9/16', borderRadius: '24px', overflow: 'hidden', boxShadow: `0 30px 60px rgba(0,0,0,0.1)`, border: `6px solid #1a1a1a` }}>
                <video src={LookMix} autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', pointerEvents: 'none' }} />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default CaseStudyPortal;