import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '50px': '50px',
        '500px': '500px',
        '750px': "750px",
        '400px': "400px",
        '20/100': "20%",
        '300/100': "300%",
        '900px': "900px",
        "1200px": "1200px"

      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "oxford-blue": "#0C1B33",
        "ecru": "#C4A77D",
        'antique-white':'#faebd7',
        "orange": "#FF8427",
        'red': "#a30000",
        'charcoal': '#2a3d45',
        'isabeline':'#f9f6f1',
        'twitter-blue': '#26a7de',
        'platinum': "#dde3e3",
        'cerulean': '#41819F',
        'beige': '#EBCEA8',
        'bleu-clair': '#318ce7',
        'buff': "#c89b7b",
        'ash': "#bcc8c8",
        'navajo': "#ffddad",
        'silver': "#c7d1d1",
        'violet': '#282853',
        'light-green': '#d7eadb'
      }
    },
  },
  plugins: [],
}
export default config

