// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'


// export default defineConfig(async()=>{
//   const mdx = await import("@mdx-js/rollup")
//   return{
//     plugins: [react(), mdx.default({ remarkPlugins: [] })],
//     resolve:{
//       alias:{
//         "faker": 'faker.js',
        
//       },
//     },
//     optimizeDeps: {
//       exclude: ['@udecode/plate','@styled-icons/boxicons-regular','@styled-icons/foundation','@styled-icons/material'],
//       include: ['react/jsx-runtime'],
    
//     },
//   }
// })

// <reference types="vite/client" />

import reactPlugin from '@vitejs/plugin-react'
import type { UserConfig } from 'vite'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
const config = async (): Promise<UserConfig> => {
  const { default: mdx } = await import('@mdx-js/rollup')

  return {
    plugins: [reactPlugin(),mdx({
         providerImportSource: "@mdx-js/react"
       }),],
    resolve: {
      alias: {
        // 'react/jsx-runtime': 'react/jsx-runtime.js',
      },
    },
    optimizeDeps: {
      // exclude: ['@udecode/plate','@styled-icons/boxicons-regular','@styled-icons/foundation','@styled-icons/material'],
      include: ['react/jsx-runtime',],
    },
    build: { minify: true },
  }
}

export default defineConfig(config)