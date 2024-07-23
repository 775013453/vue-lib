# vue-lib(基于 vue3 基础框架搭建的 vue-lib 公共组件库)

### author: almostSir，date：2024-07-23

### 基础框架详情

- 开发环境：vs code 开发工具、nodejs@20.10.0、vite/5.0.\*
- 基于 Vue 3 + TypeScript + Vite 搭建的通用框架

### 开发步骤

1.  安装 vite 工具，使用命令：npm init vite@latest
2.  安装相关依赖包：npm install
3.  修改 vite.config.ts，package.json 配置文件（参考此项目）
4.  新建 packages 文件夹（公共组件库）
5.  修改 src 文件夹为 examples，修改 index.html 文件中的/src/main.ts 为/examples/main.ts（测试公共组件）
6.  编写公共组件（以下为创建公共组件例子）
    - 在 packages 文件夹创建 testBtn 文件夹
    - 在 testBtn 文件夹创建 index.vue，index.ts（可创建多个依赖组件，但最终只能在 index.ts 注册导出，所有样式命名和组件命名必须使用统一前缀：例如：a-xxx）
    - 修改 packages 文件夹下 index.ts，导入新组建，并导出（参考 index.ts 中的例子）
7.  在 examples 文件夹下使用新组件测试组件功能
8.  打包，使用命令：npm run build
9.  打包后测试组件，通过 import 导入打包后组件并使用

```
  <template>
    <a-button
      name="测试按钮"
      @click="clickHandle"
      outClass="test-btn"
      :disabled="false"
    >
      <template #prefixBtn>ICON</template>
    </a-button>
  </template>

  <script lang="ts" setup>
    import { AButton } from 'dist/vue-lib.es.js';

    function clickHandle() {
      console.log('button click!');
    }
  </script>

  <style lang="" scoped></style>

```

10. 发布 npm 包
    - npm version patch
    - npm publish
11. 新项目中安装依赖，使用命令：npm install vue-lib@0.0.1
12. 使用新依赖包
    - 安装新的依赖包
    - 引入 style.css,在 main.ts 中引入 import 'vue-lib/dist/style.css';;

```
<template>
  <a-button
    name="测试按钮"
    @click="clickHandle"
    outClass="test-btn"
    :disabled="false"
  >
    <template #prefixBtn>ICON</template>
  </a-button>
</template>

<script lang="ts" setup>
  import { AButton } from 'vue-lib';

  function clickHandle() {
    console.log('button click!');
  }
</script>

<style lang="" scoped></style>

```

### 本地安装技巧

- 执行 npm pack 命令，打包为 xxx.tgz 包
- 使用 npm i ./dist/xxx.tgz
- 安装后就即可使用
