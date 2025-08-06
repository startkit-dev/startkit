import tailwindcss from "@tailwindcss/vite"
import { tanstackStart } from "@tanstack/react-start/plugin/vite"
import react from "@vitejs/plugin-react-oxc"
import { defineConfig } from "vite"
import tsConfigPaths from "vite-tsconfig-paths"

export default defineConfig({
  server: {
    port: 3000
  },
  plugins: [
    tsConfigPaths({
      projects: ["./tsconfig.json"]
    }),
    tanstackStart({
      customViteReactPlugin: true,
      target: "cloudflare-module"
    }),
    react(),
    tailwindcss()
  ]
})
