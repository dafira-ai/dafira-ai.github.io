/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';
import colors from 'tailwindcss/colors';

// Dafira "Registre" brand scale — a deep, institutional blue anchored on navy.
// It replaces Tailwind's saturated blue and absorbs the indigo/violet/purple/sky/cyan
// accents used across legacy components, so the whole site stays on one hue.
const brand = {
  50: '#F1F5FA',
  100: '#E2EAF4',
  200: '#C5D5E9',
  300: '#9DB8DA',
  400: '#6592C4',
  500: '#3A72B2',
  600: '#1D5FA6',
  700: '#184E8A',
  800: '#133D6C',
  900: '#0E2238',
  950: '#0A1829',
};

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    // Registre uses tight, near-square corners. Pills (rounded-full) stay for avatars and status dots.
    borderRadius: {
      none: '0',
      sm: '2px',
      DEFAULT: '3px',
      md: '4px',
      lg: '4px',
      xl: '6px',
      '2xl': '6px',
      '3xl': '8px',
      full: '9999px',
    },
    extend: {
      colors: {
        primary: brand[600],
        navy: brand[900],
        ink: '#131A24',
        line: '#D9DEE5',
        surface: '#F6F7F9',
        secondary: '#4B5565',
        blue: brand,
        indigo: brand,
        violet: brand,
        purple: brand,
        sky: brand,
        cyan: brand,
        gray: colors.slate,
      },
      fontFamily: {
        sans: ['"Dafira Sans"', '"Dafira Emoji"', ...defaultTheme.fontFamily.sans],
        mono: ['"Dafira Mono"', '"Dafira Sans"', ...defaultTheme.fontFamily.mono],
      },
      fontWeight: {
        extrabold: '600',
        black: '700',
      },
      boxShadow: {
        sm: '0 1px 2px rgba(14, 34, 56, 0.05)',
        DEFAULT: '0 1px 2px rgba(14, 34, 56, 0.06)',
        md: '0 1px 2px rgba(14, 34, 56, 0.06), 0 4px 12px -6px rgba(14, 34, 56, 0.10)',
        lg: '0 1px 2px rgba(14, 34, 56, 0.06), 0 8px 20px -10px rgba(14, 34, 56, 0.14)',
        xl: '0 1px 2px rgba(14, 34, 56, 0.06), 0 12px 28px -14px rgba(14, 34, 56, 0.18)',
        '2xl': '0 1px 0 rgba(14, 34, 56, 0.06), 0 20px 40px -20px rgba(14, 34, 56, 0.28)',
      },
      transitionDuration: {
        DEFAULT: '160ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.2, 0.6, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
