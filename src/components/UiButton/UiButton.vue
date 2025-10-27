<template>
  <button :class="$style.button" :data-layout="props.layout" :disabled="props.isDisabled" :type="props.type">
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary';
  type?: 'submit' | 'button';
  isDisabled?: boolean;
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  type: 'button',
});
</script>

<style module lang="scss">
.button {
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 14px 28px;
  font-size: 1rem;
  line-height: 1.5;
  color: var(--color-white);
  background: var(--color-primary);
  border: none;
  border-radius: 120px;
  cursor: pointer;
  transition: background-color 0.2s ease, color 0.2s ease, border-color 0.2s ease;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
    background: var(--color-primary-hover, var(--color-primary));
    color: var(--color-white);
  }

  &[data-layout='secondary'] {
    color: var(--color-primary);
    background: transparent;
    border: 1px solid var(--color-primary);

    &:hover:not(:disabled) {
      color: var(--color-white);
      background: var(--color-primary);
      border-color: var(--color-primary);
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
}
</style>
