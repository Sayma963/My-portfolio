/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./main.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        glass: {
          light: 'rgba(255, 255, 255, 0.3)',
          medium: 'rgba(255, 255, 255, 0.4)',
          heavy: 'rgba(255, 255, 255, 0.6)',
        },
        slate: {
          dark: '#1e293b',
          light: '#f1f5f9'
        }
      },
      boxShadow: {
        'glass-sm': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
        'glass': '0 10px 25px -5px rgba(0, 0, 0, 0.05), 0 8px 10px -6px rgba(0, 0, 0, 0.01)',
        'glass-lg': '0 20px 30px -10px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.02)',
      },
      backgroundImage: {
        'gradient-pastel': 'linear-gradient(135deg, #e0c3fc 0%, #fbc2eb 50%, #8ca1fe 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
