import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
// Removed lovable-tagger import to strip Lovable development overlay and tracing
// import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/bhanu-portfolio/',
  server: {
    host: "::",
    port: 8080,
  },
  // Do not load lovable-tagger plugin (commented out) to remove Lovable branding injection
  plugins: [react() /*, mode === "development" && componentTagger()*/].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
