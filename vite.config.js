import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const path = require('path')

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@pages': path.resolve(__dirname, './src/pages/job-page'),
            '@images': path.resolve(__dirname, './src/images'),
            '@styles': path.resolve(__dirname, './src/styles')
        }
    }
})
