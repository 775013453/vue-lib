/**
 * description：vite配置文件，配置路径及构建方式
 * organization：self
 * author: almostSir
 * date：2024-07-23 12:36:19
 */

import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'examples'),
      '^': path.resolve(__dirname, 'public'),
      vLib: path.resolve(__dirname, 'packages'),
      dist: path.resolve(__dirname, 'dist')
    }
  },
  build: {
    lib: {
      // 注意此处的路径要配置正确
      entry: path.resolve('packages/index.ts'),
      name: 'vue-as-lib',
      fileName: (format) => `vue-as-lib.${format}.js`
    },
    // 自定义构建配置，可直接调整底层Rollup选项；Rollup有一套预设
    // https://rollupjs.org/guide/en/#big-list-of-options
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
