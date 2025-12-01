<template>
  <button
    :class="$style.button"
    :data-layout="props.layout"
    :data-disabled="props.isDisabled"
    :type="props.type"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface IProps {
  layout?: 'primary' | 'secondary'
  isDisabled?: boolean
  type?: 'submit' | 'button'
}

const props = withDefaults(defineProps<IProps>(), {
  layout: 'primary',
  isDisabled: false,
  type: 'button'
})
</script>

<style module lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 24px;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  transition: opacity 0.2s;

  &[data-layout='primary'] {
    color: var(--color-text);
    background: linear-gradient(var(--color-primary), var(--color-primary-light));
  }

  &[data-layout='secondary'] {
    color: var(--color-primary);
    background: var(--color-surface);
    border: 1px solid var(--color-border);
  }

  &[data-disabled='true'] {
    opacity: 0.6;
    cursor: not-allowed;
  }

 &:not([data-disabled='true']):hover {
  &[data-layout='primary'] {
    background: linear-gradient(var(--color-primary-light), var(--color-primary));
  }
  &[data-layout='secondary'] {
    background: var(--color-background);
  }
}
}
</style>