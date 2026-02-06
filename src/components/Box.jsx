import React, { useState, useEffect } from 'react';

export const Box = ({ type = 'md', children, style }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1240);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1240);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getConfig = () => {
    const base = { pTop: 0, pBottom: 0, pSide: 0, gap: 0, pcWidth: 'fill', mobWidth: 'fill' };

    switch (type) {
      case 'lg10':
        return { ...base, pTop: 148, pBottom: 148, gap: 148 };
      case 'lg20':
        return { ...base, pBottom: 148, gap: 148 };
      case 'md':
        // แก้ไข pSide: คอม 56px, มือถือ 32px
        return { ...base, pcWidth: 'fill', pSide: isMobile ? 32 : 56, gap: 48 };
      case 'sm10':
        return { ...base, pcWidth: '1216px', gap: 24 };
      case 'sm20':
        return { ...base, pcWidth: '700px', gap: 24 };
      case 'btn':
        return { ...base, pcWidth: 'hug', mobWidth: 'fill', gap: 12 };
      case 'img':
        return { ...base, pcWidth: '1216px', pSide: 24 }; 
      case 'img20':
        return { ...base, pcWidth: 'hug', mobWidth: 'fill' };
      default:
        return base;
    }
  };

  const config = getConfig();

  const getWidth = () => {
    const targetWidth = isMobile ? config.mobWidth : config.pcWidth;
    if (targetWidth === 'fill') return '100%';
    if (targetWidth === 'hug') return 'fit-content';
    return targetWidth;
  };

  const boxStyle = {
    width: getWidth(),
    maxWidth: '100%', 
    
    // จัดกึ่งกลางอัตโนมัติสำหรับ Fixed Width
    marginLeft: (config.pcWidth !== 'fill' && config.pcWidth !== 'hug') ? 'auto' : '0',
    marginRight: (config.pcWidth !== 'fill' && config.pcWidth !== 'hug') ? 'auto' : '0',

    display: 'flex',
    flexDirection: 'column',
    gap: `${config.gap}px`,
    
    paddingTop: `${config.pTop}px`,
    paddingBottom: `${config.pBottom}px`,
    paddingLeft: `${config.pSide}px`,
    paddingRight: `${config.pSide}px`,
    
    boxSizing: 'border-box',
    ...style 
  };

  return <div style={boxStyle}>{children}</div>;
};