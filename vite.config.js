import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Mapeia corretamente para a rede, incluindo localhost/IPv4/IPv6
    open: true, // Abre o navegador automaticamente
    port: 5173,
  }
})
