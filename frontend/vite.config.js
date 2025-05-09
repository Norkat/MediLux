
import react from '@vitejs/plugin-react'
import { defineConfig } from "vite";


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: true, // Abre automáticamente el navegador
  },
});
