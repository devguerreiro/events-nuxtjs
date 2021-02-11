<template>
  <button
    class="px-4 py-2 bg-transparent rounded-full ring-2 ring-blue-200 ring-opacity-80 font-semibold focus:outline-none"
    :title="label"
    :class="
      disabled
        ? 'cursor-not-allowed'
        : 'transform active:scale-100 hover:scale-110 hover:bg-blue-400'
    "
    :type="type"
    :disabled="disabled"
  >
    {{ label }}
  </button>
</template>

<script>
export default {
  props: ['type', 'label', 'disabled'],
}
</script>
