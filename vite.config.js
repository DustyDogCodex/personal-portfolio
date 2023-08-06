import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    /* comment or remove this to run the app on netlify. Uncomment to run on github pages.  */
    base:'/personal-portfolio/'
})
