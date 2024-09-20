<script setup lang="ts">
import { computed } from 'vue'
import type { UiButton } from '@/types'

const props = withDefaults(defineProps<UiButton>(), {
  color: 'default',
  size: 'default'
})

const buttonStyles = computed(() => ({
  [`button--color--${props.color}`]: Boolean(props.color),
  [`button--size--${props.size}`]: Boolean(props.size)
}))
</script>

<template>
  <component
    :is="props.href ? 'a' : 'button'"
    class="button"
    :class="buttonStyles"
    :href="props.href"
    v-bind="$attrs"
  >
    <slot></slot>
  </component>
</template>

<style>
.button {
  display: block;
  width: 100%;
  max-width: 250px;
  border: 0;
  border-radius: 20px;
  color: white;
  text-align: center;
  text-decoration: none;
  box-sizing: border-box;
}

.button--color--default {
  background-color: gray;
}

.button--color--primary {
  background-color: purple;
}

.button--color--secondary {
  background-color: navy;
}

.button--color--warning {
  background-color: orange;
}

.button--color--error {
  background-color: red;
}

.button--color--success {
  background-color: green;
}

.button--size--default {
  padding: 10px;
}

.button--size--2xs {
  padding: 0 20px;
}

.button--size--xs {
  padding: 4px 20px;
}

.button--size--sm {
  padding: 6px 20px;
}

.button--size--md {
  padding: 10px 20px;
}

.button--size--lg {
  padding: 12px 20px;
}

.button--size--xl {
  padding: 14px 20px;
}
</style>
