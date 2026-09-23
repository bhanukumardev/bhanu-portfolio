import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { VitePWA } from "vite-plugin-pwa";
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
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'robots.txt', 'bhanu-animated.gif'],
      manifest: {
        name: 'Bhanu Kumar Dev Portfolio',
        short_name: 'BhanuPortfolio',
        description: 'My portfolio features AI and ML projects, including deep learning, NLP, and data-driven solutions.',
        theme_color: '#1e293b',
        background_color: '#ffffff',
        display: 'standalone',
        orientation: 'portrait-primary',
        scope: '/bhanu-portfolio/',
        start_url: '/bhanu-portfolio/',
        icons: [
          {
            src: '/bhanu-portfolio/icons/icon-192.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any maskable'
          },
          {
            src: '/bhanu-portfolio/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ],
        categories: ['portfolio', 'developer', 'ai', 'ml'],
        screenshots: [],
        shortcuts: [
          {
            name: 'About Me',
            short_name: 'About',
            description: 'Learn more about Bhanu Kumar Dev',
            url: '/bhanu-portfolio/#about',
            icons: [{ src: '/bhanu-portfolio/icons/icon-192.png', sizes: '192x192' }]
          },
          {
            name: 'Projects',
            short_name: 'Projects',
            description: 'View AI/ML projects',
            url: '/bhanu-portfolio/#projects',
            icons: [{ src: '/bhanu-portfolio/icons/icon-192.png', sizes: '192x192' }]
          },
          {
            name: 'Contact',
            short_name: 'Contact',
            description: 'Get in touch',
            url: '/bhanu-portfolio/#contact',
            icons: [{ src: '/bhanu-portfolio/icons/icon-192.png', sizes: '192x192' }]
          }
        ]
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2,woff,ttf,eot,jpg,jpeg,gif,webp}'],
        maximumFileSizeToCacheInBytes: 5 * 1024 * 1024, // 5 MB
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'gstatic-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365 // 1 year
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
