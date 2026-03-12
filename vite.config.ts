import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Dev server config
  server: {
    host: "0.0.0.0",       // "::" works, but "0.0.0.0" is safer for IPv4+Render
    port: 8080,
    hmr: {
      overlay: false,      // disables error overlay in browser
    },
  },
  // Build options
  build: {
    outDir: "dist",        // ensure Vite outputs to 'dist' for Render
    sourcemap: mode === "development", // optional source maps in dev
  },
  // Plugins
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  // Path aliases
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  // Optional: environment variables prefix (for frontend)
  envPrefix: "NEXT_PUBLIC_",
}));