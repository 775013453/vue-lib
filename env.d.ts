/**
 * description：vue声明文件
 * organization：CITC
 * author: almostSir
 * date：2024-07-23 12:35:31
 */

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const vueComponent: DefineComponent<{}, {}, any>;
  export default vueComponent;
}
