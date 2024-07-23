<template>
  <span
    class="a-button"
    :class="[outClass, disabled ? 'a-button-disabled' : '']"
    @click="btnClick"
  >
    <slot name="prefixBtn"></slot>
    {{ name }}
  </span>
</template>

<script lang="ts" setup>
  const props = defineProps({
    name: {
      type: String,
      default: () => {
        return '按钮';
      }
    },
    outClass: {
      type: String,
      default: () => {
        return '';
      }
    },
    disabled: {
      type: Boolean,
      default: () => {
        return false;
      }
    }
  });

  const emit = defineEmits(['click']);

  const btnClick = () => {
    if (!props.disabled) {
      emit('click');
    }
  };
</script>

<script lang="ts">
  export default {
    name: 'a-button'
  };
</script>
<style lang="scss" scoped>
  .a-button {
    background-color: #1188ff;
    color: white;
    padding: 8px 12px;
    cursor: pointer;
    border-radius: 6px;
  }

  .a-button:hover:not(.a-button-disabled) {
    background-color: #b848ff;
  }

  .a-button-disabled {
    background-color: rgba(0, 0, 0, 0.25);
  }
</style>
