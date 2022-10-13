<script setup lang="ts">
interface Props {
  title?: string
  modelValue?: number
  kindValue?: string
  min?: number
  max?: number
}
const props = withDefaults(defineProps<Props>(), {
  title: '',
  modelValue: '',
  kindValue: '',
  min: 0,
  max: 200,
})
const emit = defineEmits(['update:modelValue'])
function updateValue(value: number) {
  emit('update:modelValue', value)
}
</script>
<template>
  <label>{{ title }}: {{ modelValue }}{{ kindValue }} </label>
  <input
    type="range"
    :min="min"
    :max="max"
    :value="modelValue"
    @input="updateValue($event.target.value)"
  />
</template>
