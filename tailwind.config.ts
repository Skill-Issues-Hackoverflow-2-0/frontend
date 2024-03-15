import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        base: {
          "50": "#96cff3",
          "100": "#8cc5ed",
          "200": "#6ab9e7",
          "300": "#35a3de",
          "400": "#1e7eae",
          "500": "#185777",
          "600": "#0d3a54",
          "700": "#092435",
          "800": "#06151e",
          "900": "#040c10",
          "950": "#000000",
        },
        support: {
          "50": "#faf6ec",
          "100": "#f4e9cd",
          "200": "#ead39e",
          "300": "#ddb467",
          "400": "#d2983d",
          "500": "#cd8a32",
          "600": "#a76627",
          "700": "#864a22",
          "800": "#703d23",
          "900": "#603423",
          "950": "#381910",
        },
        highlight: {
          "50": "#f3f8fa",
          "100": "#eaf1f5",
          "200": "#d8e5ed",
          "300": "#c0d5e1",
          "400": "#a6bfd3",
          "500": "#93abc6",
          "600": "#7890b3",
          "700": "#667a9c",
          "800": "#54647f",
          "900": "#485567",
          "950": "#2a313c",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
