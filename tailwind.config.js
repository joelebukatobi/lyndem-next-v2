/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/admin/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/app/**/*.{js,ts,jsx,tsx,mdx}',
    '/node_modules/preline/dist/*.js',
  ],
  //
  theme: {
    screens: {
      xs: '375px',
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    //
    extend: {
      colors: {
        blue: {
          600: '#000199',
          800: '#0D0D6E',
        },
        gray: {
          300: '#F2F2F7',
          400: '#808080',
        },
        orange: {
          600: '#FF6300',
        },
      },
      boxShadow: {
        card: '0 10px 5px 0 rgba(37, 42, 52, 0.08)',
      },
    },
    //
    fontFamily: {
      sans: ['DM Sans', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
    },
  },

  plugins: [require('preline/plugin')],
};
