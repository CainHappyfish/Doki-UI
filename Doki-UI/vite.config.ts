import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: 'doki-UI',
      entry: 'packages/index.ts',
    },
    rollupOptions: {
      external: ['vue'],
      input: ['packages/index.ts'],
      output: [
        {
          format: "es",
          entryFileNames: "[name].mjs",
          preserveModules: false,
          exports: "named",
          dir: "doki-UI/es"
        },
        {
          format: 'cjs',
          entryFileNames: '[name].js',
          preserveModules: false,
          exports: 'named',
          dir: 'doki-UI/lib'
        }
      ]
    },
  },
  plugins: [
    vue(),
    dts({
      entryRoot: 'packages',
      outDir: ['doki-UI/es', 'doki-UI/lib'],
      tsConfigFilePath: "tsconfig.json",
    }),
  ],
  server: {
    open: true,
    proxy: {
      '^/api/.*': {
        target: 'http://localhost:3000/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
        timeout: 60000,
      },
    },
  },
})
