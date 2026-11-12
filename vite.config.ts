import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'resolve-module-fallback',
        configureServer(server) {
          server.middlewares.use((req, _res, next) => {
            if (!req.url) return next();
            // Handle root or relative env.mjs requests cleanly
            if (req.url === '/env.mjs' || req.url.endsWith('/env.mjs')) {
              req.url = '/node_modules/vite/dist/client/env.mjs';
            }
            // Handle /main.tsx requests cleanly
            else if (req.url === '/main.tsx' || (req.url.startsWith('/main.tsx?') && !req.url.startsWith('/src/main.tsx'))) {
              req.url = '/src/main.tsx' + (req.url.includes('?') ? req.url.slice(req.url.indexOf('?')) : '');
            }
            next();
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(import.meta.dirname, '.'),
        '/env.mjs': path.resolve(import.meta.dirname, 'node_modules/vite/dist/client/env.mjs'),
        '/main.tsx': path.resolve(import.meta.dirname, 'src/main.tsx'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true as const,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
