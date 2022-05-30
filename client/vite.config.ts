import { defineConfig } from 'vite'
import { resolve } from 'path';
import { existsSync, unlinkSync, writeFileSync } from 'fs';
import { createVuePlugin as Vue2 } from 'vite-plugin-vue2'
import Vue2ScriptSetup from 'unplugin-vue2-script-setup/vite'
import eslint from 'vite-plugin-eslint';

const portDevServer = 3333;
const hostDevServer = `http://localhost:${portDevServer}`;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    server: {
      port: portDevServer,
      watch: {
        usePolling: true,
      },
    },

    define: {
      '__VUETIFY_VERSION__': JSON.stringify(process.env.npm_package_dependencies_vuetify),
      '__TAILWINDCSS_VERSION__': JSON.stringify(process.env.npm_package_devDependencies_tailwindcss),
      '__VITE_VERSION__': JSON.stringify(process.env.npm_package_devDependencies_vite),
    },

    plugins: [
      Vue2(),
      Vue2ScriptSetup({reactivityTransform: true}),
      eslint({
        cache: false,
      }),
      {
        name: 'integrate-dev-server',
        enforce: 'post',
        apply: 'serve',
        buildStart() {
          const pathFile = '../public/hot';
          if (mode !== 'production') {
              writeFileSync(pathFile, hostDevServer);
          } else {
              if (existsSync(pathFile)) {
                  unlinkSync(pathFile);
              }
          }
        }
      },
      {
        name: 'absolutify-paths',
        enforce: 'pre',
        apply: 'serve',
        transform: (code: string) => {
          const transform = code.replace(/\/src\/(.*)\.(svg|png|jpg)/, hostDevServer + '/src/$1.$2');
          return {
            code: transform,
            map: null
          };
        },
      }
    ],
  
    resolve: {
      alias: {
        '@': `${resolve(__dirname, 'src')}`,
      },
    },

    css: {
      devSourcemap: mode !== 'production',
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

    build: {
      manifest: mode === 'production',
    }
  }
})
