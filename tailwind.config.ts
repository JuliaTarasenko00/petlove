import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: 'var(--font-manrope)',
      },
      backgroundImage: {
        loader:
          'linear-gradient(rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.3)), url(../../public/image/bg_image.png)',
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;
