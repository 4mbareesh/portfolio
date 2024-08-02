import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'verdant-white': '#fff',
      'verdant-green': '#56966e',
      'verdant-orange': '#dc8c61',
      'verdant-red': '#c4595f',
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
  plugins: [],
}
export default config
