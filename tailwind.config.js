const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  // darkMode: ['class', '[data-theme="dark"]'],
  content: [
    'app/**/*.{ts,tsx}',
    'components/**/*.{ts,tsx}',
    'pages/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      // fontFamily: {
      //   sans: ['var(--font-sans)', ...fontFamily.sans]
      // },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      },
      colors: {
        "primary": "#FFBE1A",
        "secondary": "#FFFFFF",
        "base-600": "#2E1a05",
        "base-800": "#2b2b2b",
        "accent": "#37cdbe",
        "accent-main": "#cfcfcf",
        "accent-secondary": "131616",
        "base-400": "#0F0F0F",
        "red-100": "#B0A8A0",
        "red-400": '#f87171',
        "red-600": '#F88379',
        'green-200': '#49796B'
      }
    }
  },
  plugins: [require('tailwindcss-animate'), require('daisyui'),
  function ({ addComponents }) {
    const newComponents = {
      '.docs-title': {
        '@apply text-lg text-accent-main font-medium leading-[1.75rem] mb-8': {},
      },
      '.docs-title-xl': {
        '@apply text-xl text-accent-main font-bold leading-[1.75rem] mb-6': {},
      },
      '.docs-content': {
        '@apply text-base leading-relaxed text-accent-main/80 font-normal mb-6': {}
      }, 
      '.docs-tag': {
        '@apply bg-base-100 px-2 py-1 rounded text-accent-main text-base': {}
      },
       '.docs-hint': {
        '@apply p-5 rounded-r-lg bg-primary/10  text-sm leading-5 text-accent-main/80  border-l-[3px] border-primary/20 mb-4': {}
       },
      '.docs-divider': {
        '@apply border-t border-base-content/20 pt-8': {}
      },

    
     
    };

    addComponents(newComponents);
  },
  ],

  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        shipfast: {
          "primary": "#FFBE1A",
          "neutral": "#3d4451",
          "base-100": "#212121",
          "base-200": "#2F1A04",
          "error": '#f87171',
        },
      },
      "dark",
      "cupcake",
      "retro", 
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: false, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    themeRoot: ":root", // The element that receives theme color CSS variables
  },
};
