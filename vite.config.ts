import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import biomePlugin from "vite-plugin-biome";
import checker from "vite-plugin-checker";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    biomePlugin(),
    react(),
    checker({
      typescript: true,
    }),
  ],
});
