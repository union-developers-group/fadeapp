module.exports = {
  mode: 'jit',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/layout/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      xxl: ['1.375rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.75rem', { lineHeight: '2.15rem' }],
      '4xl': ['2rem', { lineHeight: '2.5rem' }],
      '5xl': ['2.375rem', { lineHeight: '2.5rem' }],
      '6xl': ['2.5rem', { lineHeight: '3rem' }],
      '7xl': ['3rem', { lineHeight: '1' }],
    },
    extend: {
      fontFamily: {
        sans: 'Roboto, sans-serif',
      },
      colors: {
        primary: '#21E7B6',
        secondary: '#212948',
        gray: {
          500: '#CBC8C8',
          700: '#999991',
        },
      },
      backgroundImage: {
        'gradient-1': 'linear-gradient(180deg, #000006 0%, #212948 100%)',
        'gradient-2':
          'linear-gradient(180deg, rgba(196, 196, 196, 0) 0%, rgba(33, 41, 72, 0.71) 0.01%, rgba(33, 41, 72, 0.5) 37.5%, #212948 72.4%)',
        'gradient-3':
          'linear-gradient(180deg, #3B4571 0%, #212948 84.37%, #000000 99.48%)',
      },
      borderRadius: {
        10: '10px',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.3s ease-out',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
}
