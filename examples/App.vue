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
