import React from 'react';
import { tokens } from '../styles/theme';
import { Button, Menubar } from '../components/DesignSystem';

const StyleguidePage = () => {
  const sectionStyle = {
    padding: '60px 20px',
    borderBottom: `1px solid ${tokens.colors.text.tertiary}33`,
    display: 'flex',
    flexDirection: 'column',
    gap: '32px'
  };

  const rowStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    alignItems: 'center'
  };

  return (
    <div style={{ backgroundColor: "#f5f5f5", minHeight: '100vh' }}>
      
      {/* 1. ทดสอบ MENUBAR ทั้ง 2 แบบ */}
      <section style={{ height: '200px', position: 'relative', overflow: 'hidden', background: '#191919' }}>
        <p style={{ color: '#fff', padding: '10px 20px', fontSize: '12px' }}>[Preview] Menubar Variant: Primary (ใส - ตัวหนังสือขาว)</p>
        <Menubar variant="primary" />
      </section>

      <section style={{ height: '200px', position: 'relative', overflow: 'hidden', background: '#fff', borderBottom: '1px solid #ddd' }}>
        <p style={{ color: '#191919', padding: '10px 20px', fontSize: '12px' }}>[Preview] Menubar Variant: Secondary (Glass - ตัวหนังสือเข้ม)</p>
        <Menubar variant="secondary" />
      </section>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* 2. ทดสอบ BUTTON: PRIMARY (FANCY) */}
        <div style={sectionStyle}>
          <h2 style={tokens.typography.heading.h2}>1. Button Primary (Fancy Gradient)</h2>
          <p style={tokens.typography.body.normal}>ปุ่มสไตล์หลักที่มี Gradient, Shine effect และเงาซ้อนหลายชั้น</p>
          <div style={rowStyle}>
            <Button variant="primary">Primary Button</Button>
            <Button variant="primary" iconName="rocket">With Icon</Button>
          </div>
        </div>

        {/* 3. ทดสอบ BUTTON: SECONDARY (GLASS) */}
        <div style={sectionStyle}>
          <h2 style={tokens.typography.heading.h2}>2. Button Secondary (Glass Effect)</h2>
          <p style={tokens.typography.body.normal}>ปุ่มกระจกใส 20% + Blur 14.25px ตามที่ระบุใน Effect Glass</p>
          <div style={{ ...rowStyle, backgroundColor: '#191919', padding: '40px', borderRadius: '24px' }}>
            <Button variant="secondary">Glass Button</Button>
            <Button variant="secondary" iconName="arrow_forward">Glass With Icon</Button>
            <span style={{ color: '#fff', fontSize: '12px' }}>(แสดงบนพื้นหลังเข้มเพื่อให้เห็น Glass Effect ชัดเจน)</span>
          </div>
        </div>

        {/* 4. ทดสอบ TYPOGRAPHY */}
        <div style={sectionStyle}>
          <h2 style={tokens.typography.heading.h2}>3. Typography Check</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <h1 style={tokens.typography.display}>Display 96px</h1>
            <h1 style={tokens.typography.heading.h1}>Heading H1 50px</h1>
            <h2 style={tokens.typography.heading.h2}>Heading H2 36px</h2>
            <p style={tokens.typography.body.large}>Body Large 20px - สำหรับคำอธิบายโปรเจกต์</p>
            <p style={tokens.typography.body.normal}>Body Normal 16px - สำหรับเนื้อหาทั่วไป</p>
            <span style={tokens.typography.label.normal}>Label Normal 14px - สำหรับหมวดหมู่หรืองานเล็กๆ</span>
          </div>
        </div>

        {/* 5. ทดสอบ COLORS & EFFECTS */}
        <div style={sectionStyle}>
          <h2 style={tokens.typography.heading.h2}>4. Colors & Effects</h2>
          <div style={rowStyle}>
            <div style={{ 
              width: '150px', height: '100px', backgroundColor: tokens.colors.hilight.normal, 
              borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' 
            }}>Hilight</div>
            
            <div style={{ 
              width: '200px', height: '100px', 
              backgroundColor: tokens.colors.background.secondary, 
              border: `1px solid ${tokens.colors.background.primary}`,
              ...tokens.effects.glass,
              borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}>Glass Card Spec</div>
          </div>
        </div>

      </div>

      <footer style={{ padding: '100px 0', textAlign: 'center', opacity: 0.5 }}>
        Styleguide Test Page Finished
      </footer>
    </div>
  );
};

export default StyleguidePage;