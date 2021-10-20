module.exports = {
  // mode: "jit",
  theme: {
    extend: {
      maxWidth: {
        "8xl": "1920px"
      },
      colors: {
        blue: {
          50: "#f2f6f8",
          100: "#e6edf1",
          200: "#c0d1dc",
          300: "#9ab6c7",
          400: "#4e7f9d",
          500: "#024873",
          600: "#024168",
          700: "#023656",
          800: "#012b45",
          900: "#012338"
        },
        teal: {
          50: "#f2fcfc",
          100: "#e6f9f9",
          200: "#c0efef",
          300: "#9be5e5",
          400: "#4fd2d2",
          500: "#04BFBF",
          600: "#04acac",
          700: "#038f8f",
          800: "#027373",
          900: "#025e5e"
        },
        gray: {
          50: "#fefeff",
          100: "#fafbfb",
          200: "#dbdcdd",
          300: "#a7a5a6",
          400: "#656263",
          500: "#231f20",
          600: "#201c1d",
          700: "#1a1718",
          800: "#151313",
          900: "#110f10"
        },
        red: {
          50: "#f7f3f5",
          100: "#eee7eb",
          200: "#d6c2cd",
          300: "#bd9dae",
          400: "#8b5472",
          500: "#590b35",
          600: "#500a30",
          700: "#430828",
          800: "#350720",
          900: "#2c051a"
        },
        "ring-1": "#04BFBF",
        "ring-2": "#fefeff",
        disabled: "#a7a5a6",
        primary: "#110f10",
        "primary-2": "#231f20",
        secondary: "#fefeff",
        "secondary-2": "#dbdcdd"
      },
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        xxl: "1536px"
        // => @media (min-width: 1280px) { ... }
      },
      textColor: {
        base: "#110f10",
        primary: "#110f10",
        secondary: "#fefeff",
        brand: "#04BFBF"
      },
      boxShadow: {
        "outline-2": "0 0 0 2px #151313",
        magical:
          "rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px"
      },
      lineHeight: {
        "extra-loose": "2.2"
      },
      letterSpacing: {
        widest: "0.3em"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio")
  ]
}
