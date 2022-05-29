import { defineConfig } from 'vite'
import { resolve } from 'path';
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import Vue2ScriptSetup from 'unplugin-vue2-script-setup/vite'
import eslint from 'vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      Vue2(),
      Vue2ScriptSetup({reactivityTransform: true}),
      eslint({
        cache: false,
      }),
    ],
  
    resolve: {
      alias: {
        '@': `${resolve(__dirname, 'src')}`,
      },
    },

    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import \'@/styles/vuetify-variables.scss\'\n',
          sourceMap: false,
        },
        scss: {
          additionalData: '@import "@/styles/vuetify-variables.scss";',
          sourceMap: false,
        }
      }
    },
  }
})
