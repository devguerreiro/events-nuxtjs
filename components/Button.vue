<template>
  <button
  class="bg-blue-400 rounded-3xl text-center px-4 py-2 mt-4 mb-2 text-white font-bold"
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
