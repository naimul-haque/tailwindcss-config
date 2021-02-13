module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    container: {
      center: true,
      padding: '24px',
    },
    extend: {},
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1.50rem' }],
      sm: ['0.875rem', { lineHeight: '1.75rem' }],
      base: ['1rem', { lineHeight: '2rem' }],
      lg: ['1.125rem', { lineHeight: '2.25rem' }],
      xl: ['1.25rem', { lineHeight: '2.25rem' }],
      '2xl': ['1.5rem', { lineHeight: '2.50rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.75rem' }],
      '4xl': ['2.25rem', { lineHeight: '3.25rem' }],
      '5xl': ['3rem', { lineHeight: '1.350' }],
      '6xl': ['3.75rem', { lineHeight: '1.250' }],
      '7xl': ['4.5rem', { lineHeight: '1.150' }],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
