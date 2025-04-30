import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/react-three-fiber-firstWorkspace/', // Reemplaza 'repository-name' con el nombre de tu repositorio en GitHub
})
