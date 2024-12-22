module.exports = {
  // mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFC300',
          light: '#FFB555',
          darker: '#cb7056',
          text: 'white',
          lightest: '#f0beaf',
        },
        secondary: {
          DEFAULT: '#233D4D',
          light: '#85dcb',
          darker: '#3aa192',
          text: 'white',
          lightest: '#ecf7f5',
        },
        muted: {
          DEFAULT: '#E5E7EB',
          light: '#F3F4F6',
          darker: '#D1D5DB',
          text: '#555b66',
        },
      },
      screens: {
        custom: '1280px',
      },
      fontFamily: {
        jakarta: ['var(--font-plus-jakarta-sans)'],
      },
    },
  },
  variants: {
    extend: {
      // ...
      ringWidth: ['hover', 'active'],
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /(bg|text)-(primary|secondary|muted)/,
    },
  ],
};
