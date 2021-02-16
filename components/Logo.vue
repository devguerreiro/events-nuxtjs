<template>
  <div>
    <img
      v-if="normalizedSize === 'nav'"
      height="48"
      width="60"
      class="object-contain"
      src="~/assets/img/coruja-logo-nav.png"
      alt="Logo Coruja"
      :title="$t('components.logo')"
    />
    <img
      v-else-if="normalizedSize === 'mobile'"
      height="96"
      width="120"
      class="object-contain"
      src="~/assets/img/coruja-logo-mobile.png"
      alt="Logo Coruja"
      :title="$t('components.logo')"
    />
    <img
      v-else-if="normalizedSize === 'ipad'"
      height="175"
      width="218"
      class="object-contain"
      src="~/assets/img/coruja-logo-ipad.png"
      alt="Logo Coruja"
      :title="$t('components.logo')"
    />
    <img
      v-else
      height="220"
      width="275"
      class="object-contain"
      src="~/assets/img/coruja-logo-desktop.png"
      alt="Logo Coruja"
      :title="$t('components.logo')"
    />
  </div>
</template>

<script>
export default {
  props: {
    size: {
      type: String,
      default: '',
    },
  },
  computed: {
    normalizedSize: function () {
      return this.size.trim().toLowerCase()
    },
  },
}
</script>
