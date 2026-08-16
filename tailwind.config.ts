const config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        indigo: '#1A1633',
        cyan: '#00E5FF',
        purple: '#9D4EDD',
        pink: '#FF006E',
        sage: '#E8F5F0',
        'cool-gray': '#7B8BA8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h3': ['1.875rem', { lineHeight: '1.3', letterSpacing: '0' }],
        'h4': ['1.5rem', { lineHeight: '1.4', letterSpacing: '0' }],
      },
    },
  },
}

export default config
