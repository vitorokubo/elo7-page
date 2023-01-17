import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@pages': path.resolve(__dirname, './src/pages/job-page'),
            '@images': path.resolve(__dirname, './src/images'),
            '@components': path.resolve(__dirname, './src/styles/components')
        }
    }
})
