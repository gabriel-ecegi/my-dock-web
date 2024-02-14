import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import biomePlugin from "vite-plugin-biome";
import checker from "vite-plugin-checker";

export default defineConfig(() => {
  return {
    server: {
      open: true,
      port: 3000,
    },
    resolve: {
      alias: {
        Pages: "/src/Pages",
        Utils: "/src/Utils",
        Components: "/src/Components",
        Hooks: "/src/Hooks",
        Translations: "/src/Translations",
      },
    },
    build: {
      sourcemap: true,
    },
    plugins: [
      react(),
      biomePlugin(),
      checker({
        typescript: true,
      }),
    ],
  };
});
