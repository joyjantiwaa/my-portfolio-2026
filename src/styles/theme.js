// src/styles/theme.js
export const tokens = {
  colors: {
    background: {
      primary: "#FFFFFF",
      secondary: "rgba(255, 255, 255, 0.2)", // สีขาว 20% ตามที่คุณระบุ
    },
    text: {
      primary: "#191919",
      secondary: "#747373",
      tertiary: "#C0C0C0",
      reverse: "#FFFFFF", // เพิ่มเพื่อให้รองรับการแสดงผลบนพื้นหลังเข้ม
    },
    hilight: {
      normal: "#9747FF",
    }
  },
  // --- เพิ่มส่วน Effects ตามสเปกของคุณ ---
  effects: {
    glass: {
      // x: 9.5, y: 11.5, blur: 19, color: #000 5%
      boxShadow: "9.5px 11.5px 19px rgba(0, 0, 0, 0.05)",
      // uniform blur: 14.25
      backdropFilter: "blur(14.25px)",
      WebkitBackdropFilter: "blur(14.25px)", // สำหรับ Safari Support
    }
  },
  typography: {
    display: { fontSize: "62px", fontWeight: "800", lineHeight: "65px", letterSpacing: "0" },
    heading: {
      h1: { fontSize: "60px", fontWeight: "700", lineHeight: "62px", letterSpacing: "-2%", margin: 0 },
      h2: { fontSize: "52px", fontWeight: "700", lineHeight: "55px", letterSpacing: "0", margin: 0 },
      h3: { fontSize: "32px", fontWeight: "500", lineHeight: "40px", letterSpacing: "0", margin: 0 },
      h4: { fontSize: "30px", fontWeight: "500", lineHeight: "40px", letterSpacing: "0", margin: 0 },
      h5: { fontSize: "28px", fontWeight: "500", lineHeight: "36px", letterSpacing: "0", margin: 0 },
      h6: { fontSize: "24px", fontWeight: "500", lineHeight: "32px", letterSpacing: "0", margin: 0 },
    },
    body: {
      normal: { fontSize: "16px", fontWeight: "400", lineHeight: "28px", letterSpacing: "0" },
      large: { fontSize: "20px", fontWeight: "400", lineHeight: "32px", letterSpacing: "0" },
    },
    label: {
      normal: { fontSize: "14px", fontWeight: "500", lineHeight: "20px", letterSpacing: "0" },
    }
  }
};