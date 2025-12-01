<template>
  <select
    :class="$style.select"
    :disabled="props.isDisabled"
    :data-disabled="props.isDisabled" 
    :value="props.modelValue"
    @change="handleChange"
  >
    <option value="" disabled hidden>
      {{ props.placeholder }}
    </option>
    <option
      v-for="option in props.options"
      :key="option"
      :value="option"
    >
      {{ option }}
    </option>
  </select>
</template>

<script setup lang="ts">
interface IProps {
  modelValue?: string
  isDisabled?: boolean
  placeholder?: string
  options?: string[]
}

interface IEmit {
  (e: 'update:modelValue', value: string): void
}

const props = withDefaults(defineProps<IProps>(), {
  modelValue: '',
  isDisabled: false,
  placeholder: 'Выберите значение',
  options: () => []
})

const emit = defineEmits<IEmit>()

function handleChange(event: Event) {
  const target = event.target as HTMLSelectElement
  emit('update:modelValue', target.value)
}
</script>

<style module lang="scss">
.select {
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