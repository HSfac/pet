import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF6B6B",       // 따뜻한 산호색
        secondary: "#4ECDC4",     // 민트 그린
        accent: "#FFE66D",        // 따뜻한 노란색
        background: "#F7F7F7",    // 밝은 회색
        foreground: "#2C3E50",    // 진한 회색
        white: "#FFFFFF",
        card: "#FFFFFF",
      },
      fontFamily: {
        sans: ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      },
      borderRadius: {
        'pet': '20px',
      },
      boxShadow: {
        'pet': '0 4px 20px rgba(0, 0, 0, 0.1)',
        'pet-hover': '0 8px 30px rgba(0, 0, 0, 0.15)',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config;