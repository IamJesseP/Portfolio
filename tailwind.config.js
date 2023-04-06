module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'NeueMontreal',
      secondary: 'Montserrat',
      tertiary: 'Aldrich',
      neuemontreal: 'NeueMontreal',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      xs: '300px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#406aff',
      },
      backgroundImage: {
        site: "url('./assets/site-bg1.svg')",
        about: "url('./assets/about.jpg')",
        services: "url('./assets/services.png')",
      },
    },
  },
  plugins: [],
};
