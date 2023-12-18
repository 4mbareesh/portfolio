import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'verdant-green': '#56966e',
        'verdant-orange': '#dc8c61',
        'verdant-red': '#c14d53',
        'verdant-blue': '#6e95bd',
        'verdant-purple': '#a56db1',
        'verdant-bg': '#0c0c0c',
        'verdant-bg-light': '#131313',
        'verdant-bg-light-2': '#1b1b1b',
        'verdant-bg-light-3': '#272727',
        'verdant-fg': '#dfdddd',
        'verdant-fg-dark': '#b7b7b7',
        'verdant-fg-dark-2': '#a4b5b5',
        'verdant-fg-dark-3': '#5a5858',
      },
    },
  },
  plugins: [],
}
export default config
