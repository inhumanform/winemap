import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' 
import dotenv from 'dotenv'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: "http://127.0.0.1:5555",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [react(),
  svgr({ 
    svgrOptions: {
      // svgr options
    },
    define:{
      'process.env.VITE_REACT_APP_ACCESS_TOKEN' :JSON.stringify(process.env.VITE_REACT_APP_ACCESS_TOKEN)
    }
  }),
], 
})
