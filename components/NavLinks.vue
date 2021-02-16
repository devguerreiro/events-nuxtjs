<template>
  <div>
    <div items-left>
      <nuxt-link :to="localePath('index')">
        <EventLogo size="nav" />
      </nuxt-link>
    </div>
    <div class="flex flex-1 ml-16 items-center" items-center>
      <EventButton type="back-page" :label="$t('buttons.back')" />
    </div>
    <div class="flex justify-around items-center" items-right>
      <nuxt-link
        v-for="link in links"
        class="mx-4 px-2"
        :key="link.label"
        :to="localePath(link.url)"
      >
        {{ $t(link.label) }}
      </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: ['links'],
}
</script>

<style scoped>
.nuxt-link-exact-active {
  border-bottom: 4px solid #60a5fa;
  border-radius: 12px;
}
</style>
