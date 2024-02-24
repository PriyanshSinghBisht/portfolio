import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      animation: {
        toggleSize: '1s toggleSize infinite ease-in-out alternate',
      },
      keyframes:{
        toggleSize:{
          '0%' : {transform: 'scale(1)'},
          '100%': {transform: 'scale(1.05)'}
        }
      }
    },
  },
  plugins: [],
}
export default config
