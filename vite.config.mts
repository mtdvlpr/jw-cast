import { fileURLToPath, URL } from 'node:url';
import Vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite';
import Fonts from 'unplugin-fonts/vite';
import { defineConfig } from 'vite';
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify';

const videoJsElements = new Set(['video-player', 'video-skin', 'video-neutral-skin', 'media-i18n']);

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    AutoImport({
      dirs: [
        './src/stores',
        './src/utils',
        {
          glob: './src/types/{index.ts,date.d.ts,media.types.ts,mediator.d.ts,lang.d.ts}',
          types: true,
        },
      ],
      dts: './src/types/auto-imports.d.ts',
      imports: ['vue', '@vueuse/core', 'pinia'],
    }),
    Vue({
      template: {
        compilerOptions: {
          isCustomElement: (tag) => videoJsElements.has(tag),
        },
        transformAssetUrls,
      },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify({
      autoImport: true,
      styles: {
        configFile: 'src/styles/settings.scss',
      },
    }),
    Fonts({
      fontsource: {
        families: [
          {
            name: 'Roboto',
            weights: [100, 300, 400, 500, 700, 900],
            styles: ['normal', 'italic'],
          },
        ],
      },
    }),
  ],
  define: {
    'process.env': {},
    __VUE_I18N_LEGACY_API__: false,
    __MEDIATOR_URL__: JSON.stringify('https://b.jw-cdn.org/apis/mediator/v1'),
    __SEARCH_URL__: JSON.stringify('https://b.jw-cdn.org/apis/search/results'),
    __TOKEN_URL__: JSON.stringify('https://b.jw-cdn.org/tokens/jworg.jwt'),
    __GUIDE_URL__: JSON.stringify('https://github.com/semkeijsper/jw-cast#handleiding'),
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('src', import.meta.url)),
    },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
  },
  server: {
    port: 3000,
  },
});
