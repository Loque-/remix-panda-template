import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  presets: ['@pandacss/dev/presets'],

  preflight: true,

  // Where to look for your css declarations
  include: ['./app/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {},
  },

  jsxFramework: 'react',
  syntax: 'object-literal',
});
