import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { ghPages } from "vite-plugin-gh-pages";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    ghPages({
      outDir: "dist", // Ensure this matches the build output directory
    }), // Adiciona o plugin para deploy no GitHub Pages
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  base: "/", // Substitua pelo nome do repositório no GitHub
  build: {
    outDir: "dist", // Ensure the output directory is set to 'dist'
    emptyOutDir: true, // Clean the output directory before building
  },
}));
