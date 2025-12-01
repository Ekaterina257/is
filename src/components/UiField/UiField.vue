<template>
  <div
    :class="$style.field"
    :data-has-label="!!props.label"
  >
    <label v-if="props.label" :class="$style.label">
      {{ props.label }}
    </label>
    <div :class="$style.control">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface IProps {
  label?: string
}

const props = withDefaults(defineProps<IProps>(), {
  label: ''
})
</script>

<style module lang="scss">
.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
}

.label {
  font-size: 14px;
  font-weight: 600;
  color: var(--color-text);
  line-height: 1.4;
}

.control {
  width: 100%;
}
</style>