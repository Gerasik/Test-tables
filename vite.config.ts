import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  resolve: {
    alias: {
      components: "/src/components",
      store: "/src/store",
      schema: "/src/schema",
      types: "/src/types",
      assets: "/src/assets",
    },
  },
})
