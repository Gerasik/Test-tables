import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import svgr from "vite-plugin-svgr"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  base: "/Test-tables/",
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
