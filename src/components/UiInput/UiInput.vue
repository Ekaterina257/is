<template>
  <input
    :class="$style.input"
    :disabled="props.isDisabled"
    :data-disabled="props.isDisabled"
    type="text"
    :value="props.modelValue"
    :placeholder="props.placeholder"
    @input="handleInput"
  />
</template>

<script setup lang="ts">
interface IProps {
  modelValue?: string
  isDisabled?: boolean
  placeholder?: string
}

interface IEmit {
  (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  isDisabled: false,
  placeholder: ''
})

const emit = defineEmits<IEmit>()

function handleInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style module lang="scss">
.input {
  width: 100%;
  height: 40px;
  padding: 0 16px;
  font-size: 1rem;
  font-family: inherit;
  color: var(--color-text);
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  outline: none;
  transition: border-color 0.2s;

  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px var(--color-primary);
  }

  &[data-disabled='true'] {
    opacity: 0.6;
    cursor: not-allowed;
    box-shadow: none;
  }
}
</style>