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
        Infrastructure: "/src/Infrastructure",
        Shared: "/src/Shared",
        Forms: "/src/Forms",
        Auth: "/src/Auth",
        Dashboard: "/src/Dashboard",
        Clients: "/src/Clients",
        Tasks: "/src/Tasks",
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
