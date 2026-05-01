/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        tls: {
          bg: '#0A0A0F',
          card: '#141419',
          accent: '#00F0FF',
          'accent-hover': '#33F5FF',
          text: '#F0F0F5',
          muted: '#8A8A99'
        }
      },
      fontFamily: {
        headline: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif']
      }
    }
  },
  plugins: []
};
