import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import { resolve } from 'path';
import { tmpdir } from 'os';
import { devLogger } from '@meituan-nocode/vite-plugin-dev-logger';
import { devHtmlTransformer, prodHtmlTransformer } from '@meituan-nocode/vite-plugin-nocode-html-transformer';
import react from '@vitejs/plugin-react';

const isProdEnv = process.env.NODE_ENV === 'production';
const PUBLIC_PATH = isProdEnv ? process.env.PUBLIC_PATH + '/' + process.env.CHAT_VARIABLE : process.env.PUBLIC_PATH;
const OUT_DIR = isProdEnv ? 'build/' + process.env.CHAT_VARIABLE : 'build';
const PLUGINS = isProdEnv ? [
  react(),
  prodHtmlTransformer(process.env.CHAT_VARIABLE)
] : [
  devLogger({
    dirname: resolve(tmpdir(), '.nocode-dev-logs'),
    maxFiles: '3d',
  }),
  react(),
  devHtmlTransformer(process.env.CHAT_VARIABLE),
];

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '::',
    port: '8080',
    hmr: {
      overlay: false
    }
  },
  plugins: [
    PLUGINS
  ],
  base: '/',  // 固定为根路径，解决"base should start with a slash"警告
build: {
  outDir: 'dist'  // 明确输出目录为'dist'（也可以是'build'，后续Vercel需要对应这个名称）
},
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: 'lib',
        replacement: resolve(__dirname, 'lib'),
      },
    ],
  },
});