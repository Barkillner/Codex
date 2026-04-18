import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        surface: "var(--surface)",
        ink: "var(--ink)",
        accent: "var(--accent)",
        muted: "var(--muted)"
      },
      boxShadow: {
        card: "0 15px 45px rgba(8, 22, 44, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
