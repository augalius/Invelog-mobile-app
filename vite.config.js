import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      includeAssets: ['favicon.ico', 'logo-180x180.png', 'mask-icon.svg'],
      manifest: {
        name: 'Invelog',
        short_name: 'Invelog',
        description: 'Journaling app for investors to keep track of their investments and reflect about their financial activity.',
        theme_color: '#2c2f40',
        icons: [
          {
            src: 'logo-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })],
  base: '/kv5049/coursework/app/',
});
