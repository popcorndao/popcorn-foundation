module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      "2lg": "1280px",

      xl: "1921px",
      // => @media (min-width: 1921px) { ... }

      "2xl": "2560px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      dropShadow: {
        "3xl": "0 0 5px rgba(0, 0, 0, 0.1)",
      },
      spacing: {
        18: "4.5rem",
        72: "18rem",
        84: "21rem",
        96: "24rem",
        100: "25.5rem",
        104: "27rem",
        112: "30rem",
        128: "34rem",
        146: "146px",
        156: "41rem",
        260: "260px",
        275: "275px",
      },
      lineHeight: {
        button: "32px",
      },
      scale: {
        101: "1.01",
        102: "1.02",
      },
      colors: {
        primary: '#645F4B',
				primaryLight: "#A5A08C",
				primaryDark: "#555555",

				secondary: "#B72E73",
				secondaryLight: "#AFAFAF",

				warmGray: '#EBE7D4',
				customPeach: "#FFF8EE",
				customYellow: '#FEE25D',
				customLightYellow: '#FFE650',
				customPale: '#DFDAC7',
				customRed: '#FA5A6E',
				customGreen: '#05BE64',
				customLightGreen: '#78E69B',
				customPurple: '#9B55FF',
				customLightPurple: '#C391FF',
				customDarkGray: '#1F2937',
				customLightGray: '#D7D7D7',
				rewardsGreen: '#1FBC67',
				rewardsLightGreen: '#7CE59D',
				tokenTextGray: '#969696',

        ctaYellow: "#F6CB22",
        ctaYellowLight: "#FFD324",
        pink: "#FFA0B4"
      },
      fontSize: {
				'xs': '.75rem',
				'sm': '.875rem',
				'tiny': '.875rem',
				'base': '1rem',
				'lg': '1.125rem',
				'xl': '1.25rem',
				'2xl': '1.5rem',
				'3xl': '2rem',
				'4xl': '2.5rem',
				'5xl': '3rem',
				'6xl': '3.5rem',
				'7xl': '4rem',
				'8xl': '4.5rem',
				'9xl': '6rem',
				'10xl': '8rem',
			},
      backgroundImage: (theme) => ({
        footer: "url('/images/footer-background.svg')",
        "mobile-footer": "url('/images/mobile-footer-bg.svg')",
        "mobile-content": "url('/images/mobile-bg.svg')",
      }),
      animation: { "spin-slow": "spin 3s linear infinite" },
      fontFamily: {
        landing: ["Avenir Next LT Pro", "sans-serif"],
        khTeka: ["'KH Teka'", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      opacity: ["disabled"],
      backgroundColor: ["disabled"],
      cursor: ["disabled"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
};
