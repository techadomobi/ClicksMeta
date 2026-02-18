import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { fileURLToPath } from 'node:url';
import { resolve, dirname } from 'node:path';
import contactHandler from './api/contact.js';
import demoRequestHandler from './api/demo-request.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), devApiPlugin()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

function devApiPlugin() {
  const routes = [
    { prefix: '/api/contact', handler: contactHandler },
    { prefix: '/api/demo-request', handler: demoRequestHandler },
  ];

  return {
    name: 'clicksmeta-dev-api',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const targetRoute = routes.find((route) => req.url && req.url.startsWith(route.prefix));
        if (!targetRoute) {
          return next();
        }

        try {
          if (req.method && !['GET', 'HEAD'].includes(req.method.toUpperCase())) {
            try {
              req.body = await readJsonBody(req);
            } catch {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
              return;
            }
          } else {
            req.body = undefined;
          }

          enhanceResponse(res);
          await targetRoute.handler(req, res);
        } catch (error) {
          console.error('[dev-api] handler failure', error);
          if (!res.headersSent) {
            res.statusCode = error.status || 500;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ error: error.message || 'Internal API error' }));
          }
        }
      });
    },
  };
}

function readJsonBody(req) {
  return new Promise((resolve, reject) => {
    let data = '';
    req.on('data', (chunk) => {
      data += chunk;
    });
    req.on('end', () => {
      if (!data) return resolve({});
      try {
        resolve(JSON.parse(data));
      } catch (error) {
        reject(error);
      }
    });
    req.on('error', reject);
  });
}

function enhanceResponse(res) {
  if (res.__enhanced) return;
  res.status = function status(code) {
    this.statusCode = code;
    return this;
  };
  res.json = function json(payload) {
    if (!this.headersSent) {
      this.setHeader('Content-Type', 'application/json');
    }
    this.end(JSON.stringify(payload));
  };
  res.__enhanced = true;
}
