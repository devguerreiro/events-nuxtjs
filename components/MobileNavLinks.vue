<template>
  <div>
    <EventButton type="back-page" :label="$t('buttons.back')" />
    <el-dropdown trigger="click">
      <span title="Menu icon" class="el-icon-menu text-3xl text-blue-400" />
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          v-for="link in links"
          :icon="link.icon"
          :key="link.label"
        >
          <div class="inline-block">
            <nuxt-link :to="localePath(link.url)">
              {{ $t(link.label) }}
            </nuxt-link>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style scoped>
.nuxt-link-exact-active {
  border-bottom: 2px solid #60a5fa;
  border-radius: 5px;
  padding-bottom: 2px;
}
</style>
