import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // สั่งให้หน้าต่างเลื่อนไปที่จุด 0,0 ทุกครั้งที่ pathname (path ของ url) เปลี่ยน
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;