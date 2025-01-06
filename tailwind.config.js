/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        xl: '1300px',
      },
      padding: {
        DEFAULT: '10px',
      }
    },
    fontSize: {
      '12-12-500': ['12px', {
        lineHeight: '12px',
        fontWeight: '500',
      }],
      '12-20-500': ['12px', {
        lineHeight: '20px',
        fontWeight: '500',
      }],
      '14-14-500': ['14px', {
        lineHeight: '14px',
        fontWeight: '500',
      }],
      '14-20-500': ['14px', {
        lineHeight: '20px',
        fontWeight: '500',
      }],
      '16-16-400': ['16px', {
        lineHeight: '16px',
        fontWeight: '400',
      }],
      '16-16-500': ['16px', {
        lineHeight: '16px',
        fontWeight: '500',
      }],
      '16-16-600': ['16px', {
        lineHeight: '16px',
        fontWeight: '600',
      }],
      '16-25-500': ['16px', {
        lineHeight: '25px',
        fontWeight: '500',
      }],
      '20-20-600': ['20px', {
        lineHeight: '20px',
        fontWeight: '600',
      }],
      '22-22-600': ['22px', {
        lineHeight: '22px',
        fontWeight: '600',
      }],
      '24-24-600': ['24px', {
        lineHeight: '24px',
        fontWeight: '600',
      }],
      '32-32-700': ['32px', {
        lineHeight: '32px',
        fontWeight: '700',
      }],
    }
  },
  plugins: [],
}

