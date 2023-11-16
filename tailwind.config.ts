import type { Config } from 'tailwindcss'
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "primary-gradient": "linear-gradient(180.96deg, #000000 0.82%, #4A2800 129.1%)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", ...fontFamily.sans],
        montserrat: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      colors: {
        primary: {
          light: "#FCC182",
          default: "#FA9021",
          dark: "#AF5B04",
        },
        secondary: {
          light: "#e07e3d",
          default: "#cda68d",
          dark: "#190800",
        }
      }
    },
  },
  plugins: [],
}

export default config
