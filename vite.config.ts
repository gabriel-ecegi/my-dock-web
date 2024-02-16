import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import biomePlugin from "vite-plugin-biome";
import checker from "vite-plugin-checker";
import federation from "@originjs/vite-plugin-federation";

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
      modulePreload: false,
      target: "esnext",
      minify: false,
      cssCodeSplit: false,
    },
    plugins: [
      react(),
      biomePlugin(),
      checker({
        typescript: true,
      }),
      federation({
        name: "my-dock-web-plus",
        filename: "remoteEntry.js",
        exposes: {
          "./Clients/ClientsTable": "./src/Clients/Modules/ClientsTableModule",
        },
        shared: ["react", "react-dom"],
      }),
    ],
  };
});
