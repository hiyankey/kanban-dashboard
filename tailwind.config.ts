import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      'main-foreground': 'var(--main-foreground)',
      'main-card-foreground': 'var(--main-card-foreground)',
      'hover-color': 'var(--hover-color)',
      heading: 'var(--color-text-heading)',
      body: 'var(--color-text-body)',
      'color-border': 'var(--color-border)',
    },
    fontFamily: {
      sans: ['var(--font-inter-sans)'],
    },
    fontSize: {
      sm: '12px',
      md: '14px',
      lg: '16px',
    },
    borderRadius: {
      md: 'var(--border-radius)',
    },
  },
  plugins: [],
}
export default config
