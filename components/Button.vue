<template>
  <button
  class="text-center px-4 py-2 bg-blue-400 rounded-3xl ring-4 ring-blue-200 ring-opacity-80 text-white font-bold"
  :type="type"
  :disabled="disabled"
  >
    {{label}}
  </button>
</template>

<script>
export default {
  props: ["type", "label", "disabled"]
}
</script>
