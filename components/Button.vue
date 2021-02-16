<template>
  <div>
    <button
      v-if="normalizedType === 'back-page'"
      class="flex items-center focus:outline-none"
      :title="label"
      @click="$router.back()"
    >
      <img
        :src="require('~/assets/icons/back.svg')"
        class="mr-2"
        alt="Back icon"
        title="Back icon"
        height="16"
        width="16"
      />
      {{ label }}
    </button>
    <button
      v-else
      class="px-4 py-2 bg-transparent rounded-full ring-2 ring-blue-200 ring-opacity-80 font-semibold focus:outline-none"
      :title="label"
      :class="
        disabled
          ? 'cursor-not-allowed'
          : 'transform active:scale-100 hover:scale-110 hover:bg-blue-400'
      "
      :type="normalizedType"
      :disabled="disabled"
    >
      {{ label }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    label: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    normalizedType: function () {
      return this.type.trim().toLowerCase()
    },
  },
}
</script>
